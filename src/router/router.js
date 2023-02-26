import { Router } from "express"
import { consumeController, publishController } from "../controller/controller.js";

const route = Router()

route.post("/publish", publishController)
route.get("/consume", consumeController)

export { route }