'use client';

import Image from 'next/image';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Button, Card, Statistic, Steps } from 'antd';
import { 
  Heart, 
  Users, 
  Activity, 
  MapPin, 
  Clock, 
  Award,
  Droplets,
  CheckCircle2,
  ArrowRight,
  Calendar,
  UserCheck,
  FileHeart
} from 'lucide-react';

export default function Home() {
  // Scroll progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const stats = [
    { value: 50000, suffix: '+', title: 'Lives Saved', icon: Heart, color: '#ff4d4f' },
    { value: 15000, suffix: '+', title: 'Active Donors', icon: Users, color: '#1890ff' },
    { value: 200, suffix: '+', title: 'Blood Camps', icon: MapPin, color: '#52c41a' },
    { value: 24, suffix: '/7', title: 'Available', icon: Clock, color: '#faad14' }
  ];

  const bloodTypes = [
    { type: 'A+', demand: 'High', color: '#ff4d4f' },
    { type: 'O+', demand: 'Critical', color: '#cf1322' },
    { type: 'B+', demand: 'Medium', color: '#ff7a45' },
    { type: 'AB+', demand: 'Low', color: '#ffa940' },
    { type: 'A-', demand: 'High', color: '#ff4d4f' },
    { type: 'O-', demand: 'Critical', color: '#cf1322' },
    { type: 'B-', demand: 'Medium', color: '#ff7a45' },
    { type: 'AB-', demand: 'Low', color: '#ffa940' }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Save Lives',
      description: 'One donation can save up to three lives',
      image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=400&q=80'
    },
    {
      icon: Activity,
      title: 'Health Check',
      description: 'Free health screening with every donation',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&q=80'
    },
    {
      icon: Award,
      title: 'Recognition',
      description: 'Certificates and appreciation for regular donors',
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&q=80'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Join a network of life-saving heroes',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&q=80'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Regular Donor',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
      quote: 'Donating blood has been one of the most rewarding experiences. Knowing I can help save lives makes me feel incredible.',
      donations: 24
    },
    {
      name: 'Michael Chen',
      role: 'First-time Donor',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
      quote: 'The process was so easy and the staff was amazing. I was nervous at first, but it was completely painless.',
      donations: 3
    },
    {
      name: 'Emily Rodriguez',
      role: 'Blood Drive Organizer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
      quote: 'Organizing blood drives in our community has brought people together and saved countless lives. It\'s truly inspiring.',
      donations: 47
    }
  ];

  const impactImages = [
    {
      url: 'https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?w=600&q=80',
      title: 'Medical Excellence'
    },
    {
      url: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&q=80',
      title: 'Community Care'
    },
    {
      url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80',
      title: 'Professional Team'
    }
  ];

  return (
    <div className="min-h-screen bg-white relative">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-pink-500 to-red-500 origin-left z-[60] shadow-lg"
        style={{ scaleX }}
      />

      {/* Floating Action Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <motion.div 
          whileHover={{ scale: 1.1, rotate: 10 }} 
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 500, damping: 20 }}
          className="relative group"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition-opacity" />
          
          <Button
            type="primary"
            size="large"
            shape="circle"
            icon={<Heart className="w-7 h-7" fill="white" />}
            className="relative w-16 h-16 flex items-center justify-center border-0 shadow-xl"
            style={{ 
              background: 'linear-gradient(135deg, #dc2626 0%, #e11d48 50%, #ec4899 100%)',
            }}
          />
          
          <motion.div
            className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-lg"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>

      {/* Hero Section with Integrated Navigation */}
      <section className="relative min-h-screen px-4 sm:px-6 lg:px-8 overflow-hidden flex flex-col">
        {/* Animated background gradient */}
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

        {/* Navigation - Integrated in Hero */}
        <motion.nav 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-50 py-6"
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center">
              <motion.div 
                className="flex items-center gap-3"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="relative">
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 blur-xl opacity-50"
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <Droplets className="w-10 h-10 text-red-500 relative drop-shadow-lg" />
                </div>
                <span className="text-3xl font-black bg-gradient-to-r from-red-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                  BloodBooth
                </span>
              </motion.div>
              
              <div className="hidden md:flex items-center gap-8">
                {['About', 'Process', 'Benefits', 'Contact'].map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-700 hover:text-red-500 transition-all font-semibold text-base relative group"
                    whileHover={{ y: -2 }}
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-pink-500 group-hover:w-full transition-all duration-300" />
                  </motion.a>
                ))}
                <motion.div 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 500, damping: 25 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
                  <Button 
                    type="primary"
                    size="large"
                    shape="round"
                    icon={<Heart className="w-5 h-5" fill="white" />}
                    className="relative h-14 px-9 font-bold text-base shadow-lg border-0"
                    style={{
                      background: 'linear-gradient(135deg, #dc2626 0%, #e11d48 50%, #ec4899 100%)',
                      color: '#ffffff',
                    }}
                  >
                    Donate Now
                  </Button>
                </motion.div>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <Button
                  type="text"
                  size="large"
                  icon={
                    <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
                      <span className="w-full h-0.5 bg-gray-700 rounded" />
                      <span className="w-full h-0.5 bg-gray-700 rounded" />
                      <span className="w-full h-0.5 bg-gray-700 rounded" />
                    </div>
                  }
                />
              </div>
            </div>
          </div>
        </motion.nav>

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto relative z-10 flex-1 flex items-center">
          <div className="grid lg:grid-cols-2 gap-16 items-center w-full py-12">
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <motion.span 
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full text-sm font-semibold mb-8 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  animate={{ boxShadow: ['0 0 20px rgba(239, 68, 68, 0.3)', '0 0 40px rgba(239, 68, 68, 0.5)', '0 0 20px rgba(239, 68, 68, 0.3)'] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                  </span>
                  Save a Life Today
                </motion.span>
              </motion.div>
              <motion.h1 
                variants={fadeInUp}
                className="text-6xl md:text-8xl font-black text-gray-900 mb-8 leading-[0.95] tracking-tight"
              >
                Every Drop{' '}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-red-500 via-pink-500 to-red-600 bg-clip-text text-transparent">
                    Counts
                  </span>
                  <motion.span
                    className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-red-500 to-pink-500 opacity-30 blur-sm"
                    animate={{ scaleX: [0.8, 1, 0.8] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </span>
              </motion.h1>
              <motion.p 
                variants={fadeInUp}
                className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed font-light"
              >
                Join thousands of heroes who donate blood regularly. Your single donation 
                can save up to three lives. Be the reason someone smiles today.
              </motion.p>
              <motion.div 
                variants={fadeInUp}
                className="flex flex-col sm:flex-row gap-5"
              >
                <motion.div 
                  whileHover={{ scale: 1.06, y: -4 }} 
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 500, damping: 25 }}
                  className="relative group"
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
                  
                  <Button 
                    type="primary"
                    size="large"
                    shape="round"
                    icon={<Heart className="w-6 h-6" fill="white" />}
                    className="relative h-16 px-10 text-lg font-bold shadow-xl border-0 overflow-hidden"
                    style={{
                      background: 'linear-gradient(135deg, #dc2626 0%, #e11d48 50%, #ec4899 100%)',
                      color: '#ffffff',
                    }}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Donate Blood Now
                    </span>
                  </Button>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.06, y: -4 }} 
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 500, damping: 25 }}
                  className="relative group"
                >
                  {/* Subtle glow */}
                  <div className="absolute inset-0 bg-gray-400 rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                  
                  <Button 
                    size="large"
                    shape="round"
                    icon={<Calendar className="w-6 h-6" />}
                    className="relative h-16 px-10 text-lg font-bold shadow-lg group-hover:shadow-xl transition-shadow"
                    style={{
                      background: '#ffffff',
                      border: '2px solid #e5e7eb',
                      color: '#1f2937',
                    }}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Schedule Appointment
                    </span>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
              style={{ perspective: '1000px' }}
            >
              <motion.div
                className="relative w-full h-[600px] rounded-[3rem] overflow-hidden"
                whileHover={{ rotateY: 5, rotateX: 5 }}
                transition={{ duration: 0.3 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500 via-pink-500 to-orange-500 rounded-[3rem]" />
                <div className="absolute inset-[3px] bg-white rounded-[2.85rem] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1615461066159-fea0960485d5?w=800&q=80"
                    alt="Blood donation"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500/30 to-pink-500/30 mix-blend-multiply" />
                </div>
                
                {/* Glassmorphic overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="bg-white/10 backdrop-blur-xl p-12 rounded-full border border-white/20 shadow-2xl"
                  >
                    <Heart className="w-40 h-40 text-white drop-shadow-2xl" strokeWidth={1.5} fill="white" fillOpacity={0.4} />
                  </motion.div>
                </div>
              </motion.div>
              
              {/* Floating stats cards */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-8 -right-8 bg-white/90 backdrop-blur-xl p-6 rounded-3xl shadow-2xl border border-white/50"
              >
                <Statistic
                  title={<span className="text-gray-600 font-semibold">Lives Saved Today</span>}
                  value={245}
                  valueStyle={{ color: '#ff4d4f', fontWeight: 'bold', fontSize: '2.5rem' }}
                  suffix="+"
                />
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute -top-6 -left-6 bg-white/90 backdrop-blur-xl p-5 rounded-2xl shadow-2xl border border-white/50"
              >
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl">
                    <Activity className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">98%</div>
                    <div className="text-xs text-gray-600">Success Rate</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section - Bento Grid */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div 
                  key={index} 
                  variants={fadeInUp}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div 
                    className="relative group cursor-pointer h-full bg-gradient-to-br from-white to-gray-50 backdrop-blur-xl rounded-3xl border border-gray-200 overflow-hidden shadow-lg hover:shadow-2xl transition-all p-8"
                    style={{
                      background: `linear-gradient(135deg, ${stat.color}05 0%, ${stat.color}15 100%)`
                    }}
                  >
                    {/* Animated gradient on hover */}
                    <motion.div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{
                        background: `linear-gradient(135deg, ${stat.color}10 0%, ${stat.color}20 100%)`
                      }}
                    />
                    
                    <div className="relative z-10">
                      <motion.div 
                        className="mb-6 inline-block p-4 rounded-2xl shadow-lg"
                        style={{ 
                          backgroundColor: `${stat.color}15`,
                          boxShadow: `0 10px 30px ${stat.color}30`
                        }}
                        whileHover={{ rotate: [0, -10, 10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="w-10 h-10" style={{ color: stat.color }} />
                      </motion.div>
                      <Statistic
                        value={stat.value}
                        suffix={stat.suffix}
                        valueStyle={{ 
                          color: stat.color, 
                          fontSize: '2.5rem', 
                          fontWeight: '900',
                          lineHeight: '1'
                        }}
                      />
                      <p className="text-gray-600 mt-3 font-semibold text-sm uppercase tracking-wide">
                        {stat.title}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Urgent Need Banner */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1516841273335-e39b37888115?w=1200&q=80"
          alt="Emergency blood need"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/95 to-pink-600/95" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white font-semibold mb-6">
              🚨 URGENT NEED
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              O- Blood Type Critically Needed
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Local hospitals are experiencing a critical shortage. Your donation today could save a life in the next hour.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <motion.div 
                whileHover={{ scale: 1.05, y: -4 }} 
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 500, damping: 25 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-white rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition-opacity" />
                <Button 
                  type="primary"
                  size="large"
                  shape="round"
                  icon={<Heart className="w-7 h-7" fill="#dc2626" />}
                  className="relative h-[72px] px-12 text-xl font-bold border-0 shadow-2xl"
                  style={{
                    background: '#ffffff',
                    color: '#dc2626',
                  }}
                >
                  Donate Now - Emergency
                </Button>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05, y: -4 }} 
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 500, damping: 25 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-white rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
                <Button 
                  size="large"
                  shape="round"
                  icon={<MapPin className="w-7 h-7" />}
                  className="relative h-[72px] px-12 text-xl font-bold shadow-xl"
                  style={{
                    background: 'rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(20px)',
                    border: '2px solid rgba(255, 255, 255, 0.5)',
                    color: '#ffffff',
                  }}
                >
                  Find Nearest Center
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blood Types Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
        
        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block mb-6"
            >
              <span className="px-6 py-2 bg-red-500/20 backdrop-blur-sm border border-red-500/30 text-red-400 rounded-full text-sm font-semibold">
                Live Status
              </span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
              Blood Demand
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Real-time blood type availability across all centers
            </p>
          </motion.div>
          
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {bloodTypes.map((blood, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative group cursor-pointer"
              >
                <div className="relative bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 overflow-hidden">
                  {/* Glow effect */}
                  <motion.div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity blur-xl"
                    style={{ backgroundColor: `${blood.color}30` }}
                  />
                  
                  <div className="relative z-10">
                    <motion.div 
                      className="text-6xl font-black mb-4 bg-gradient-to-br from-white to-gray-300 bg-clip-text text-transparent"
                      whileHover={{ scale: 1.1 }}
                    >
                      {blood.type}
                    </motion.div>
                    <div className="text-xs text-gray-400 mb-3 uppercase tracking-wider font-semibold">
                      Demand Level
                    </div>
                    <motion.div 
                      className="text-sm font-bold px-4 py-2 rounded-full inline-flex items-center gap-2 shadow-lg"
                      style={{ 
                        backgroundColor: `${blood.color}20`,
                        color: blood.color,
                        border: `1px solid ${blood.color}40`
                      }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: blood.color }} />
                        <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: blood.color }} />
                      </span>
                      {blood.demand}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block mb-6"
            >
              <span className="px-6 py-2 bg-gradient-to-r from-red-100 to-pink-100 text-red-600 rounded-full text-sm font-semibold border-2 border-red-200">
                📋 Simple Process
              </span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Four simple steps to become a life-saving hero
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                step: '01',
                title: 'Register Online',
                description: 'Quick 2-minute registration with your basic details and health information',
                icon: UserCheck,
                color: '#ef4444'
              },
              {
                step: '02',
                title: 'Health Screening',
                description: 'Free comprehensive health check-up and blood type testing by professionals',
                icon: FileHeart,
                color: '#ec4899'
              },
              {
                step: '03',
                title: 'Donate Blood',
                description: 'Safe 10-minute donation process with trained medical staff',
                icon: Droplets,
                color: '#f43f5e'
              },
              {
                step: '04',
                title: 'Rest & Refresh',
                description: 'Enjoy refreshments, receive your certificate and feel proud',
                icon: CheckCircle2,
                color: '#fb7185'
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border-2 border-gray-100 h-full">
                    {/* Step number background */}
                    <div className="absolute top-8 right-8 text-8xl font-black opacity-5 group-hover:opacity-10 transition-opacity">
                      {item.step}
                    </div>

                    <div className="relative z-10">
                      <motion.div
                        className="inline-flex p-4 rounded-2xl mb-6 shadow-lg"
                        style={{ 
                          backgroundColor: `${item.color}15`,
                        }}
                        whileHover={{ rotate: [0, -5, 5, 0], scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="w-10 h-10" style={{ color: item.color }} />
                      </motion.div>

                      <div className="flex items-center gap-3 mb-4">
                        <span 
                          className="text-4xl font-black"
                          style={{ color: item.color }}
                        >
                          {item.step}
                        </span>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {item.title}
                        </h3>
                      </div>

                      <p className="text-gray-600 text-lg leading-relaxed mb-4">
                        {item.description}
                      </p>

                      <motion.div
                        className="inline-flex items-center gap-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ color: item.color }}
                        whileHover={{ x: 5 }}
                      >
                        Learn more <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-pink-50/30 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block mb-6"
            >
              <span className="px-6 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full text-sm font-semibold shadow-lg">
                💬 Real Stories
              </span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight">
              Donor Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from our amazing community of life-savers
            </p>
          </motion.div>
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -12 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group"
              >
                <div className="relative h-full bg-white backdrop-blur-xl rounded-3xl border-2 border-gray-100 overflow-hidden shadow-lg hover:shadow-2xl transition-all p-8">
                  {/* Gradient overlay on hover */}
                  <motion.div 
                    className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-red-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  
                  <div className="flex items-start gap-4 mb-6">
                    <motion.div 
                      className="relative w-20 h-20 rounded-2xl overflow-hidden ring-4 ring-red-100 shadow-xl flex-shrink-0"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500 mb-2">{testimonial.role}</p>
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 rounded-full">
                        <Heart className="w-3 h-3 text-red-500 fill-red-500" />
                        <span className="text-xs text-red-600 font-bold">
                          {testimonial.donations} donations
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    <span className="text-red-500 text-2xl font-serif">"</span>
                    {testimonial.quote}
                    <span className="text-red-500 text-2xl font-serif">"</span>
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Impact Gallery Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Impact
            </h2>
            <p className="text-xl text-gray-300">
              See the difference we make every day
            </p>
          </motion.div>
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6"
          >
            {impactImages.map((img, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer"
              >
                <Image
                  src={img.url}
                  alt={img.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{img.title}</h3>
                  <div className="w-16 h-1 bg-red-500 rounded-full" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section - Bento Grid Style */}
      <section id="benefits" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block mb-6"
            >
              <span className="px-6 py-2 bg-gradient-to-r from-red-100 to-pink-100 text-red-600 rounded-full text-sm font-semibold border-2 border-red-200">
                ✨ Benefits
              </span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 tracking-tight">
              Why Donate?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transform lives while improving your own health and wellbeing
            </p>
          </motion.div>
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  whileHover={{ y: -12, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="group cursor-pointer"
                >
                  <div className="relative h-full bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all border-2 border-gray-100">
                    <div className="relative h-56 w-full overflow-hidden">
                      <Image
                        src={benefit.image}
                        alt={benefit.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      
                      {/* Animated icon */}
                      <motion.div 
                        className="absolute top-4 right-4 p-3 bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg"
                        whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="w-6 h-6 text-red-500" />
                      </motion.div>

                      {/* Title overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-2xl font-black text-white mb-2">
                          {benefit.title}
                        </h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                      <motion.div 
                        className="mt-4 inline-flex items-center gap-2 text-red-500 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity"
                        whileHover={{ x: 5 }}
                      >
                        Learn more <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Ways to Help Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Ways You Can Help
            </h2>
            <p className="text-xl text-gray-600">
              Multiple ways to make a difference in your community
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-96 rounded-3xl overflow-hidden group cursor-pointer"
            >
              <Image
                src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80"
                alt="Donate blood"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-600/90 to-red-600/20 group-hover:from-red-700/90 transition-colors" />
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <Heart className="w-16 h-16 text-white mb-4" />
                <h3 className="text-3xl font-bold text-white mb-3">Donate Blood</h3>
                <p className="text-white/90 text-lg mb-4">
                  Regular donations help maintain a stable blood supply for emergencies
                </p>
                <motion.div 
                  whileHover={{ scale: 1.05, x: 3 }} 
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 500, damping: 25 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-white rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity" />
                  <Button 
                    type="primary"
                    size="large"
                    shape="round"
                    icon={<ArrowRight className="w-5 h-5" />}
                    className="relative h-14 px-8 text-base font-bold border-0 shadow-lg"
                    style={{
                      background: '#ffffff',
                      color: '#dc2626',
                    }}
                  >
                    Schedule Donation
                  </Button>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-96 rounded-3xl overflow-hidden group cursor-pointer"
            >
              <Image
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80"
                alt="Organize drive"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pink-600/90 to-pink-600/20 group-hover:from-pink-700/90 transition-colors" />
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <Users className="w-16 h-16 text-white mb-4" />
                <h3 className="text-3xl font-bold text-white mb-3">Organize a Drive</h3>
                <p className="text-white/90 text-lg mb-4">
                  Host a blood donation event at your workplace or community
                </p>
                <motion.div 
                  whileHover={{ scale: 1.05, x: 3 }} 
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 500, damping: 25 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-white rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity" />
                  <Button 
                    type="primary"
                    size="large"
                    shape="round"
                    icon={<ArrowRight className="w-5 h-5" />}
                    className="relative h-14 px-8 text-base font-bold border-0 shadow-lg"
                    style={{
                      background: '#ffffff',
                      color: '#db2777',
                    }}
                  >
                    Start Planning
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated gradient background */}
        <motion.div 
          className="absolute inset-0"
          animate={{
            background: [
              'linear-gradient(135deg, #ef4444 0%, #ec4899 50%, #f43f5e 100%)',
              'linear-gradient(135deg, #f43f5e 0%, #ef4444 50%, #ec4899 100%)',
              'linear-gradient(135deg, #ec4899 0%, #f43f5e 50%, #ef4444 100%)',
            ]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <motion.div
            className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"
            animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
            transition={{ duration: 15, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"
            animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
          />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-block mb-8"
            >
              <div className="p-6 bg-white/20 backdrop-blur-sm rounded-3xl border border-white/30">
                <Heart className="w-20 h-20 text-white" fill="white" fillOpacity={0.3} />
              </div>
            </motion.div>
            
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight leading-tight">
              Ready to Save<br />Lives Today?
            </h2>
            <p className="text-2xl text-white/95 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join thousands of heroes making a difference. Your donation can save up to three lives.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.div 
                whileHover={{ scale: 1.05, y: -4 }} 
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 500, damping: 25 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-white rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition-opacity" />
                <Button 
                  type="primary"
                  size="large"
                  shape="round"
                  icon={<Heart className="w-7 h-7" fill="white" />}
                  className="relative h-[72px] px-14 text-xl font-bold border-0 shadow-2xl"
                  style={{
                    background: '#ffffff',
                    color: '#dc2626',
                  }}
                >
                  Become a Donor
                </Button>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05, y: -4 }} 
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 500, damping: 25 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-white rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity" />
                <Button 
                  size="large"
                  shape="round"
                  icon={<MapPin className="w-7 h-7" />}
                  className="relative h-[72px] px-14 text-xl font-bold shadow-xl"
                  style={{
                    background: 'rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(20px)',
                    border: '2px solid rgba(255, 255, 255, 0.5)',
                    color: '#ffffff',
                  }}
                >
                  Find Blood Camps
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white overflow-hidden">
        {/* Decorative gradient */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <motion.div 
                className="flex items-center gap-3 mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 blur-lg opacity-50" />
                  <Droplets className="w-8 h-8 text-red-500 relative" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
                  BloodBooth
                </span>
              </motion.div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Connecting donors with those in need, saving lives every day through compassion and care.
              </p>
              <div className="flex gap-3">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.1, y: -3 }}
                    className="w-10 h-10 bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/10 cursor-pointer hover:bg-red-500/20 hover:border-red-500/30 transition-all"
                  >
                    <div className="w-4 h-4 bg-gray-600 rounded-full" />
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">Quick Links</h4>
              <ul className="space-y-3 text-gray-400">
                {['About Us', 'Find Donor', 'Blood Banks', 'Campaigns'].map((link) => (
                  <motion.li key={link} whileHover={{ x: 5 }}>
                    <a href="#" className="hover:text-red-400 transition-colors flex items-center gap-2 group">
                      <span className="w-1 h-1 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">Support</h4>
              <ul className="space-y-3 text-gray-400">
                {['FAQ', 'Contact', 'Emergency', 'Donate'].map((link) => (
                  <motion.li key={link} whileHover={{ x: 5 }}>
                    <a href="#" className="hover:text-red-400 transition-colors flex items-center gap-2 group">
                      <span className="w-1 h-1 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-lg">Get In Touch</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-center gap-3">
                  <div className="p-2 bg-red-500/10 rounded-lg">
                    <span>📞</span>
                  </div>
                  <span>1-800-BLOOD</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="p-2 bg-red-500/10 rounded-lg">
                    <span>📧</span>
                  </div>
                  <span>info@bloodbank.org</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="p-2 bg-red-500/10 rounded-lg">
                    <span>📍</span>
                  </div>
                  <span>123 Life Street</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="p-2 bg-red-500/10 rounded-lg">
                    <span>🕐</span>
                  </div>
                  <div>
                    <span className="font-semibold text-red-400">24/7</span> Available
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-center md:text-left">
                &copy; 2025 BloodBooth. All rights reserved. Saving lives, one donation at a time.
              </p>
              <div className="flex gap-6 text-sm text-gray-400">
                <motion.a href="#" whileHover={{ scale: 1.05 }} className="hover:text-red-400 transition-colors">
                  Privacy Policy
                </motion.a>
                <motion.a href="#" whileHover={{ scale: 1.05 }} className="hover:text-red-400 transition-colors">
                  Terms of Service
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
