'use strict';

console.log('Loading function');

const doc = require('dynamodb-doc');

const dynamo = new doc.DynamoDB();


/**
 * 
 */
exports.handler = (event, context, callback) => {
    //console.log('Received event:', JSON.stringify(event, null, 2));

    const done = (err, res) => callback(null, {
        statusCode: err ? '400' : '200',
        body: err ? err.message : JSON.stringify(res),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    
    console.log(event);
    var params={};

    switch (event.httpMethod) {
        case 'DELETE':
            dynamo.deleteItem(JSON.parse(event.body), done);
            break;
        case 'GET':
            dynamo.scan({ TableName: event.tableName }, done);
            break;
        case 'POST':
            params={};
            params.TableName=event.body.TableName;
            params.Item=event.body.Item;
            console.log(params);
            dynamo.putItem(params, done);
            break;
        case 'PUT':
            params={};
            params.TableName=event.body.TableName;
            params.Key=event.body.Key;
            params.UpdateExpression=event.body.UpdateExpression;
            params.ConditionExpression=event.body.ConditionExpression;
            params.ExpressionAttributeNames=event.body.ExpressionAttributeNames;
            params.ExpressionAttributeValues=event.body.ExpressionAttributeValues;
            dynamo.updateItem(params, done);
            break;
        default:
            done(new Error(`Unsupported method "${event.httpMethod}"`));
    }
};
