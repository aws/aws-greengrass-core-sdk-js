/*
 * Copyright (c) 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 */

/*
 * This example creates a local stream named 'SomeStream', and a status stream named 'SomeStatusStream.
 * It adds 1 S3 Export task into the 'SomeStream' stream and then stream manager automatically exports
 * the data to a customer-created S3 bucket named 'SomeBucket'.
 * The S3 bucket should be created before running this example.
 * This example runs until the customer-created file at URL 'SomeURL' has been uploaded to the S3 bucket.
 */

const {
    StreamManagerClient, ReadMessagesOptions, ExportDefinition,
    MessageStreamDefinition, StrategyOnFull, ResourceNotFoundException,
    S3ExportTaskDefinition, Status, StatusConfig, StatusLevel, StatusMessage, S3ExportTaskExecutorConfig,
    util,
} = require('aws-greengrass-core-sdk').StreamManager;

const STREAM_NAME = 'SomeStream';
const STATUS_STREAM_NAME = 'SomeStatusStream';
const BUCKET = 'SomeBucket';
const KEY = 'SomeKey';
const FILE_URL = 'file:/path/to/some/file.someExtension';

const c = new StreamManagerClient();
c.onConnected(async () => {
    // Try deleting the stream (if it exists) so that we have a fresh start
    try {
        await c.deleteMessageStream(STATUS_STREAM_NAME);
    } catch (e) {
        // Rethrow the error if it wasn't the expected error
        if (!(e instanceof ResourceNotFoundException)) {
            throw e;
        }
    }
    // Try deleting the stream (if it exists) so that we have a fresh start
    try {
        await c.deleteMessageStream(STREAM_NAME);
    } catch (e) {
        // Rethrow the error if it wasn't the expected error
        if (!(e instanceof ResourceNotFoundException)) {
            throw e;
        }
    }

    try {
        const exports = new ExportDefinition()
            .withS3TaskExecutor([new S3ExportTaskExecutorConfig()
                .withIdentifier(`S3Export-${STREAM_NAME}`)
                .withStatusConfig(new StatusConfig()
                    .withStatusLevel(StatusLevel.INFO)
                    .withStatusStreamName(STATUS_STREAM_NAME))]);

        // Create the export status stream first.
        await c.createMessageStream(
            new MessageStreamDefinition()
                .withName(STATUS_STREAM_NAME)
                .withStrategyOnFull(StrategyOnFull.OverwriteOldestData),
        );

        // Then create the stream with the S3 Export definition.
        await c.createMessageStream(
            new MessageStreamDefinition()
                .withName(STREAM_NAME)
                .withStrategyOnFull(StrategyOnFull.OverwriteOldestData)
                .withExportDefinition(exports),
        );

        // Append a S3 export task definition and print the sequence number.
        const taskDefinition = new S3ExportTaskDefinition()
            .withBucket(BUCKET)
            .withKey(KEY)
            .withInputUrl(FILE_URL);

        console.log(`Successfully appended message to stream with sequence number 
                    ${await c.appendMessage(STREAM_NAME, util.validateAndSerializeToJsonBytes(taskDefinition))}`);

        console.log('Now going to start reading statuses from the export status stream.');
        let isS3UploadComplete = false;
        while (!isS3UploadComplete) {
            try {
                // Read the statuses from the export status stream
                const messages = await c.readMessages(STATUS_STREAM_NAME,
                    new ReadMessagesOptions()
                        .withMinMessageCount(1)
                        .withReadTimeoutMillis(1000));

                messages.forEach((message) => {
                    // Deserialize the status message first.
                    const statusMessage = util.deserializeJsonBytesToObj(message.payload, StatusMessage);
                    // Check the status of the status message. If the status is 'Success', the file was successfully uploaded to S3.
                    // If the status was either 'Failure' or 'Cancelled', the server was unable to upload the file to S3.
                    // We will print the message for why the upload to S3 failed from the status message.
                    // If the status was "InProgress", the status indicates that the server has started uploading the S3 task.
                    if (statusMessage.status === Status.Success) {
                        console.log(`Successfully uploaded file at path ${FILE_URL} to S3.`);
                        isS3UploadComplete = true;
                    } else if (statusMessage.status === Status.Failure || statusMessage.status === Status.Canceled) {
                        console.log(`Unable to upload file at path ${FILE_URL} to S3. Message: ${statusMessage.message}`);
                        isS3UploadComplete = true;
                    }
                });
                // Sleep for sometime for the S3 upload task to complete before trying to read the status message.
                await new Promise((r) => setTimeout(r, 5000));
            } catch (e) {
                // Ignored
            }
        }
    } catch (e) {
        c.close();
    }
});

// Dummy handler because this example should run as a pinned lambda
module.exports.handler = function handler() {
    return '';
};
