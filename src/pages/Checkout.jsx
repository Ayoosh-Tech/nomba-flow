import { useState } from "react";

function Checkout() {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const handlePayment = async (e) => {
  e.preventDefault();

  setLoading(true);

  try {
    const response = await fetch("https://nomba-flow-backend.onrender.com/api/checkout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        phone: phone,
        amount: amount,
        description: description
      }),
    });

    const data = await response.json();

    console.log(data);

    setLoading(false);

    if (data.data.checkoutLink) {
      window.location.href = data.data.checkoutLink;
    }
  } catch (error) {
    console.error(error);
    setLoading(false);
    alert("Payment failed.");
  }
};


  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl font-bold text-slate-800 mb-10">
          Secure Checkout
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* FORM */}

          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8">

            <h2 className="text-2xl font-bold mb-6">
              Customer Information
            </h2>

            <form
              onSubmit={handlePayment}
              className="space-y-5"
            >

              <input
                type="text"
                placeholder="Customer Name"
                className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-green-500 outline-none"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-green-500 outline-none"
                required
              />

              <input
                type="tel"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-green-500 outline-none"
                required
              />

              <input
                type="number"
                placeholder="Amount (₦)"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-green-500 outline-none"
                required
              />

              <textarea
                rows="4"
                placeholder="Payment Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full border rounded-xl p-4 focus:ring-2 focus:ring-green-500 outline-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-xl font-semibold transition disabled:bg-green-300"
              >
                {loading
                  ? "Processing Payment..."
                  : "Proceed to Secure Payment"}
              </button>

            </form>

          </div>

          {/* ORDER SUMMARY */}

          <div className="bg-slate-900 text-white rounded-2xl shadow-lg p-8 h-fit">

            <h2 className="text-2xl font-bold mb-6">
              Order Summary
            </h2>

            <div className="space-y-4">

              <div className="flex justify-between">
                <span>Amount</span>
                <span>₦{amount || 0}</span>
              </div>

              <div className="flex justify-between">
                <span>Processing Fee</span>
                <span>₦100</span>
              </div>

              <hr className="border-slate-700" />

              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span>₦{amount ? Number(amount) + 100 : 100}</span>
              </div>

            </div>

            <div className="mt-10">

              <h3 className="font-semibold mb-4">
                Payment Methods
              </h3>

              <div className="grid grid-cols-2 gap-3">

                <div className="bg-slate-800 rounded-lg p-3 text-center">
                  💳 Card
                </div>

                <div className="bg-slate-800 rounded-lg p-3 text-center">
                  🏦 Bank
                </div>

                <div className="bg-slate-800 rounded-lg p-3 text-center">
                  📱 Transfer
                </div>

                <div className="bg-slate-800 rounded-lg p-3 text-center">
                  💰 Wallet
                </div>

              </div>

            </div>

            <div className="mt-10 bg-green-600 rounded-xl p-5">

              <h3 className="font-bold mb-2">
                🔒 Secure Payment
              </h3>

              <p className="text-sm">
                Powered by the Nomba Checkout API. Your payment is encrypted and securely processed.
              </p>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Checkout;




// Just for Testing
//import { useState } from "react";
//import axios from "axios";

{/* function Checkout() {
  const [formData, setFormData] = useState({
    customerName: "",
    email: "",
    phone: "",
    amount: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log("Submitting...");
    console.log(formData);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/checkout",
        formData
      );
      {/*console.log(response.data);
      alert("Request sent sucessfully!");
    } catch(error) {
        console.log(error);
        alert("An error occurred, Check the console.");
    }*/}
    
   { /*    console.log(response.data);
    } catch (error) {
      console.log(error.response?.data || error.message);
    }*/}

   {/* console.log(response.data);
        window.location.href = response.data.data.checkoutLink;
    }
    catch (error) {
      console.log(error.response?.data || error.message);
    }
  };

  return (
    <main className="p-6">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-6">
        <h1 className="text-3xl font-bold text-slate-800 mb-8">Checkout</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="customerName"
            placeholder="Customer Name"
            value={formData.customerName}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={formData.amount}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg"
          >
            Proceed to Payment
          </button>
        </form>
      </div>
    </main>
  );
}

export default Checkout; */}

