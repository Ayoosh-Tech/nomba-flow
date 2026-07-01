import { Link } from "react-router-dom";
//import bgImage from "../assets/bg-image.png";

function Landing() {
    return (
        <div 
        style={{
            minHeight: "100vh",
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            backgroundImage: "linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F766E 100%)",
            color: "white",
        }}  >
            <h1
            style={{
                fontSize: "3rem",
                marginBottom: "1rem",
                color: "white",
            }}
            >
                NombaFlow
            </h1>

            <p
            style={{
                maxWidth: "600px",
                fontSize: "1.2rem",
                color: "#c5d4ea",
                marginBottom: "2rem",
            }}
            >
               { /* Accept Nomba payments on Webflow in minutes. Configure, transact, refund, and monitor webhooks from one beautiful dashboard.*/ }
            Integrate local payments effortlessly for Africans businesses.
            </p>
        <div
        style={{
            display: "flex",
            gap: "1rem",
        }}
        >
            <Link to="/dashboard">
            <button
            style={{
                padding: "1rem 2rem",
                border: "none",
                borderRadius: "12px",
                background: "#00A859",
                color: "white",
                cursor: "pointer",
                fontSize: "1rem",
            }}
            >
                View Dashboard
            </button>
            </Link>

            <Link to="/checkout">
            <button
            style={{
                padding: "1rem 2rem",
                borderRadius: "12px",
                border: "2px solid #00A859",
                background: "white",
                color: "#00A859",
                cursor: "pointer",
                fontSize: "1rem",
            }}
            >
                Try Checkout
            </button>
            </Link>
        </div>

        </div>
    );
}

export default Landing;