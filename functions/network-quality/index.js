const AWS = require("aws-sdk");

exports.handler = async (event) => {
  const body = JSON.parse(event.body);
  const s3 = new AWS.S3();
  const date = new Date();
  const seconds = Math.round(date.getTime() / 1000);
  const key = `${event.headers.person}-${seconds}.json`;
  const params = {
    Body: JSON.stringify(body),
    Bucket: process.env.BUCKET,
    Key: key,
  };
  const s3Response = await s3.putObject(params).promise();
  return s3Response;
};

// You can automate sending requests to this URL every minute using crontab, with a command like:

// * * * * * NetworkQuality -c | curl --header "Content-Type: application/json" --header "Person: tony” --request PUT --data-binary @- https://[API-GATEWAY-HOSTNAME]/network-quality
