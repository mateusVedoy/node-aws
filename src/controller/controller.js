import { publish } from "../aws/pub/pub.js";
import { consume } from "../aws/sub/sub.js";

const publishController = async (req, res) => {
    try {
        const { message } = req.body

        const strMessage = JSON.stringify(message)

        const messageId = await publish(strMessage)

        return res.status(201).json({ 
            Report: "Message succesfully published",
            messageId: messageId 
        })

    } catch (error) {
        return res.status(400).json({ 
            Report: "Message couldn't succesfully be published",
            Error: error
        })
    }
}

const consumeController = async (_, res) => {
    try {
        const messages = await consume()

        return res.status(200).json({
            Report: "Messages to be consumed bellow",
            Messages: messages
        })

    } catch (error) {
        return res.status(400).json({ 
            Report: "Message(s) couldn't succesfully be consumed",
            Error: error
        })
    }
}

export {
    publishController,
    consumeController
}