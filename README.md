# folklens-aws
Use CloudFormation to create the AWS resources needed to call a Lambda function via HTTP.

## Commands

### Create stack

`$ aws cloudformation create-stack --stack-name folklens --template-body file://folklens-stack.json --capabilities CAPABILITY_IAM`

### View the result

View https://{API ID}.execute-api.{REGION}.amazonaws.com/echo-payload in a browser.

### Delete stack

`$ aws cloudformation delete-stack --stack-name folklens`

## Stack Visualisation 

![Stack Visualisation](stack-visualisation.png "Stack Visualisation")