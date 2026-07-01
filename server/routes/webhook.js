import express from "express";
import { Route } from "react-router-dom";

const router = express.Router();

router.post("/", (req, res) => {
    console.log("Webhook received!");
    console.log(req.body);

    //Tell Nomba we received the notification
    res.status(200).json({
        success: true,
    });
});

export default router;