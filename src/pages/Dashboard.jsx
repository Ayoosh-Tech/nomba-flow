
function Dashboard() {
    return (
        <>
                <h2 className="text-3xl font-bold text-slate-800 mb-8 mt-6">Dashboard</h2>

                {/* Stats*/}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
                    <StatCard title="Revenue" value="₦1,250,000" />
                    <StatCard title="Transactions" value="248" />
                    <StatCard title="Refunds" value="12" />
                    <StatCard title="Success Rate" value="97%" />
                </div>

                {/* Recent Activity*/}
                <div className="bg-white rounded-2xl shadow-sm p-6">
                    <h3 className="text-xl font-semibold mb-6">Recent Activity</h3>

                    <div className="space-y-4 text-slate-600">
                        <p>✅ Payment completed</p>
                        <p>💸 Refund processed</p>
                        <p>📩 Webhook received</p>
                    </div>
                </div>
            
        </>
    );
}


function StatCard({ title, value }){
    return(
        <div className="bg-white rounded-2xl shadow-sm p-6">
            <h3 className="text-slate-500">{title}</h3>

            <p className="text-3xl font-bold text-green-600 mt-2">{value}</p>
        </div>
    );
}

export default Dashboard;