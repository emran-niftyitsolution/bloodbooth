'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button, Input, Checkbox, Divider, message } from 'antd';
import { FaHeart, FaTint, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaSpinner } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { saveCurrentUser } from '@/lib/auth';

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    // Validation
    if (!email || !password) {
      message.error('Please enter both email and password');
      return;
    }

    if (!email.includes('@')) {
      message.error('Please enter a valid email address');
      return;
    }

    setLoading(true);

    try {
      // Call login API
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Login failed');
      }

      // Store auth token and user data
      const storage = remember ? localStorage : sessionStorage;
      storage.setItem('auth_token', data.token);

      saveCurrentUser({
        email: data.user.email,
        name: data.user.fullName,
        bloodType: data.user.bloodType,
        phone: data.user.phone,
      });

      // Show success message
      message.success('Login successful! Redirecting...');

      // Wait a bit for the success message to be visible
      await new Promise(resolve => setTimeout(resolve, 500));

      // Redirect to home page
      router.push('/');
    } catch (error: any) {
      console.error('Login error:', error);
      message.error(error.message || 'Login failed. Please try again.');
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !loading) {
      handleLogin();
    }
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
            <h1 className="text-5xl font-black text-gray-900 mb-6 leading-tight">
              Welcome Back,
              <br />
              <span className="bg-gradient-to-r from-red-500 via-pink-500 to-red-600 bg-clip-text text-transparent">
                Hero!
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Sign in to continue saving lives and making a difference in your community.
            </p>

            <div className="relative w-full h-64 rounded-3xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1615461066159-fea0960485d5?w=600&q=80"
                alt="Blood donation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-500/30 to-transparent" />
            </div>
          </motion.div>

          {/* Right Side - Login Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border-2 border-white/50 p-8 md:p-12">
              <div className="lg:hidden flex items-center gap-3 mb-6 justify-center">
                <FaTint className="w-8 h-8 text-red-500" />
                <span className="text-2xl font-black bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                  BloodBooth
                </span>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-2">Sign In</h2>
              <p className="text-gray-600 mb-8">Access your account to continue</p>

              <div className="space-y-5">
                {/* Email Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <Input
                    size="large"
                    placeholder="your.email@example.com"
                    prefix={<FaEnvelope className="w-5 h-5 text-gray-400" />}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onKeyPress={handleKeyPress}
                    disabled={loading}
                    className="h-12 rounded-xl"
                  />
                </div>

                {/* Password Input */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Password
                  </label>
                  <Input
                    size="large"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    prefix={<FaLock className="w-5 h-5 text-gray-400" />}
                    suffix={
                      <button
                        onClick={() => setShowPassword(!showPassword)}
                        className="text-gray-400 hover:text-gray-600"
                        disabled={loading}
                      >
                        {showPassword ? <FaEyeSlash className="w-5 h-5" /> : <FaEye className="w-5 h-5" />}
                      </button>
                    }
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyPress={handleKeyPress}
                    disabled={loading}
                    className="h-12 rounded-xl"
                  />
                </div>

                {/* Remember & Forgot */}
                <div className="flex items-center justify-between">
                  <Checkbox
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                  >
                    <span className="text-sm text-gray-600">Remember me</span>
                  </Checkbox>
                  <Link href="/forgot-password" className="text-sm font-semibold text-red-500 hover:text-red-600">
                    Forgot Password?
                  </Link>
                </div>

                {/* Login Button */}
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
                    onClick={handleLogin}
                    loading={loading}
                    disabled={loading}
                    className="relative h-12 font-bold text-base rounded-xl border-0"
                    style={{
                      background: 'linear-gradient(135deg, #dc2626 0%, #e11d48 50%, #ec4899 100%)',
                    }}
                  >
                    {loading ? 'Signing In...' : 'Sign In'}
                  </Button>
                </motion.div>

                <Divider plain>
                  <span className="text-gray-500 text-sm">Or continue with</span>
                </Divider>

                {/* Social Login */}
                <div className="grid grid-cols-2 gap-4">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      size="large"
                      block
                      className="h-12 rounded-xl font-semibold"
                    >
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                      Google
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      size="large"
                      block
                      className="h-12 rounded-xl font-semibold"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      Facebook
                    </Button>
                  </motion.div>
                </div>

                {/* Sign Up Link */}
                <p className="text-center text-sm text-gray-600 mt-6">
                  Don't have an account?{' '}
                  <Link href="/signup" className="font-bold text-red-500 hover:text-red-600">
                    Create Account
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

