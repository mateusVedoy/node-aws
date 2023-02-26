import AWS from 'aws-sdk'
import dotenv from 'dotenv'

dotenv.config();

AWS.config.update({
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    endpoint: new AWS.Endpoint('http://localhost:9324/queue-number-one'),
});

const sqs = new AWS.SQS({
    region: process.env.AWS_REGION
})

const AWS_URL = process.env.AWS_QUEUE_URL

export {
    sqs,
    AWS_URL,
}