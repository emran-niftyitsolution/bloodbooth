'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button, Input, Result } from 'antd';
import { FaHeart, FaTint, FaEnvelope, FaArrowLeft, FaPaperPlane } from 'react-icons/fa';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    console.log('Reset password for:', email);
    setSubmitted(true);
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md"
        >
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border-2 border-white/50 p-8 md:p-12">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-8 justify-center">
              <div className="relative">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 blur-xl opacity-50"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <FaTint className="w-10 h-10 text-red-500 relative" />
              </div>
              <span className="text-3xl font-black bg-gradient-to-r from-red-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                BloodBooth
              </span>
            </div>

            {!submitted ? (
              <>
                {/* Header */}
                <div className="text-center mb-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="inline-block p-4 bg-red-100 rounded-full mb-4"
                  >
                    <FaEnvelope className="w-8 h-8 text-red-500" />
                  </motion.div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    Forgot Password?
                  </h2>
                  <p className="text-gray-600">
                    No worries! Enter your email and we'll send you reset instructions.
                  </p>
                </div>

                {/* Form */}
                <div className="space-y-6">
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
                      className="h-12 rounded-xl"
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
                    <Button
                      type="primary"
                      size="large"
                      block
                      icon={<FaPaperPlane className="w-5 h-5" />}
                      onClick={handleSubmit}
                      className="relative h-12 font-bold text-base rounded-xl border-0"
                      style={{
                        background: 'linear-gradient(135deg, #dc2626 0%, #e11d48 50%, #ec4899 100%)',
                      }}
                    >
                      Send Reset Link
                    </Button>
                  </motion.div>

                  {/* Back to Login */}
                  <Link href="/login">
                    <motion.div
                      whileHover={{ x: -5 }}
                      className="flex items-center justify-center gap-2 text-gray-600 hover:text-red-500 transition-colors"
                    >
                      <FaArrowLeft className="w-4 h-4" />
                      <span className="font-semibold">Back to Sign In</span>
                    </motion.div>
                  </Link>
                </div>
              </>
            ) : (
              <>
                {/* Success State */}
                <Result
                  icon={
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      <div className="inline-block p-6 bg-green-100 rounded-full">
                        <FaPaperPlane className="w-12 h-12 text-green-500" />
                      </div>
                    </motion.div>
                  }
                  title={
                    <h3 className="text-2xl font-bold text-gray-900">
                      Check Your Email!
                    </h3>
                  }
                  subTitle={
                    <div className="space-y-2">
                      <p className="text-gray-600">
                        We've sent password reset instructions to:
                      </p>
                      <p className="font-semibold text-gray-900">{email}</p>
                      <p className="text-sm text-gray-500 mt-4">
                        Didn't receive the email? Check your spam folder or{' '}
                        <button
                          onClick={() => setSubmitted(false)}
                          className="text-red-500 font-semibold hover:text-red-600"
                        >
                          try again
                        </button>
                      </p>
                    </div>
                  }
                />

                <Link href="/login">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-6"
                  >
                    <Button
                      size="large"
                      block
                      icon={<FaArrowLeft className="w-5 h-5" />}
                      className="h-12 font-bold text-base rounded-xl"
                    >
                      Back to Sign In
                    </Button>
                  </motion.div>
                </Link>
              </>
            )}
          </div>

          {/* Help Text */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Need help?{' '}
            <a href="#" className="font-semibold text-red-500 hover:text-red-600">
              Contact Support
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}

