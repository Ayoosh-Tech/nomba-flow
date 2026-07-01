import { useState } from "react";

const refundData = [
  {
    id: "RF001",
    customer: "Amina Bello",
    amount: "₦25,000",
    reason: "Duplicate Payment",
    status: "Completed",
    date: "June 20, 2026",
  },
  {
    id: "RF002",
    customer: "Aliu Musa",
    amount: "₦8,000",
    reason: "Customer Request",
    status: "Pending",
    date: "June 21, 2026",
  },
  {
    id: "RF003",
    customer: "Grace James",
    amount: "₦15,500",
    reason: "Cancelled Order",
    status: "Completed",
    date: "June 22, 2026",
  },
];

function Refunds() {
  const [search, setSearch] = useState("");

  const filteredRefunds = refundData.filter((refund) =>
    refund.customer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 p-6">

      <h1 className="text-3xl font-bold text-slate-800 mb-2">
        Refunds
      </h1>

      <p className="text-slate-500 mb-8">
        Manage customer refunds.
      </p>

      {/* Search */}

      <input
        type="text"
        placeholder="Search customer..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full md:w-96 p-3 rounded-xl border mb-8 outline-none focus:ring-2 focus:ring-green-500"
      />

      {/* Cards */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

        <StatCard
          title="Total Refunds"
          value="₦48,500"
        />

        <StatCard
          title="Completed"
          value="2"
        />

        <StatCard
          title="Pending"
          value="1"
        />

      </div>

      {/* Table */}

      <div className="bg-white rounded-2xl shadow overflow-x-auto">

        <table className="w-full">

          <thead className="bg-slate-100">

            <tr>

              <th className="text-left p-4">Customer</th>
              <th className="text-left p-4">Amount</th>
              <th className="text-left p-4">Reason</th>
              <th className="text-left p-4">Status</th>
              <th className="text-left p-4">Date</th>
              <th className="text-left p-4">Action</th>

            </tr>

          </thead>

          <tbody>

            {filteredRefunds.map((refund) => (

              <tr key={refund.id} className="border-t">

                <td className="p-4">{refund.customer}</td>
                <td className="p-4">{refund.amount}</td>
                <td className="p-4">{refund.reason}</td>

                <td className="p-4">

                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      refund.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {refund.status}
                  </span>

                </td>

                <td className="p-4">{refund.date}</td>

                <td className="p-4">

                  <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg">
                    View
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h3 className="text-slate-500">{title}</h3>

      <p className="text-3xl font-bold text-green-600 mt-2">
        {value}
      </p>

    </div>
  );
}

export default Refunds;
