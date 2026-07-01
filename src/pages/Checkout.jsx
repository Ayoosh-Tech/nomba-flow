import { useState } from "react";
import axios from "axios";

function Checkout() {
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

    console.log(response.data);
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

export default Checkout;

