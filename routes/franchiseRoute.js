import express from "express";
import {sendFranchise} from "../controller/franchise.js"

const router = express.Router()
router.post('/send', sendFranchise)

export default router
