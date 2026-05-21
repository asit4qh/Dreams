import React from 'react';

const AuthLayout = ({ children, bgImage, title, subtitle }) => {
  return (
    <div className="h-screen flex w-full font-sans bg-gray-50 overflow-hidden">
      
      <div className="w-full lg:w-1/2 h-full flex flex-col justify-between px-8 sm:px-12 lg:px-20 py-6 bg-white relative overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-none]">
        
        <div className="flex justify-center lg:justify-start mb-2 mt-2">
          <div className="flex items-center gap-2 text-xl font-bold text-gray-800">
            <span className="text-orange-500 text-2xl">🛍️</span> 
            Dreams<span className="text-sm font-normal uppercase text-orange-500 mt-1">POS</span>
          </div>
        </div>

        <div className="w-full max-w-md mx-auto lg:mx-0 grow flex flex-col justify-center my-2">
          <h1 className="text-2xl font-semibold text-gray-900 mb-1">{title}</h1>
          <p className="text-gray-500 text-xs mb-6">{subtitle}</p>
          
          {children}
        </div>

        <div className="text-center lg:text-left text-xs text-gray-400 mt-2">
          Copyrights © 2026 - DreamsPOS
        </div>
      </div>
      
      <div className="hidden lg:block lg:w-1/2 h-full relative">
        <img 
          src={bgImage} 
          alt="Dashboard Background" 
          className="w-full h-full object-cover object-center" 
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>
    </div>
  );
};

export default AuthLayout;