# 🚀 NombaFlow

NombaFlow is a modern merchant payment dashboard and checkout application built with React, Node.js, Express, Tailwind CSS, and the Nomba Checkout API.

It enables merchants to initiate secure payments, monitor transactions, view webhook events, manage refunds, and configure merchant settings through a clean and responsive interface.

---

## ✨ Features

- 💳 Secure payment checkout powered by the Nomba Checkout API
- 📊 Merchant dashboard with payment overview
- 💰 Transactions page with transaction details
- 🔄 Refund management interface
- 🔔 Webhook monitoring page
- ⚙️ Merchant settings page
- 📱 Fully responsive design for desktop and mobile
- 🎨 Modern UI built with Tailwind CSS

---

## 🛠️ Tech Stack

### Frontend
- React
- React Router
- Tailwind CSS

### Backend
- Node.js
- Express.js
- Axios
- Dotenv
- CORS

### Payment Provider
- Nomba Checkout API
- Nomba Authentication API
- Nomba Webhooks

---

## 📂 Project Structure

```
NombaFlow
│
├── client
│   ├── src
│   ├── public
│   └── package.json
│
├── server
│   ├── routes
│   │   ├── auth.js
│   │   ├── checkout.js
│   │   └── webhook.js
│   ├── index.js
│   ├── package.json
│   └── .env
│
└── README.md
```

---

## 🚀 Getting Started

### Clone the repository

```bash
git clone https://github.com/Ayoosh-Tech/nombaflow.git
```

### Install frontend dependencies

```bash
cd client
npm install
```

### Install backend dependencies

```bash
cd ../server
npm install
```

---

## ▶️ Run the Application

### Start the backend

```bash
npm run dev
```

or

```bash
npm start
```

Backend runs on:

```
http://localhost:5000
```

### Start the frontend

```bash
cd client

npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

---

## 🔑 Environment Variables

Create a `.env` file inside the `server` folder.

Example:

```env
NOMBA_CLIENT_ID=your_client_id
NOMBA_CLIENT_SECRET=your_client_secret
NOMBA_ACCOUNT_ID=your_account_id
```

> **Do not commit your `.env` file to GitHub.**

---

## 💳 Payment Flow

1. Customer enters payment information.
2. Frontend sends the request to the Express backend.
3. Backend authenticates with the Nomba API.
4. A checkout session is created.
5. Customer is redirected to the Nomba Checkout page.
6. Nomba sends payment updates through Webhooks.

---

## 📸 Screenshots

### Landing Page

![Landing Page](screenshoots/landing-page.png)

### Dashboard

![Dashboard](screenshoots/dashboard.png)

### Checkout

![Checkout](screenshoots/checkout.png)
![Checkout -> Sandbox](screenshoots/checkout-sandbox.png)

### Transactions

![Transaction](screenshoots/transaction.png)

### Webhooks

![Webhooks](screenshoots/webhooks.png)

---

## 🌟 Future Improvements

- Real-time transaction updates
- Merchant authentication
- Analytics dashboard
- Payment history charts
- Export transactions
- Dark mode
- Email notifications

---

## 👩‍💻 Author

**Aishat Ize**

Built for the **Nomba API Integration Hackathon 2026**.

---

## 🙏 Acknowledgements

- Nomba
- React
- Express.js
- Tailwind CSS
- OpenAI ChatGPT




# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
