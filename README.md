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
1. Use AWS CLI to create the Dynamo DB Structure. create_table_script.txt contains the AWS CLI command to create the structure.

2. Navigate to the directory where you downloaded the lambdaFunction. Then run npm install. Zip the node_modules and index.js and upload the AWS Lambda Function. 

3. Deploy the API by importing Swagger file

4. Test the API using AWS API Console or Postman using the sample scripts are provided in the example provided. 


## Tests

1. Sample Requests are checked in.  Tests can be done using Postman or API console in AWS. 


## Contributors

Rahul Jain

