const AWS = require('aws-sdk');

const s3 = new AWS.S3();

async function getObject (Key) {
  try {
    const params = {
      Bucket: 'ingrid-voice-assets',
      Key
    }

    const data = await s3.getObject(params).promise();

    return data.Body;
  } catch (e) {
    throw new Error(`Could not retrieve file from S3: ${e.message}`)
  }
}

module.exports = getObject;