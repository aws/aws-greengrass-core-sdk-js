## AWS Greengrass Core SDK for JavaScript

The **AWS Greengrass Core SDK for JavaScript** allows developers to write JavaScript Lambda functions which will run within Greengrass.

## Overview

This document provides instructions for preparing your Greengrass Core environment to run Lambda functions written in JavaScript. It also includes examples on how to develop a Lambda function in JavaScript as well as packaging and running an example Hello World file in JavaScript for your Greengrass core.

## Preparing your Greengrass to run NodeJS Lambda functions

The environment where Greengrass is running on needs to be able to run NodeJS 12.x applications.

*   Install NodeJS 12 for your platform. You can download the newest NodeJS from [https://nodejs.org/en/download/](https://nodejs.org/en/download/).
*   When you untar the package downloaded from NodeJS website, you will find `node` file under `bin` directory.
*   Copy the file to _**/usr/bin**_ or _**/usr/local/bin**_ folder.
*   Rename the file to _**nodejs12.x**_

## Getting Started - Hello World

*   Copy `samples/HelloWorld` folder to your workspace.
*   Create a folder `node_modules` under `HelloWorld` folder.
*   Unzip aws-greengrass-core-sdk-js.zip into the folder. It should create a folder HelloWorld/node_modules/aws-greengrass-core-sdk
*   Use NPM to install the required dependency, cbor. `npm i cbor@5.0.1`.
*   Zip up the content of HelloWorld folder so that the index.js is on the top of the zip file structure.
*   Go to AWS Lambda Console.
*   Create a new function.
*   Choose the Runtime as `Node.js 12.x`
*   Upload the zip file in _Lambda function code_ section.
*   Handler is _index.handler_
*   Choose any role as the role is not used within Greengrass.
*   After creating the function, publish the Lambda.
*   Create an Alias and point to the Published version (not $LATEST).
*   Go to your Greengrass Group and add the Lambda under Lambdas section.
*   Click on the Lambda and change the _Lambda lifecycle_ to _Make this function long-lived and keep it running indefinitely._
*   Add a Subscription with the following configuration:
    *   Source: Lambda which you just created and added to the group
    *   Target: IoT Cloud
    *   Topic: hello/world
*   Deploy. A message from your Lambda should be published to the topic _hello/world_ in the cloud every 5 seconds. You can check this by going to AWS IoT's _Test_ page and subscribing to topic _hello/world_.

## Including aws-greengrass-core-sdk with your function

Unzip the SDK into your node_modules folder of your function. This should create a aws-greengrass-core-sdk folder which includes the SDK.

## Logging in NodeJS Lambdas

Your _console.log_ operation will be logged as INFO. A _console.error_ operation will be logged as ERROR. Currently, our NodeJS SDK only allows you to log at INFO or ERROR level only.

## Supported Datatypes

From GGC version 1.5, you can send both JSON and binary data as a payload when you invoking other Lambdas or publishing a message using IotData service. In order to make your lambda be able to handle binary payload, you need to configure the lambda in Greengrass console to mark it using binary input payload so that GGC can know how to deal with the data.

## Supported Context

In Greengrass, you can send a context object in a JSON format to be passed to another Lambda that is being invoked. The context format looks like this: `{ custom: { customData: 'customData', }, }`

<div class="section" id="compatibility">

## Compatibility[¶](#compatibility "Permalink to this headline")

As new features are added to AWS IoT Greengrass, newer versions of the AWS IoT Greengrass SDK may be incompatible with older versions of the AWS IoT Greengrass core. The following table lists the compatible SDKs for all GGC releases.


<table style="width:50%">

<tbody>

<tr>

<th>GGC Version</th>

<th>Compatible SDK Versions</th>

</tr>

<tr>

<td>1.0.x-1.6.x</td>

<td>1.0.x-1.2.x</td>

</tr>

<tr>

<td>1.7.x-1.8.x</td>

<td>1.0.x-1.3.x</td>

</tr>

<tr>

<td>1.9.x</td>

<td>1.0.x-1.4.x</td>

</tr>

<tr>

<td>1.10.x</td>

<td>1.0.x-1.6.x</td>

</tr>

<tr>

<td>1.11.x</td>

<td>1.0.x-1.7.x</td>

</tr>

</tbody>

</table>

</div>

<div class="Section" id="1.7.0updates">

## 1.7.0 Updates[¶](#1.7.0updates "Permalink to this headline")

Stream manager supports automatic data export to AWS S3 and AWS IoT SiteWise, provides new API method to update existing streams, and pause or resume exporting.

</div>

<div class="Section" id="1.6.0updates">

## 1.6.0 Updates[¶](#1.6.0updates "Permalink to this headline")

Added support for StreamManager, see [AWS Docs](https://docs.aws.amazon.com/greengrass/latest/developerguide/stream-manager.html)
for more information.

### Compatibility

StreamManager has adds a new dependency to this package, `cbor==5.0.1`. 
Please make sure to include it in your lambda or else the SDK will not function.
In addition to the new dependency, the 1.6.0 version of this SDK now requires NodeJS version 12
or greater since NodeJS 6 and 8 are end-of-life. See [https://docs.aws.amazon.com/lambda/latest/dg/runtime-support-policy.html](https://docs.aws.amazon.com/lambda/latest/dg/runtime-support-policy.html).

### StreamManager Usage

```javascript
const {
    StreamManagerClient
} = require('aws-greengrass-core-sdk').StreamManager;

const c = new StreamManagerClient({
    onConnectCb: async () => {
        try {
            // Let's start with something simple.
            // Just print out all the available stream names on the server 
            console.log(await c.listStreams());
        } finally {
            c.close(); // Always close the client when you're done
        }
    }
});
```

</div>

<div class="Section" id="1.5.0updates">

## 1.5.0 Updates[¶](#1.5.0updates "Permalink to this headline")

Added support for publish() parameter queueFullPolicy which can be set to 'AllOrError' to enforce that the published message is either delivered to all subscription destinations or delivered to no destinations and returns an error when Greengrass Core's internal work queue is full.

</div>

<div class="Section" id="1.4.0updates">

## 1.4.0 Updates[¶](#1.4.0updates "Permalink to this headline")

Added support for Node.js 8.10 Lambda runtime. Lambda functions that use Node.js 8.10 runtime can now run on an AWS IoT Greengrass core. (Existing Lambda functions that use Node.js 6.10 runtime can still run on Greengrass core, but they can't be updated after 5/30/2019. Please refer to [AWS Lambda Runtimes Support Policy](https://docs.aws.amazon.com/lambda/latest/dg/runtime-support-policy.html).)

</div>

<div class="Section" id="1.3.1updates">

## 1.3.1 Updates[¶](#1.3.1updates "Permalink to this headline")

Improved log level granularity.

</div>

<div class="Section" id="1.3.0updates">

## 1.3.0 Updates[¶](#1.3.0updates "Permalink to this headline")

SDK supports SecretsManager client.

</div>

<div class="Section" id="1.2.0updates">

## 1.2.0 Updates[¶](#1.2.0updates "Permalink to this headline")

SDK and GGC compatibility check takes place in the background.

</div>

<div class="Section" id="1.1.0updates">

## 1.1.0 Updates[¶](#1.1.0updates "Permalink to this headline")

Lambda only accepted payload in JSON format. With this update, Invoking or publishing binary payload to a lambda is supported.

</div>

<div class="Section" id="1.0.1updates">

## 1.0.1 Updates[¶](#1.0.1updates "Permalink to this headline")

Shadow operations were not receiving responses from the local shadow properly. This has been fixed.

Lambda Invoke function's InvocationType's default value was Event. This has been changed to RequestResponse.

</div>

## Getting Help

*   [Ask on a Greengrass forum](https://forums.aws.amazon.com/forum.jspa?forumID=254)

## License

Apache 2.0
