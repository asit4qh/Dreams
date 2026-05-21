import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Mail, EyeOff, Eye } from 'lucide-react';
import AuthLayout from '../components/AuthLayout';
import InputField from '../components/InputField';
import SocialAuth from '../components/SocialAuth';

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false
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

    if (formData.password !== formData.confirmPassword) {
      alert("Password and Confirm Password must be same!");
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    const userExists = existingUsers.some(user => user.email === formData.email);

   if (userExists) {
      alert("Email Already Registered! Please use another one");
    } else {
      const newUser = {
        name: formData.name,
        email: formData.email,
        password: formData.password
      };
      
      existingUsers.push(newUser);
      localStorage.setItem('users', JSON.stringify(existingUsers));
      
      localStorage.setItem('currentUser', JSON.stringify(newUser));
      
      alert("Registration Successful!");
      navigate('/dashboard');
    }
  };

  return (
    <AuthLayout 
      title="Register" 
      subtitle="Create New Dreamspos Account"
      bgImage="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop"
    >
      <form onSubmit={handleSubmit}>
        <InputField label="Name" name="name" type="text" icon={User} value={formData.name} onChange={handleChange} required />
        <InputField label="Email Address" name="email" type="email" icon={Mail} value={formData.email} onChange={handleChange} required />
        
        <div className="relative">
          <InputField label="Password" name="password" type={showPassword ? "text" : "password"} value={formData.password} onChange={handleChange} required />
          <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-9 text-gray-400 hover:text-gray-600 z-10">
            {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
          </button>
        </div>

        <InputField label="Confirm Password" name="confirmPassword" type={showPassword ? "text" : "password"} value={formData.confirmPassword} onChange={handleChange} required />
        
        <div className="flex items-center mb-6 mt-2">
          <label className="flex items-center text-sm text-gray-600 cursor-pointer">
            <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} className="mr-2 rounded text-orange-400 focus:ring-orange-400 accent-orange-400" required />
            I agree to the <a href="#" className="text-orange-500 hover:underline ml-1">Terms & Privacy</a>
          </label>
        </div>

        <button type="submit" className="w-full bg-orange-400 hover:bg-orange-500 text-white font-medium py-2.5 rounded-lg transition-colors">
          Sign Up
        </button>
      </form>

      <p className="mt-6 text-sm text-gray-600">
        Already have an account? <Link to="/" className="text-gray-900 font-medium hover:underline">Sign In Instead</Link>
      </p>
      <SocialAuth />
    </AuthLayout>
  );
};

export default Register;