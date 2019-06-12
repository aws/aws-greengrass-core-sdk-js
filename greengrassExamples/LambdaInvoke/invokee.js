/*
 * Copyright 2010-2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 */

/*
 * Demonstrates how to return a result back to the caller of this lambda
 */

exports.handler = function handler(event, context, callback) {
    console.log(event);
    console.log(context);
    callback(undefined, { result: 'message' });
};
