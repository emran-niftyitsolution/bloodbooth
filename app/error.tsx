'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from 'antd';
import { Heart, RefreshCw, Home } from 'lucide-react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-pink-50 to-orange-50 px-4 pt-20">
      <div className="text-center max-w-2xl">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Heart 
              className="w-32 h-32 text-red-500 mx-auto" 
              fill="#ef4444" 
              fillOpacity={0.2}
              strokeWidth={1.5}
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h1 className="text-6xl font-black text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-red-500 via-pink-500 to-red-600 bg-clip-text text-transparent">
              Oops!
            </span>
          </h1>
          
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Something went wrong
          </h2>
          
          <p className="text-xl text-gray-600 mb-2 leading-relaxed">
            We encountered an unexpected error. Don't worry, it's not your fault!
          </p>
          
          {error.message && (
            <div className="my-6 p-4 bg-red-50 border-2 border-red-200 rounded-2xl">
              <p className="text-sm text-red-600 font-mono">
                {error.message}
              </p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                type="primary"
                size="large"
                shape="round"
                icon={<RefreshCw className="w-5 h-5" />}
                onClick={reset}
                className="h-14 px-8 font-bold border-0 shadow-xl"
                style={{
                  background: 'linear-gradient(135deg, #ef4444 0%, #ec4899 100%)',
                }}
              >
                Try Again
              </Button>
            </motion.div>
            
            <Link href="/">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="large"
                  shape="round"
                  icon={<Home className="w-5 h-5" />}
                  className="h-14 px-8 font-bold shadow-xl"
                  style={{
                    background: 'rgba(255, 255, 255, 0.9)',
                    border: '2px solid #e5e7eb',
                    color: '#374151'
                  }}
                >
                  Go to Homepage
                </Button>
              </motion.div>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12"
        >
          <div className="inline-block px-6 py-3 bg-pink-100 rounded-full">
            <p className="text-pink-600 font-semibold text-sm">
              🩸 While you're here, consider becoming a blood donor today!
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

