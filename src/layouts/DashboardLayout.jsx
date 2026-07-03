import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import TopBar from "../components/TopBar";
import {
    FiHome,
    FiGrid,
    FiCreditCard,
    FiRefreshCw,
    FiBell,
    FiSettings,
    FiShoppingCart,
    FiMenu,
    FiX,
} from "react-icons/fi";


function DashboardLayout() {
    const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex">
    {/* SIDEBAR */}
    <aside className="hidden md:flex w-64 bg-slate-900 text-white flex-col p-6">
                <h1 className="text-3xl font-bold text-green-500 mb-10">NombaFlow</h1>

                <nav className="space-y-6">
                    <NavItem icon={<FiHome />} text="Home" to="/" />
                    <NavItem icon={<FiGrid />} text="Overview" to="/dashboard" />
                    <NavItem icon={<FiCreditCard />} text="Transactions" to="/transactions" />
                    <NavItem icon={<FiRefreshCw />} text="Refunds" to="refunds"  />
                    <NavItem icon={<FiBell />} text="Webhooks" to="webhooks"  />
                    <NavItem icon={<FiSettings />} text="Settings" to="settings" />
                    <NavItem icon={<FiShoppingCart />} text="Checkout" to="/checkout" />
                </nav>

            </aside>
              
        

            {/* MAIN CONTENT */}
         <main className="flex-1 p-6">
                <div className="md:hidden flex items-center justify-between mb-9">
                    <h1 className="text-2xl font-bold text-green-600">NombaFlow</h1>
                    <button className="text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
                {menuOpen &&(
                  <div className="md:hidden bg-slate-900 text-white rounded-xl p-4 mb-9">
                    <div className="space-y-4">
                    <NavItem icon={<FiHome />} text="Home" to="/" />
                    <NavItem icon={<FiGrid />} text="Overview" to="/dashboard" />  
                    <NavItem icon={<FiCreditCard />} text="Transactions" to="/transactions" />
                    <NavItem icon={<FiRefreshCw />} text="Refunds" to="/refunds" />
                    <NavItem icon={<FiBell />} text="Webhooks" to="/webhooks" />
                    <NavItem icon={<FiSettings />} text="Settings" to="/settings" />
                    <NavItem icon={<FiShoppingCart />} text="Checkout" to="/checkout" />                               
                    </div> 
                  </div>

                ) }

                <TopBar 
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
                />
                <Outlet />
                </main>

                
    </div>
 ) }

function NavItem({ icon, text, to }) {
          return(
                <NavLink
        to={to}
     className={({ isActive }) => `flex items-center gap-3 p-3 rounded-xl transition $
     { 
     isActive 
      ? "bg-green-600 text-white"
      :text-slate-300 hover:bg-slate-800 hover:text-green-400 cursor-pointer" }` }>
            <span className="text-xl">{icon}</span>
            <span>{text}</span>
        </NavLink>
     );
      }

export default DashboardLayout;