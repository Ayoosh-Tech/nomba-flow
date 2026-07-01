import { BrowserRouter,Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Refunds from "./pages/Refunds";
import Webhooks from "./pages/Webhooks";
import Settings from "./pages/Settings";
import Checkout from "./pages/Checkout";
import TransactionDetails from "./pages/TransactionDetails";
import TopBar from "./components/TopBar";

function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/"  element={<Landing />} />
      <Route element={<DashboardLayout />}>
      <Route path="/dashboard"  element={<Dashboard />} />
      <Route path="/transactions"  element={<Transactions />} />
      <Route path="/transactions/:id"  element={<TransactionDetails />} />
      <Route path="/refunds"  element={<Refunds />} />
      <Route path="/webhooks"  element={<Webhooks />} />
      <Route path="/settings"  element={<Settings />} />
      <Route path="/checkout"  element={<Checkout />} />
      </Route>
      

    </Routes>
    </BrowserRouter>
  );
}

export default App;


