# Demo API 
Project to demo API Services 

## Synopsis

This is a demo project includes a lambda function created in node js for microservices which provides functionality to perform operations on Dynamo DB. It includes create, fetch, update and delete operations.

Also, includes the SWAGGER json file for importing to AWS which creates API for different methods to perform. These APIs have an integration with Lambda Function. 

Note: Please update the lambda function ARN in the swagger json. Or, if creating the stacks using cloudformation use the Output Value of the Lambda Function and map the ARN to swagger json.


## Code Example

1. Refer the code in /lambdaFunction/index.js file for the lambda functionality. 

2. Refer the Swagger Json file for the APIs



## Installation

Navigate to the directory where you downloaded the lambdaFunction. Then run npm install.

Zip the node_modules and index.js and upload the AWS Lambda Function. 

## API Reference

Depending on the size of the project, if it is small and simple enough the reference docs can be added to the README. For medium size to larger projects it is important to at least provide a link to where the API reference docs live.

## Tests

1. Sample Requests are checked in.  Tests can be done using Postman or API console in AWS. 


## Contributors

Let people know how they can dive into the project, include important links to things like issue trackers, irc, twitter accounts if applicable.

