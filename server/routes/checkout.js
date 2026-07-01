import express from "express";
import axios from "axios";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    // Step 1: Get access token
    const authResponse = await axios.post(
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

    const accessToken = authResponse.data.data.access_token;

    // Step 2: Create checkout order
    const checkoutResponse = await axios.post(
      `${process.env.BASE_URL}/v1/checkout/order`,
      {
        order: {
          amount: `${req.body.amount}.00`,
          currency: "NGN",
          customerEmail: req.body.email,
          callbackUrl: "https://example.com/callback",
          accountId: process.env.SUB_ACCOUNT_ID,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          accountId: process.env.ACCOUNT_ID,
          "Content-Type": "application/json",
        },
      }
    );

    res.json(checkoutResponse.data);

  } catch (error) {
    console.log(error.response?.data || error.message);
    res.status(500).json(error.response?.data || { message: error.message });
  }
});

export default router;
