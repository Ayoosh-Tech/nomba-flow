import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="min-h-screen bg-linear-gradient-to-r from-slate-950 via-slate-900 to-green-950 text-white" style={{backgroundImage: "linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #0F766E 100%)",}}>

      {/* ================= NAVBAR ================= */}

      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">

        <h1 className="text-3xl font-bold text-green-400">
          NombaFlow
        </h1>

        <div className="hidden md:flex gap-8 text-slate-300">

          <a href="#features" className="hover:text-green-400 transition">
            Features
          </a>

          <a href="#preview" className="hover:text-green-400 transition">
            Dashboard
          </a>

          <a href="#contact" className="hover:text-green-400 transition">
            Contact
          </a>

        </div>

        <Link
          to="/dashboard"
          className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl font-semibold transition"
        >
          Dashboard
        </Link>

      </nav>

      {/* ================= HERO ================= */}

      <section className="text-center px-6 py-24">

        <h1 className="text-6xl font-extrabold leading-tight">

          Accept African Payments

          <br />

          Faster with

          <span className="text-green-400">
            {" "}NombaFlow
          </span>

        </h1>

        <p className="mt-8 text-xl text-slate-300 max-w-3xl mx-auto">

          A modern payment integration platform powered by
          Nomba APIs. Accept payments, monitor transactions,
          manage refunds and webhooks effortlessly.

        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-6">

          <Link
            to="/dashboard"
            className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-xl font-semibold shadow-xl transition"
          >
            View Dashboard
          </Link>

          <Link
            to="/checkout"
            className="bg-white text-slate-900 hover:bg-slate-200 px-8 py-4 rounded-xl font-semibold shadow-xl transition"
          >
            Try Checkout
          </Link>

        </div>

        <div className="flex flex-wrap justify-center gap-8 mt-16 text-slate-300">

          <p>✅ Secure Payments</p>

          <p>⚡ Fast Checkout</p>

          <p>🔔 Webhook Support</p>

          <p>💳 Powered by Nomba</p>

        </div>

      </section>

      {/* ================= DASHBOARD PREVIEW ================= */}

      <section
        id="preview"
        className="max-w-6xl mx-auto px-6 py-20"
      >

        <h2 className="text-4xl font-bold text-center mb-12">
          Dashboard Preview
        </h2>

        <div className="bg-slate-800 rounded-3xl p-8 shadow-2xl">

          <img
            src="/dashboard-preview(1).png"
            alt="Dashboard Preview"
            className="rounded-2xl"
          />

        </div>

      </section>

      {/* ================= FEATURES ================= */}

      <section
        id="features"
        className="max-w-7xl mx-auto px-6 py-20"
      >

        <h2 className="text-4xl font-bold text-center mb-16">
          Everything You Need
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {[
            {
              title: "Transactions",
              desc: "Track every payment in real time."
            },

            {
              title: "Checkout",
              desc: "Beautiful and secure payment experience."
            },

            {
              title: "Refunds",
              desc: "Monitor and manage refunds."
            },

            {
              title: "Webhooks",
              desc: "Receive instant payment events."
            },

            {
              title: "Settings",
              desc: "Configure your merchant account."
            },

            {
              title: "Analytics",
              desc: "Monitor revenue and performance."
            }

          ].map((item) => (

            <div
              key={item.title}
              className="bg-slate-800 rounded-2xl p-8 hover:-translate-y-2 transition shadow-xl"
            >

              <h3 className="text-2xl font-bold text-green-400 mb-4">
                {item.title}
              </h3>

              <p className="text-slate-300">
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* ================= CTA ================= */}

      <section className="text-center py-24 px-6">

        <h2 className="text-5xl font-bold mb-8">

          Ready to Accept Payments?

        </h2>

        <p className="text-xl text-slate-300 mb-12">

          Start integrating with NombaFlow today.

        </p>

        <Link
          to="/dashboard"
          className="bg-green-500 hover:bg-green-600 px-10 py-5 rounded-xl font-bold text-lg transition"
        >
          Go to Dashboard
        </Link>

      </section>

      {/* ================= FOOTER ================= */}

      <footer
        id="contact"
        className="border-t border-slate-700 py-12 text-center text-slate-400"
      >

        <h2 className="text-2xl font-bold text-green-400 mb-4">
          NombaFlow
        </h2>

        <p>
          Built with ❤️ using Nomba APIs
        </p>

        <p className="mt-3">
          © 2026 NombaFlow. All rights reserved.
        </p>

      </footer>

    </div>
  );
}

export default LandingPage;


//First Trial Landing Page
{/*import { Link } from "react-router-dom";
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
            > */}
               { /* Accept Nomba payments on Webflow in minutes. Configure, transact, refund, and monitor webhooks from one beautiful dashboard.*/ }
            {/* Integrate local payments effortlessly for Africans businesses.
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

export default Landing; */}