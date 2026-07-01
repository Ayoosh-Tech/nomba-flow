function Settings() {
  return (
    <div className="min-h-screen bg-slate-50 p-6">

      <h1 className="text-3xl font-bold text-slate-800">
        Settings
      </h1>

      <p className="text-slate-500 mb-8">
        Manage your merchant account.
      </p>

      <div className="bg-white rounded-2xl shadow p-8 max-w-3xl">

        <div className="space-y-6">

          <div>
            <label className="block mb-2 font-medium">
              Merchant Name
            </label>

            <input
              type="text"
              value="Aisha Store"
              className="w-full border rounded-xl p-3"
              readOnly
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Merchant Email
            </label>

            <input
              type="email"
              value="izeaishat@gmail.com"
              className="w-full border rounded-xl p-3"
              readOnly
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Environment
            </label>

            <select className="w-full border rounded-xl p-3">
              <option>Sandbox</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Webhook URL
            </label>

            <input
              type="text"
              value="https://folic-reclaim-legged.ngrok-free.dev/api/webhook"
              className="w-full border rounded-xl p-3"
              readOnly
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              API Status
            </label>

            <div className="bg-green-100 text-green-700 rounded-xl p-3">
              Connected ✅
            </div>
          </div>

          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl">
            Save Changes
          </button>

        </div>

      </div>

    </div>
  );
}

export default Settings;
