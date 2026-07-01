import express from "express";
import axios from "axios";

const router = express.Router();

router.get("/", async(req, res) => {
    try {
       
         console.log("BASE_URL:",
                process.env.BASE_URL);
            console.log("Full URL:", `${process.env.BASE_URL}/v1/auth/token/issue`);
        

         const response = await axios.post(
            `${process.env.BASE_URL}/v1/auth/token/issue`,
            {
                grant_type: "client_credentials",
                client_id: process.env.CLIENT_ID,
                client_secret: process.env.PRIVATE_KEY,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    accountId: process.env.ACCOUNT_ID,
                },
            }
        );

        res.json({
            accessToken:
            response.data.data.access_token,
        });
    } catch (error) {
        console.log(error.response?.data);
        res.status(500).json(
            error.response?.data || { message:
        error.message, }
            
        );
    }
});

export default router;