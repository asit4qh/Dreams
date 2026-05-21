import React from 'react';
import Sidebar from '../components/dashboard/Sidebar';
import Topbar from '../components/dashboard/Topbar';
import StatCardColorful from '../components/dashboard/StatCardColorful';
import ChartSalesPurchase from '../components/dashboard/ChartSalesPurchase';
import { FileText, RefreshCcw, ShoppingCart, RotateCcw, AlertTriangle, MoreVertical, Star, ChevronDown } from 'lucide-react';

const Dashboard = () => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser')) || { name: 'Admin' };

  const topStats = [
    { title: "Total Sales", amount: "$48,988,078", percentage: "22", isPositive: true, bgColor: "bg-orange-500", icon: <FileText size={20} color="white" /> },
    { title: "Total Sales Return", amount: "$16,478,145", percentage: "22", isPositive: false, bgColor: "bg-slate-900", icon: <RefreshCcw size={20} color="white" /> },
    { title: "Total Purchase", amount: "$24,145,789", percentage: "22", isPositive: true, bgColor: "bg-teal-500", icon: <ShoppingCart size={20} color="white" /> },
    { title: "Total Purchase Return", amount: "$18,458,747", percentage: "22", isPositive: false, bgColor: "bg-blue-600", icon: <RotateCcw size={20} color="white" /> },
  ];

  const metrics = [
    { title: "Profit", amount: "$8,458,798", isPositive: true, trend: "up" },
    { title: "Invoice Due", amount: "$48,988,78", isPositive: false, trend: "down" },
    { title: "Total Expenses", amount: "$8,980,097", isPositive: true, trend: "up" },
    { title: "Total Payment Returns", amount: "$78,458,798", isPositive: false, trend: "down" },
  ];

  const products = [
    { name: "Charger Cable - Lighting", price: "$187", sold: "247+ Sales", img: "https://plus.unsplash.com/premium_photo-1770646168071-de8bf9880f27?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Yves Saint Eau De Parfum", price: "$145", sold: "289+ Sales", img: "https://images.unsplash.com/photo-1458538977777-0549b2370168?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Apple Airpods 2", price: "$340", sold: "340+ Sales", img: "https://images.unsplash.com/photo-1588940086836-36c7d89611a0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Vacuum Cleaner", price: "$139", sold: "225+ Sales", img: "https://plus.unsplash.com/premium_photo-1677234148197-645f26ee2454?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  ];

  return (
    <div className="flex h-screen bg-slate-50 font-sans">
      <Sidebar />

      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <Topbar />

        <main className="flex-1 overflow-y-auto p-6 space-y-6">
          
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Welcome, {currentUser.name}</h1>
              <p className="text-sm text-gray-500 mt-1">You have <span className="text-orange-500 font-medium">200+</span> Orders, Today</p>
            </div>
            <div className="bg-white border border-gray-200 text-gray-600 px-4 py-2 rounded-lg text-sm flex items-center gap-2 shadow-sm font-medium">
              📅 01 Jan 2024 - 07 Jan 2024
            </div>
          </div>

          <div className="bg-orange-50 border border-orange-100 text-orange-600 px-4 py-3 rounded-lg text-sm flex justify-between items-center shadow-sm">
            <p className="flex items-center gap-2">
              <AlertTriangle size={18} />
              <span>Your Product <strong>Apple Iphone 15 is running Low</strong>, already below 5 Pcs. <a href="#" className="underline font-medium hover:text-orange-700">Add Stock</a></span>
            </p>
            <button className="text-orange-400 hover:text-orange-600 text-xl font-bold">×</button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topStats.map((stat, i) => (
              <StatCardColorful key={i} {...stat} />
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric, i) => (
              <div key={i} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <svg viewBox="0 0 100 30" className="w-full h-full"><path d="M0 25 C 20 10, 40 10, 60 20 S 80 5, 100 15" stroke={metric.trend === 'up' ? "#34A853" : "#EA4335"} strokeWidth="2" fill="none"/></svg>
                </div>
                
                <h3 className="text-gray-500 text-sm font-medium mb-1">{metric.title}</h3>
                <p className="text-2xl font-extrabold text-gray-800">{metric.amount}</p>
                <div className="flex justify-between items-center mt-3 text-xs z-10 relative">
                  <span className={`${metric.isPositive ? 'text-green-500' : 'text-red-500'} font-medium`}>
                    {metric.isPositive ? '+35%' : '-13%'} 
                    <span className="text-gray-400 ml-1">vs Last Month</span>
                  </span>
                  <a href="#" className="text-gray-600 font-medium hover:text-orange-500">View All</a>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <ChartSalesPurchase />
            
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm col-span-1 lg:col-span-1">
              <div className="flex justify-between items-center mb-5">
                <h2 className="text-lg font-semibold text-gray-800">Overall Information</h2>
              </div>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-4 border border-gray-100 rounded-xl bg-slate-50 shadow-inner">
                    <p className="text-gray-400 text-xs">Suppliers</p>
                    <p className="text-xl font-bold text-gray-800 mt-1">6987</p>
                </div>
                <div className="p-4 border border-gray-100 rounded-xl bg-slate-50 shadow-inner">
                    <p className="text-gray-400 text-xs">Customer</p>
                    <p className="text-xl font-bold text-gray-800 mt-1">4896</p>
                </div>
                <div className="p-4 border border-gray-100 rounded-xl bg-slate-50 shadow-inner">
                    <p className="text-gray-400 text-xs">Orders</p>
                    <p className="text-xl font-bold text-gray-800 mt-1">487</p>
                </div>
              </div>

              <div className="mt-8">
                 <h3 className="text-md font-semibold text-gray-700">Customers Overview</h3>
                 <div className="flex justify-center mt-4">
                    <div className="relative w-28 h-28 flex items-center justify-center">
                        <div className="w-full h-full rounded-full border-t-[12px] border-r-[12px] border-orange-500 border-b-[12px] border-l-[12px] border-orange-200"></div>
                        <p className="absolute text-xl font-bold text-gray-800">5.5K</p>
                        <p className="absolute text-xs text-gray-400 mt-6">First Time</p>
                    </div>
                 </div>
                 <div className="flex justify-center gap-6 mt-4 text-xs text-center">
                    <p><span className="text-orange-500">●</span> 2000+<br/>First Time</p>
                    <p><span className="text-orange-200">●</span> 3000+<br/>Return</p>
                 </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-semibold text-gray-800">Top Selling Products</h2>
                    <button className="flex items-center gap-1.5 text-xs text-gray-500 border border-gray-100 px-3 py-1.5 rounded-md shadow-inner bg-slate-50 font-medium">
                        Today <ChevronDown size={16} />
                    </button>
                </div>
                <div className="space-y-3">
                    {products.map((p, i) => (
                        <div key={i} className="flex justify-between items-center p-3 border border-gray-100 rounded-xl bg-slate-50 hover:bg-gray-100 transition">
                            <div className="flex items-center gap-3">
                                <img src={p.img} alt={p.name} className="w-10 h-10 rounded-lg" />
                                <div>
                                    <p className="text-sm font-semibold text-gray-800">{p.name}</p>
                                    <p className="text-xs text-gray-400">{p.sold}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-sm font-bold text-gray-800">{p.price}</p>
                                <div className="flex items-center gap-0.5 text-yellow-400">
                                    {[...Array(5)].map((_,s)=><Star key={s} size={12} fill="currentColor" />)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center flex items-center justify-center text-gray-400">
               (Add other lists like Low Stock/Recent Sales here)
            </div>
          </div>

        </main>
      </div>
    </div>
  );
};

export default Dashboard;