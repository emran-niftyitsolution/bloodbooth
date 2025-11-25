'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button, Input, Select, DatePicker, Checkbox, message } from 'antd';
import { FaHeart, FaTint, FaEnvelope, FaLock, FaUser, FaPhone, FaEye, FaEyeSlash, FaSpinner } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { saveCurrentUser } from '@/lib/auth';

const { Option } = Select;

export default function SignupPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    bloodType: '',
    dateOfBirth: null,
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  });

  const handleSignup = async () => {
    // Validation
    if (!formData.fullName || !formData.email || !formData.password) {
      message.error('Please fill in all required fields');
      return;
    }

    if (!formData.email.includes('@')) {
      message.error('Please enter a valid email address');
      return;
    }

    if (formData.password.length < 6) {
      message.error('Password must be at least 6 characters long');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      message.error('Passwords do not match');
      return;
    }

    if (!formData.agreeTerms) {
      message.error('Please agree to the Terms of Service and Privacy Policy');
      return;
    }

    setLoading(true);

    try {
      // Call signup API
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          password: formData.password,
          phone: formData.phone,
          bloodType: formData.bloodType,
          dateOfBirth: formData.dateOfBirth,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Signup failed');
      }

      // Store auth token and user data
      localStorage.setItem('auth_token', data.token);

      saveCurrentUser({
        email: data.user.email,
        name: data.user.fullName,
        bloodType: data.user.bloodType,
        phone: data.user.phone,
      });

      // Show success message
      message.success('Account created successfully! Redirecting to home...');

      // Wait a bit for the success message
      await new Promise(resolve => setTimeout(resolve, 500));

      // Redirect to home page
      router.push('/');
    } catch (error: any) {
      console.error('Signup error:', error);
      message.error(error.message || 'Signup failed. Please try again.');
      setLoading(false);
    }
  };

  const updateField = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-red-50 via-pink-50 to-orange-50"
        animate={{
          background: [
            'linear-gradient(to bottom right, rgb(254, 242, 242), rgb(252, 231, 243), rgb(255, 237, 213))',
            'linear-gradient(to bottom right, rgb(252, 231, 243), rgb(255, 237, 213), rgb(254, 242, 242))',
            'linear-gradient(to bottom right, rgb(255, 237, 213), rgb(254, 242, 242), rgb(252, 231, 243))',
          ]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      {/* Floating shapes */}
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-red-300/20 rounded-full blur-3xl"
        animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-pink-300/20 rounded-full blur-3xl"
        animate={{ x: [0, -50, 0], y: [0, 100, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
      />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-12 pt-32">
        <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Branding */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="relative">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 blur-xl opacity-50"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <FaTint className="w-12 h-12 text-red-500 relative" />
              </div>
              <span className="text-4xl font-black bg-gradient-to-r from-red-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                BloodBooth
              </span>
            </div>

            <h1 className="text-5xl font-black text-gray-900 mb-6 leading-tight">
              Become a
              <br />
              <span className="bg-gradient-to-r from-red-500 via-pink-500 to-red-600 bg-clip-text text-transparent">
                Life Saver
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join thousands of heroes who are making a difference. Your donation can save up to three lives.
            </p>

            <div className="relative w-full h-64 rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&q=80"
                alt="Blood donation community"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-500/30 to-transparent" />
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { value: '50K+', label: 'Donors' },
                { value: '200+', label: 'Camps' },
                { value: '24/7', label: 'Support' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-black text-red-500">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Signup Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border-2 border-white/50 p-8 md:p-12 max-h-[90vh] overflow-y-auto">
              <div className="lg:hidden flex items-center gap-3 mb-6 justify-center">
                <FaTint className="w-8 h-8 text-red-500" />
                <span className="text-2xl font-black bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                  BloodBooth
                </span>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h2>
              <p className="text-gray-600 mb-6">Join our community of heroes</p>

              <div className="space-y-4">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <Input
                    size="large"
                    placeholder="John Doe"
                    prefix={<FaUser className="w-5 h-5 text-gray-400" />}
                    value={formData.fullName}
                    onChange={(e) => updateField('fullName', e.target.value)}
                    className="h-12 rounded-xl"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <Input
                    size="large"
                    placeholder="your.email@example.com"
                    prefix={<FaEnvelope className="w-5 h-5 text-gray-400" />}
                    value={formData.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    className="h-12 rounded-xl"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <Input
                    size="large"
                    placeholder="+1 (555) 000-0000"
                    prefix={<FaPhone className="w-5 h-5 text-gray-400" />}
                    value={formData.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                    className="h-12 rounded-xl"
                  />
                </div>

                {/* Blood Type & Date of Birth */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Blood Type
                    </label>
                    <Select
                      size="large"
                      placeholder="Select"
                      value={formData.bloodType || undefined}
                      onChange={(value) => updateField('bloodType', value)}
                      className="w-full"
                      style={{ height: '48px' }}
                    >
                      {['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'].map(type => (
                        <Option key={type} value={type}>{type}</Option>
                      ))}
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Date of Birth
                    </label>
                    <DatePicker
                      size="large"
                      placeholder="MM/DD/YYYY"
                      value={formData.dateOfBirth}
                      onChange={(date) => updateField('dateOfBirth', date)}
                      className="w-full h-12 rounded-xl"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Password
                  </label>
                  <Input
                    size="large"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Create a strong password"
                    prefix={<FaLock className="w-5 h-5 text-gray-400" />}
                    suffix={
                      <button
                        onClick={() => setShowPassword(!showPassword)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <FaEyeOff className="w-5 h-5" /> : <FaEye className="w-5 h-5" />}
                      </button>
                    }
                    value={formData.password}
                    onChange={(e) => updateField('password', e.target.value)}
                    className="h-12 rounded-xl"
                  />
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Confirm Password
                  </label>
                  <Input
                    size="large"
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="Re-enter your password"
                    prefix={<FaLock className="w-5 h-5 text-gray-400" />}
                    suffix={
                      <button
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        {showConfirmPassword ? <FaEyeOff className="w-5 h-5" /> : <FaEye className="w-5 h-5" />}
                      </button>
                    }
                    value={formData.confirmPassword}
                    onChange={(e) => updateField('confirmPassword', e.target.value)}
                    className="h-12 rounded-xl"
                  />
                </div>

                {/* Terms */}
                <Checkbox
                  checked={formData.agreeTerms}
                  onChange={(e) => updateField('agreeTerms', e.target.checked)}
                >
                  <span className="text-sm text-gray-600">
                    I agree to the{' '}
                    <a href="#" className="text-red-500 font-semibold hover:text-red-600">
                      Terms of Service
                    </a>{' '}
                    and{' '}
                    <a href="#" className="text-red-500 font-semibold hover:text-red-600">
                      Privacy Policy
                    </a>
                  </span>
                </Checkbox>

                {/* Signup Button */}
                <motion.div
                  whileHover={!loading ? { scale: 1.02 } : {}}
                  whileTap={!loading ? { scale: 0.98 } : {}}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
                  <Button
                    type="primary"
                    size="large"
                    block
                    icon={loading ? <FaSpinner className="w-5 h-5 animate-spin" /> : <FaHeart className="w-5 h-5" fill="white" />}
                    onClick={handleSignup}
                    loading={loading}
                    disabled={loading}
                    className="relative h-12 font-bold text-base rounded-xl border-0"
                    style={{
                      background: 'linear-gradient(135deg, #dc2626 0%, #e11d48 50%, #ec4899 100%)',
                    }}
                  >
                    {loading ? 'Creating Account...' : 'Create Account'}
                  </Button>
                </motion.div>

                {/* Login Link */}
                <p className="text-center text-sm text-gray-600 mt-4">
                  Already have an account?{' '}
                  <Link href="/login" className="font-bold text-red-500 hover:text-red-600">
                    Sign In
                  </Link>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

