import { Link } from "react-router-dom";

function Transactions() {
    const transactions = [
        {
            id: 1,
            customer: "Amina Bello",
            amount: "₦25,000",
            status: "Successful",
        },
        {
            id: 2,
            customer: "Aliu Musa",
            amount: "₦8,000",
            status: "Pending",
        },
        {
            id: 3,
            customer: "Grace James",
            amount: "₦15,000",
            status: "Failed",
        },
    ];

    return(
        <div className="min-h-screen bg-slate-50 p-6">
            <h1 className="text-3xl font-bold text-slate-800 mb-6">Transactions</h1>

            <div className="mb-6">
                <input type="text" placeholder="Search transactions..." className="w-full md:w-96 p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500" />
            </div>

            <div className="flex gap-3 mb-6 flex-wrap">
                <button className="px-4 py-2 bg-green-600 text-white rounded-lg">All</button>
                <button className="px-4 py-2 bg-white border rounded-lg">Successful</button>
                <button className="px-4 py-2 bg-white border rounded-lg">Pending</button>
                <button className="px-4 py-2 bg-white border rounded-lg">Failed</button>
            </div>

            <div className="bg-white rounded-2xl shadow-sm overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-slate-100">
                        <tr>
                            <th className="text-left p-2">Customer</th>
                             <th className="text-left p-2">Amount</th>
                            <th className="text-left p-5">Status</th>
                            <th className="text-left p-2">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {transactions.map((transaction) => (
                            <tr key={transaction.id} className="border-t">
                                <td className="p-4">{transaction.customer}</td>
                                <td className="p-4">{transaction.amount}</td>
                                <td className="p-4"><StatusBadge status={transaction.status} /> </td>
                                <td className="p-4"><Link to={`/transactions/${transaction.id}`} className="text-green-600 font-semibold">View</Link></td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

function StatusBadge({ status }) {
    const styles = {
        Successful: "bg-green-100 text-green-700",
        Pending: "bg-yellow-100 text-yellow-700",
        Failed: "bg-red-100 text-red-700",
    };

    return(
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${styles[status]}`}>{status}</span>
    );
}

export default Transactions;