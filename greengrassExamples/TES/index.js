/*
 *  Copyright 2010-2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 */

/*
 * Demonstrates retrieving a Group Role Credential if one is set.
 */

const AWS = require('aws-sdk');
const util = require('util');

const credChain = new AWS.CredentialProviderChain();

// Max retry every 30 seconds to retrieve the credentials
const maxRetryInterval = 30;
// Initially, try with one second retry interval
const initialRetryInterval = 1;

function getCredential(retryInterval) {
    const promise = credChain.resolvePromise();

    promise.then((creds) => {
        console.log(util.format('Access Key: %s\nSecret Key: %s\nSession Key: %s\n', creds.accessKeyId, creds.secretAccessKey, creds.sessionToken));
    },
    (err) => {
        console.log(err);
        // Try again with incremental backoff
        setTimeout(() => {
            getCredential(Math.min(maxRetryInterval, retryInterval * 2));
        }, retryInterval);
    });
}

getCredential(initialRetryInterval);

// This is a handler which does nothing for this example
exports.handler = function handler(event, context) {
    console.log(event);
    console.log(context);
};
