import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Bell, Globe, Maximize, Settings, PlusCircle, ShoppingBag, ChevronDown, LogOut } from 'lucide-react';

const Topbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/'); 
  };

  return (
    <header className="bg-white border-b border-gray-100 h-16 flex items-center justify-between px-6 sticky top-0 z-10 shadow-sm">
      <div className="flex items-center gap-4">
          <div className="md:hidden flex items-center gap-1.5 text-xl font-bold text-gray-900 border-r border-gray-100 pr-4 h-16">
            <span className="text-orange-500 text-xl">🛍️</span> 
            Dreams<span className="text-orange-500 text-xs align-top uppercase">POS</span>
          </div>
          <div className="flex items-center bg-gray-50 px-3 py-2.5 rounded-lg w-72 border border-gray-100 shadow-inner">
            <Search size={16} className="text-gray-400" />
            <input 
              type="text" 
              placeholder="Search..." 
              className="bg-transparent border-none outline-none ml-2 text-sm w-full text-gray-700 placeholder:text-gray-400"
            />
          </div>
      </div>

      <div className="flex items-center gap-4 text-gray-500">
        <div className="flex items-center gap-2.5 px-3 border-r border-gray-100 h-10">
            <img src="https://ui-avatars.com/api/?name=Admin&background=f1f5f9" alt="Admin" className="w-8 h-8 rounded-full border border-gray-100" />
            <div>
                <p className="text-xs font-semibold text-gray-800">Freshmart <ChevronDown size={12} className="inline"/></p>
                <p className="text-[10px] text-gray-400">Admin</p>
            </div>
        </div>

        <button className="flex items-center gap-1.5 bg-orange-100/50 text-orange-600 px-3 py-2 rounded-lg text-xs font-semibold hover:bg-orange-100 transition shadow-inner shadow-orange-500/5">
          <PlusCircle size={16} /> Add New
        </button>
        <button className="bg-slate-900 text-white px-3 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 hover:bg-gray-800 transition shadow-lg shadow-gray-900/10">
           <ShoppingBag size={16}/> POS
        </button>
        
        <div className="flex items-center gap-3">
            <Globe size={18} className="cursor-pointer hover:text-gray-800" />
            <Maximize size={18} className="cursor-pointer hover:text-gray-800" />
            <div className="relative cursor-pointer">
              <Bell size={18} className="hover:text-gray-800" />
              <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full font-bold">4</span>
            </div>
            <Settings size={18} className="cursor-pointer hover:text-gray-800" />
            
            <div className="h-6 w-px bg-gray-200 mx-1"></div> 
            
              <button 
              onClick={handleLogout}
              className="flex items-center gap-1.5 text-red-500 hover:text-red-700 bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-md text-xs font-semibold transition"
            >
              <LogOut size={16} />
              Logout
            </button>
        </div>
      </div>
    </header>
  );
};

export default Topbar;