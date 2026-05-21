import React from 'react';

const SocialAuth = () => {
  return (
    <div className="mt-8">
      <div className="relative flex items-center justify-center mb-3">
        <div className="absolute border-t border-gray-200 w-full"></div>
        <div className="bg-white px-4 relative text-xs text-gray-400 uppercase tracking-widest">
          OR
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <button className="flex justify-center items-center py-2 bg-[#1877F2] text-white rounded-lg hover:bg-blue-700 transition">
          <img src="/src/assets/facebook.png" alt="" srcset="" className='w-6 h-6' />
        </button>

        <button className="flex justify-center items-center py-2.5 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition shadow-sm">
          <img src="\src\assets\google.png" alt="" srcset="" className='w-6 h-6' />
        </button>

        <button className="flex justify-center items-center py-2.5 bg-black text-white rounded-lg hover:bg-gray-900 transition">
          <img src="\src\assets\apple (2).png" alt="" srcset="" className='w-6 h-6' />
        </button>
      </div>
    </div>
  );
};

export default SocialAuth;