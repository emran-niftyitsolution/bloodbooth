'use client';

import { motion } from 'framer-motion';
import { FaHeart, FaTint } from 'react-icons/fa';

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-pink-50 to-orange-50 pt-20">
      <div className="text-center">
        <motion.div
          className="relative inline-block mb-8"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 blur-2xl opacity-50"
            animate={{
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 2,
              repeat: Infinity
            }}
          />
          <FaHeart 
            className="w-24 h-24 text-red-500 relative opacity-70" 
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center gap-3 justify-center mb-4">
            <FaTint className="w-8 h-8 text-red-500" />
            <h2 className="text-3xl font-black bg-gradient-to-r from-red-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
              BloodBooth
            </h2>
          </div>
          
          <p className="text-gray-600 text-lg font-medium">Loading...</p>
          
          <div className="flex gap-2 justify-center mt-6">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-3 h-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

