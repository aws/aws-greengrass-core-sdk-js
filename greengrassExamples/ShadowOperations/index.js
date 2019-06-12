/*
 * Copyright 2010-2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 */

/*
 * Demonstrates a shadow operation using Greengrass Core NodeJS SDK
 * This lambda function will retrieve underlying platform information and
 * update the reported state of 'platform' shadow with that message.
 */

const ggSdk = require('aws-greengrass-core-sdk');

const iotClient = new ggSdk.IotData();
const os = require('os');
const util = require('util');

const myPlatform = util.format('%s-%s', os.platform(), os.release());
const shadowUpdateParams = {
    thingName: 'platform',
    payload: JSON.stringify({ state: { reported: { platform: myPlatform } } }),
};
const shadowGetParams = {
    thingName: 'platform',
};

exports.handler = function handler(event, context) {
    console.log(context);

    // Update Thing Shadow
    console.log('Update Thing Operation');
    iotClient.updateThingShadow(shadowUpdateParams, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
        }
    });

    // Get Thing Shadow
    console.log('Shadow Get Operation');
    iotClient.getThingShadow(shadowGetParams, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            console.log(data);
        }
    });
};
