import { sqs, AWS_URL } from "../config.js"


const publish = async (parameter) => {

    try {
        const param = {
            MessageBody: parameter,
            QueueUrl: AWS_URL
        }
    
        const responseSQS = await sqs.sendMessage(param).promise()

        return responseSQS.MessageId

    } catch (error) {
        throw error
    }
}

export { publish }