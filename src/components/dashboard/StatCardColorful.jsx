import React from 'react';
import { FileText, ChevronDown } from 'lucide-react';

const StatCardColorful = ({ title, amount, percentage, isPositive, bgColor, icon }) => {
  return (
    <div className={`${bgColor} p-5 rounded-2xl shadow-lg shadow-orange-500/10 flex flex-col justify-between relative overflow-hidden h-36`}>
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full"></div>
      
      <div className="flex items-center gap-3 z-10">
        <div className="p-2.5 bg-white/20 rounded-xl">
          {icon}
        </div>
        <div>
            <h3 className="text-white text-xs font-medium opacity-90">{title}</h3>
            <p className="text-2xl font-extrabold text-white">{amount}</p>
        </div>
      </div>
      
      <div className="mt-3 flex justify-between items-center text-xs z-10 relative">
          <span className={`flex items-center gap-1 font-semibold ${isPositive ? 'text-green-100' : 'text-red-100'}`}>
            {isPositive ? '↑' : '↓'}
            {percentage}% <span className="text-white/70 font-normal">vs Last Month</span>
          </span>
          <button className="text-white/70 hover:text-white">
            <FileText size={16}/>
          </button>
      </div>
    </div>
  );
};

export default StatCardColorful;