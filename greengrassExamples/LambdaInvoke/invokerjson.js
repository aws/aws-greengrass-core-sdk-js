/*
 * Copyright 2010-2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 */

/*
 * Demonstrates how to invoke another lambda with json data and receive the value from the call
 */

const ggSdk = require('aws-greengrass-core-sdk');

const lambdaClient = new ggSdk.Lambda();

exports.handler = function handler(event, context) {
    console.log(event);
    console.log(context);

    const cxt = {
        custom: {
            customData: 'customData',
        },
    };
    const contextString = JSON.stringify(cxt);
    const buff = Buffer.from(contextString);
    const clientContext = buff.toString('base64');

    const params = {
        FunctionName: 'arn:<partition>:lambda:<region>:<accountId>:function:<targetFunctionName>:<targetFunctionQualifier>',
        InvocationType: 'RequestResponse',
        ClientContext: clientContext,
        Payload: JSON.stringify({ message: 'payload message' }),
    };

    lambdaClient.invoke(params, (err, data) => {
        if (err) {
            console.error(err, err.stack);
        } else {
            console.log(data);
        }
    });
};
