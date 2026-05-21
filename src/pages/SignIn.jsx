import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, EyeOff, Eye } from 'lucide-react';
import AuthLayout from '../components/AuthLayout';
import InputField from '../components/InputField';
import SocialAuth from '../components/SocialAuth';

const SignIn = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

    const handleSubmit = (e) => {
        e.preventDefault();
        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
        
        const validUser = existingUsers.find(
        (user) => user.email === formData.email && user.password === formData.password
        );

        if (validUser) {
        localStorage.setItem('currentUser', JSON.stringify(validUser));
        
        navigate('/dashboard'); 
        } else {
        alert("Incorrect Email or Password! Please Try Again");
        }
    };

  return (
    <AuthLayout 
      title="Sign In" 
      subtitle="Access the Dreamspos panel using your email and passcode."
      bgImage="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1974&auto=format&fit=crop"
    >
      <form onSubmit={handleSubmit}>
        <InputField label="Email" name="email" type="email" icon={Mail} value={formData.email} onChange={handleChange} required />
        
        <div className="relative">
          <InputField label="Password" name="password" type={showPassword ? "text" : "password"} value={formData.password} onChange={handleChange} required />
          <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-9 text-gray-400 hover:text-gray-600 z-10">
            {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
          </button>
        </div>
        
        <div className="flex items-center justify-between mb-6 mt-2">
          <label className="flex items-center text-sm text-gray-600 cursor-pointer">
            <input type="checkbox" name="rememberMe" checked={formData.rememberMe} onChange={handleChange} className="mr-2 rounded text-orange-400 focus:ring-orange-400 accent-orange-400" />
            Remember Me
          </label>
          <a href="#" className="text-sm text-orange-500 hover:underline">Forgot Password?</a>
        </div>

        <button type="submit" className="w-full bg-orange-400 hover:bg-orange-500 text-white font-medium py-2.5 rounded-lg transition-colors">
          Sign In
        </button>
      </form>

      <p className="mt-6 text-sm text-gray-600">
        New on our platform? <Link to="/register" className="text-gray-900 font-medium hover:underline">Create an account</Link>
      </p>
      <SocialAuth />
    </AuthLayout>
  );
};

export default SignIn;