/*
 * Copyright (c) 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 */

/*
 * This example will create a Greengrass StreamManager stream called "SomeStream".
 * It will then start writing data into that stream and StreamManager will
 * automatically export the written data to the customer-created property alias.
 * The property alias should be created before running this example.
 * This example will run forever, until the program is killed.

 * The size of the StreamManager stream on disk will not exceed the default (which is 256 MB).
 * Any data appended after the stream reaches the size limit, will continue to be appended, and
 * StreamManager will delete the oldest data until the total stream size is back under 256MB.
 */

const {
    StreamManagerClient, ExportDefinition,
    IoTSiteWiseConfig, MessageStreamDefinition, StrategyOnFull,
    ResourceNotFoundException, AssetPropertyValue, PutAssetPropertyValueEntry, Quality, TimeInNanos, Variant,
    util,
} = require('aws-greengrass-core-sdk').StreamManager;

const STREAM_NAME = 'SomeStream';
const PROPERTY_ALIAS = 'SomePropertyAlias';
const ENTRY_ID_PREFIX = 'SomeEntryId-';

const c = new StreamManagerClient();

function getRandomPutAssetPropertyValueEntry(i) {
    const maxTimeRandomness = 60;
    const maxOffsetRandomness = 10000;
    const randomValue = Math.random();
    // Note: Inorder to create a new asset property data, you should use the classes defined in the
    // aws-greengrass-core-sdk StreamManager module.
    const timestamp = new TimeInNanos()
        .withTimeInSeconds(Math.round(Date.now() / 1000) - Math.floor(Math.random() - maxTimeRandomness))
        .withOffsetInNanos(Math.floor(Math.random() * maxOffsetRandomness));
    const entry = new AssetPropertyValue()
        .withValue(new Variant().withDoubleValue(randomValue))
        .withQuality(Quality.GOOD)
        .withTimestamp(timestamp);

    return new PutAssetPropertyValueEntry()
        .withEntryId(`${ENTRY_ID_PREFIX}${i}`)
        .withPropertyAlias(PROPERTY_ALIAS)
        .withPropertyValues([entry]);
}

c.onConnected(async () => {
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
            .withIotSitewise([new IoTSiteWiseConfig()
                .withIdentifier(`IoTSiteWise-${STREAM_NAME}`)
                .withBatchSize(5)]);

        // Then create the stream with the IoTSiteWise export definition.
        await c.createMessageStream(
            new MessageStreamDefinition()
                .withName(STREAM_NAME)
                .withStrategyOnFull(StrategyOnFull.OverwriteOldestData)
                .withExportDefinition(exports),
        );

        let index = 0;
        // Now start putting in random SiteWise entries.
        const interval = setInterval(async () => {
            try {
                console.log('Appending new random SiteWise entries to stream');
                await c.appendMessage(STREAM_NAME, util.validateAndSerializeToJsonBytes(getRandomPutAssetPropertyValueEntry(index++)));
            } catch {
                clearInterval(interval);
                c.close();
            }
        }, 1000);
    } catch (e) {
        console.log(e);
        c.close();
    }
});

// Dummy handler because this example should run as a long-lived lambda
module.exports.handler = function handler() {
    return '';
};
