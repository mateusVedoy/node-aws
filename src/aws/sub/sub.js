import { sqs, AWS_URL } from "../config.js"

const consume = async () => {

    try {

        const params = {
            QueueUrl: AWS_URL,
            WaitTimeSeconds: 2,
            MaxNumberOfMessages: 10
        }

        const msg = await sqs.receiveMessage(params).promise()
        
        return msg.Messages

    } catch (error) {
        throw error
    }
}

export { consume }