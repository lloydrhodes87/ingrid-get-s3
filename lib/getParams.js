const AWS = require('aws-sdk');
AWS.config.update({region:'eu-west-1'});


async function getParam() {
  const ssm = new AWS.SSM();

  var params = {
    Name: 'gmail-app-key', /* required */
    WithDecryption: true || false
  };

  const result = await ssm.getParameter(params).promise();
 
  return result.Parameter.Value;


}

module.exports = getParam;
