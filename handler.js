'use strict';

const getFile = require('./lib/s3');
const sendEmail = require('./lib/sendEmail')

module.exports.getDownload = async (event, context, callback) => {
  const filename = event.queryStringParameters.filename
  
  const file = await getFile(filename);

  const response = {
    statusCode: 200,
    body: JSON.stringify(file),
    headers: {
      "Access-Control-Allow-Origin": "https://ingrid-voice.netlify.app",
      
    },
  };

  callback(null, response);

};


module.exports.sendEmail = async (event, context, callback) => {
  
  const email = await sendEmail(event.body)
    .catch(err => console.log(err))
  ;

  const result = email.accepted.length > 0 ? 'accepted' : 'rejected'
 
  const response = {
    statusCode: 200,
    body: JSON.stringify({message: result}),
    headers: {
      "Access-Control-Allow-Origin": "https://ingrid-voice.netlify.app",
      
    },
  };

  callback(null, response);

};