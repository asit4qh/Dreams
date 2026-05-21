import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { ChevronDown } from 'lucide-react';

const data = [
  { name: 'Jan', purchase: 32000, sales: 21000 },
  { name: 'Feb', purchase: 28000, sales: 18000 },
  { name: 'Mar', purchase: 29000, sales: 19000 },
  { name: 'Apr', purchase: 31000, sales: 23000 },
  { name: 'May', purchase: 25000, sales: 16000 },
  { name: 'Jun', purchase: 20000, sales: 15000 },
  { name: 'Jul', purchase: 23000, sales: 14000 },
  { name: 'Aug', purchase: 28000, sales: 17000 },
  { name: 'Sep', purchase: 33000, sales: 24000 },
  { name: 'Oct', purchase: 35000, sales: 22000 },
  { name: 'Nov', purchase: 34000, sales: 21000 },
  { name: 'Dec', purchase: 30000, sales: 19000 },
];

const ChartSalesPurchase = () => {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm col-span-1 lg:col-span-2">
      <div className="flex justify-between items-center mb-6">
        <div>
            <h2 className="text-lg font-semibold text-gray-800">Sales & Purchase</h2>
            <p className="text-xs text-gray-400 font-normal">Last Updated: Today</p>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-gray-500 border border-gray-100 px-3 py-1.5 rounded-md shadow-inner bg-slate-50 font-medium">
          1Y <ChevronDown size={16} />
        </div>
      </div>

      <div className="h-72 text-xs overflow-x-auto overflow-y-hidden">
        <BarChart
            width={700} 
            height={280}
            data={data}
            margin={{ top: 5, right: 0, left: -20, bottom: 5 }}
            barSize={12}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false}/>
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8'}} />
            <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8'}} unit="K" />
            <Tooltip contentStyle={{border: '1px solid #f1f5f9', borderRadius: '8px', fontSize: '12px'}} cursor={{fill: '#f1f5f9'}} />
            <Bar dataKey="purchase" name="Total Purchase" fill="#FFC78B" radius={[10, 10, 0, 0]} />
            <Bar dataKey="sales" name="Total Sales" fill="#FF9F43" radius={[10, 10, 0, 0]} />
        </BarChart>
      </div>
    </div>
  );
};

export default ChartSalesPurchase;