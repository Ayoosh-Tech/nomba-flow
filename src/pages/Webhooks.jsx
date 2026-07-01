import { useState } from "react";

const webhookData = [
  {
    id: 1,
    event: "payment.success",
    reference: "NMB-00124567",
    status: "Delivered",
    date: "Jun 30, 2026",
  },
  {
    id: 2,
    event: "payment.failed",
    reference: "NMB-00124568",
    status: "Failed",
    date: "Jun 29, 2026",
  },
  {
    id: 3,
    event: "payment.success",
    reference: "NMB-00124569",
    status: "Delivered",
    date: "Jun 28, 2026",
  },
];

function Webhooks() {
  const [search, setSearch] = useState("");

  const filtered = webhookData.filter(
    (item) =>
      item.event.toLowerCase().includes(search.toLowerCase()) ||
      item.reference.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <h1 className="text-3xl font-bold text-slate-800">
        Webhooks
      </h1>

      <p className="text-slate-500 mb-8">
        Monitor incoming webhook events from Nomba.
      </p>

      <input
        type="text"
        placeholder="Search webhook..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full md:w-96 p-3 border rounded-xl mb-8 focus:outline-none focus:ring-2 focus:ring-green-500"
      />

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <Card title="Events Received" value="24" />
        <Card title="Delivered" value="22" />
        <Card title="Failed" value="2" />
      </div>

      <div className="bg-white rounded-2xl shadow overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-4 text-left">Event</th>
              <th className="p-4 text-left">Reference</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Date</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((item) => (
              <tr key={item.id} className="border-t">
                <td className="p-4">{item.event}</td>
                <td className="p-4">{item.reference}</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      item.status === "Delivered"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="p-4">{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h3 className="text-slate-500">{title}</h3>
      <p className="text-3xl font-bold text-green-600 mt-2">{value}</p>
    </div>
  );
}

export default Webhooks;
