let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();
exports.handler = function (event, context, callback) {


	callback(null, 'Successfully executed');
	ddb.query({
		TableName: 'plmx-app',
		ExpressionAttributeValues: {},
		KeyConditionExpression: '',
		FilterExpression: '',
	}, function (err, data) {
		if (err) {
			//handle error
		} else {
			//your logic goes here
		}
	});
}





















