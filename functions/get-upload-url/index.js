const AWS = require("aws-sdk");
const { v4: uuidv4 } = require("uuid");

exports.handler = async (event) => {
  const s3 = new AWS.S3();
  const params = {
    Bucket: process.env.BUCKET,
    Key: uuidv4(),
  };
  const url = s3.getSignedUrl("putObject", params);
  return { url: url };
};
