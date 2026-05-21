import React from 'react';
import { LayoutDashboard, ShoppingBag, Box, FilePlus, AlertTriangle, FileText, ChevronRight, BarChart3 } from 'lucide-react';

const Sidebar = () => {
  const baseLinkStyle = "flex items-center justify-between text-gray-600 hover:text-gray-900 px-3 py-2.5 rounded-lg transition-colors text-[13px] font-medium";

  return (
    <aside className="w-60 bg-white border-r border-gray-100 shrink-0 h-screen sticky top-0 overflow-y-auto overflow-x-hidden">
      <div className="p-4 flex items-center justify-center gap-2 border-b border-gray-100">
        <span className="text-orange-500 text-2xl">🛍️</span> 
        <span className="text-gray-900 font-bold text-xl">Dreams<span className="text-orange-500 text-[10px] align-top uppercase">POS</span></span>
      </div>

      <div className="p-4 space-y-7">
        <div>
          <div className="mb-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest px-3">Main</div>
          <nav className="space-y-1">
            <a href="#" className="flex items-center justify-between bg-orange-50 text-orange-500 px-3 py-2.5 rounded-lg font-semibold text-[13px] shadow-sm shadow-orange-500/5">
              <div className="flex items-center gap-3"><LayoutDashboard size={18} /> Dashboard</div>
            </a>
            <a href="#" className={`${baseLinkStyle} group`}>
              <div className="flex items-center gap-3"><Box size={18} /> Super Admin</div>
              <ChevronRight size={16} className="text-gray-400" />
            </a>
          </nav>
        </div>

        <div>
          <div className="mb-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest px-3">Inventory</div>
          <nav className="space-y-1">
            <a href="#" className={baseLinkStyle}><div className="flex items-center gap-3"><ShoppingBag size={18} /> Products</div></a>
            <a href="#" className={baseLinkStyle}><div className="flex items-center gap-3"><FilePlus size={18} /> Create Product</div></a>
            <a href="#" className={baseLinkStyle}><div className="flex items-center gap-3"><BarChart3 size={18} /> Expired Products</div></a>
          </nav>
        </div>
        
        <div>
          <div className="mb-3 text-[10px] font-bold text-gray-400 uppercase tracking-widest px-3">Stock</div>
          <nav className="space-y-1">
            <a href="#" className={baseLinkStyle}><div className="flex items-center gap-3"><BarChart3 size={18} /> Manage Stock</div></a>
          </nav>
        </div>
      </div>
      
      <div className="absolute bottom-4 left-4 right-4 text-center text-[10px] text-gray-300">
        <p>2014-2024 © DreamsPOS.</p>
        <p>Designed & Developed by Dreams</p>
      </div>
    </aside>
  );
};

export default Sidebar;