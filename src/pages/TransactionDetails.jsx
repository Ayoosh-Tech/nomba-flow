import { useParams } from "react-router-dom";

function TransactionDetails() {
  const { id } = useParams();

  const transactions = [
    {
      id: 1,
      customer: "Amina Bello",
      amount: "₦25,000",
      status: "Successful",
      method: "Card",
      date: "June 17, 2026",
      reference: "NMB-001245",
      email: "amina@gmail.com",
    },
    {
      id: 2,
      customer: "Aliu Musa",
      amount: "₦8,000",
      status: "Pending",
      method: "Card",
      date: "June 18, 2026",
      reference: "NMB-001246",
      email: "aliu@gmail.com",
    },
    {
      id: 3,
      customer: "John Okafor",
      amount: "₦15,500",
      status: "Failed",
      method: "Bank Transfer",
      date: "June 19, 2026",
      reference: "NMB-001247",
      email: "john@gmail.com",
    },
  ];

  const transaction = transactions.find(
    (item) => item.id === Number(id)
  );

  if (!transaction) {
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold text-red-600">
          Transaction Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <h1 className="text-3xl font-bold text-slate-800 mb-6">
        Transaction Details
      </h1>

      <div className="bg-white rounded-2xl shadow-sm p-8 max-w-3xl">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div>
            <p className="text-slate-500">Transaction ID</p>
            <p className="font-semibold">{transaction.id}</p>
          </div>

          <div>
            <p className="text-slate-500">Reference</p>
            <p className="font-semibold">{transaction.reference}</p>
          </div>

          <div>
            <p className="text-slate-500">Customer</p>
            <p className="font-semibold">{transaction.customer}</p>
          </div>

          <div>
            <p className="text-slate-500">Email</p>
            <p className="font-semibold">{transaction.email}</p>
          </div>

          <div>
            <p className="text-slate-500">Amount</p>
            <p className="font-semibold text-green-600">
              {transaction.amount}
            </p>
          </div>

          <div>
            <p className="text-slate-500">Payment Method</p>
            <p className="font-semibold">
              {transaction.method}
            </p>
          </div>

          <div>
            <p className="text-slate-500">Status</p>

            <span
              className={`px-3 py-1 rounded-full text-sm font-semibold ${
                transaction.status === "Successful"
                  ? "bg-green-100 text-green-700"
                  : transaction.status === "Pending"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {transaction.status}
            </span>
          </div>

          <div>
            <p className="text-slate-500">Date</p>
            <p className="font-semibold">{transaction.date}</p>
          </div>

        </div>

        <button
          className="mt-10 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl transition"
        >
          Issue Refund
        </button>

      </div>
    </div>
  );
}

export default TransactionDetails;