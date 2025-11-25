'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button, Input, Select, DatePicker, message, Progress, Badge } from 'antd';
import { 
  FaUser,
  FaEnvelope,
  FaPhone,
  FaTint,
  FaCalendarAlt,
  FaEdit,
  FaSave,
  FaTimes,
  FaCamera,
  FaMapMarkerAlt,
  FaAward,
  FaHeart,
  FaTrophy,
  FaCheckCircle,
  FaClock,
  FaChartLine
} from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { isAuthenticated, getCurrentUser } from '@/lib/auth';
import dayjs from 'dayjs';

const { Option } = Select;

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    bloodType: '',
    dateOfBirth: null,
    location: '',
    bio: '',
  });

  useEffect(() => {
    const checkAuth = async () => {
      if (!isAuthenticated()) {
        router.push('/login');
        return;
      }
      
      const currentUser = getCurrentUser();
      setUser(currentUser);
      setFormData({
        fullName: currentUser?.name || '',
        email: currentUser?.email || '',
        phone: currentUser?.phone || '',
        bloodType: currentUser?.bloodType || '',
        dateOfBirth: currentUser?.dateOfBirth ? dayjs(currentUser.dateOfBirth) : null,
        location: currentUser?.location || 'New York, USA',
        bio: currentUser?.bio || 'Proud blood donor making a difference in saving lives.',
      });
      setLoading(false);
    };

    checkAuth();
  }, [router]);

  const handleSave = async () => {
    setSaving(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    message.success('Profile updated successfully!');
    setSaving(false);
    setEditing(false);
  };

  const handleCancel = () => {
    // Reset form data
    setFormData({
      fullName: user?.name || '',
      email: user?.email || '',
      phone: user?.phone || '',
      bloodType: user?.bloodType || '',
      dateOfBirth: user?.dateOfBirth ? dayjs(user.dateOfBirth) : null,
      location: user?.location || 'New York, USA',
      bio: user?.bio || 'Proud blood donor making a difference in saving lives.',
    });
    setEditing(false);
  };

  // Mock stats
  const stats = {
    totalDonations: 12,
    livesSaved: 36,
    lastDonation: '2024-11-15',
    nextEligible: '15 days',
    points: 1200,
    badges: 8,
  };

  const achievements = [
    { id: 1, title: 'First Donation', icon: '🎉', date: '2023-01-15', unlocked: true },
    { id: 2, title: '5 Donations', icon: '⭐', date: '2023-06-20', unlocked: true },
    { id: 3, title: '10 Donations', icon: '🏆', date: '2024-05-10', unlocked: true },
    { id: 4, title: 'Life Saver', icon: '❤️', date: '2024-08-22', unlocked: true },
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-red-50/30 to-pink-50/30">
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="inline-block"
          >
            <FaHeart className="w-12 h-12 text-red-500" />
          </motion.div>
          <p className="mt-4 text-gray-600 font-semibold">Loading profile...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-red-50/30 to-pink-50/30 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-2">
                My Profile
              </h1>
              <p className="text-lg text-gray-600">
                Manage your account and track your donation journey
              </p>
            </div>
            <Link href="/dashboard">
              <Button
                size="large"
                className="rounded-xl font-semibold"
              >
                Back to Dashboard
              </Button>
            </Link>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Profile Card */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white/70 backdrop-blur-xl rounded-xl border-2 border-white/50 p-6 sticky top-24"
            >
              {/* Profile Picture */}
              <div className="text-center mb-6">
                <div className="relative inline-block mb-4">
                  <div className="w-32 h-32 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-6xl text-white font-black">
                      {user?.name?.charAt(0) || 'U'}
                    </span>
                  </div>
                  <button className="absolute bottom-0 right-0 bg-red-500 hover:bg-red-600 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-colors">
                    <FaCamera className="w-5 h-5 text-white" />
                  </button>
                  <div className="absolute -bottom-1 -right-1 bg-green-500 w-8 h-8 rounded-full border-4 border-white" />
                </div>
                
                <h2 className="text-2xl font-black text-gray-900 mb-1">
                  {user?.name || 'User'}
                </h2>
                <p className="text-sm text-gray-600 mb-3">{user?.email}</p>
                
                <div className="inline-flex items-center gap-2 bg-red-100 px-4 py-2 rounded-full mb-4">
                  <FaTint className="w-5 h-5 text-red-500" />
                  <span className="font-black text-red-500 text-xl">{user?.bloodType || 'A+'}</span>
                </div>

                <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mb-4">
                  <FaMapMarkerAlt className="w-4 h-4 text-gray-400" />
                  <span>{formData.location}</span>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-red-50 to-pink-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="bg-red-500 p-2 rounded-lg">
                      <FaTint className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-gray-700">Donations</span>
                  </div>
                  <span className="text-2xl font-black text-red-500">{stats.totalDonations}</span>
                </div>

                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-500 p-2 rounded-lg">
                      <FaHeart className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-gray-700">Lives Saved</span>
                  </div>
                  <span className="text-2xl font-black text-blue-500">{stats.livesSaved}</span>
                </div>

                <div className="flex justify-between items-center p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className="bg-yellow-500 p-2 rounded-lg">
                      <FaTrophy className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-gray-700">Points</span>
                  </div>
                  <span className="text-2xl font-black text-yellow-500">{stats.points}</span>
                </div>
              </div>

              {/* Profile Completion */}
              <div className="border-t pt-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Profile Completion</span>
                  <span className="font-bold text-gray-900">85%</span>
                </div>
                <Progress 
                  percent={85} 
                  strokeColor={{ from: '#ef4444', to: '#ec4899' }} 
                  showInfo={false}
                  className="mb-3"
                />
                <p className="text-xs text-gray-500">
                  Complete your profile to unlock more features
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Details & Achievements */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/70 backdrop-blur-xl rounded-xl border-2 border-white/50 p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-br from-red-500 to-pink-500 p-2.5 rounded-xl">
                    <FaUser className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-black text-gray-900">Personal Information</h2>
                </div>
                {!editing ? (
                  <Button
                    type="primary"
                    icon={<FaEdit className="w-4 h-4" />}
                    onClick={() => setEditing(true)}
                    className="rounded-xl font-semibold"
                  >
                    Edit Profile
                  </Button>
                ) : (
                  <div className="flex gap-2">
                    <Button
                      icon={<FaTimes className="w-4 h-4" />}
                      onClick={handleCancel}
                      className="rounded-xl font-semibold"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="primary"
                      icon={<FaSave className="w-4 h-4" />}
                      onClick={handleSave}
                      loading={saving}
                      className="rounded-xl font-semibold"
                    >
                      Save Changes
                    </Button>
                  </div>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <Input
                    size="large"
                    prefix={<FaUser className="w-4 h-4 text-gray-400" />}
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    disabled={!editing}
                    className="rounded-xl"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <Input
                    size="large"
                    prefix={<FaEnvelope className="w-4 h-4 text-gray-400" />}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    disabled={!editing}
                    className="rounded-xl"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <Input
                    size="large"
                    prefix={<FaPhone className="w-4 h-4 text-gray-400" />}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    disabled={!editing}
                    className="rounded-xl"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Blood Type
                  </label>
                  <Select
                    size="large"
                    value={formData.bloodType}
                    onChange={(value) => setFormData({ ...formData, bloodType: value })}
                    disabled={!editing}
                    className="w-full rounded-xl"
                  >
                    <Option value="A+">A+</Option>
                    <Option value="A-">A-</Option>
                    <Option value="B+">B+</Option>
                    <Option value="B-">B-</Option>
                    <Option value="O+">O+</Option>
                    <Option value="O-">O-</Option>
                    <Option value="AB+">AB+</Option>
                    <Option value="AB-">AB-</Option>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Date of Birth
                  </label>
                  <DatePicker
                    size="large"
                    value={formData.dateOfBirth}
                    onChange={(date) => setFormData({ ...formData, dateOfBirth: date })}
                    disabled={!editing}
                    className="w-full rounded-xl"
                    format="YYYY-MM-DD"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Location
                  </label>
                  <Input
                    size="large"
                    prefix={<FaMapMarkerAlt className="w-4 h-4 text-gray-400" />}
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    disabled={!editing}
                    className="rounded-xl"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Bio
                  </label>
                  <Input.TextArea
                    rows={3}
                    value={formData.bio}
                    onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                    disabled={!editing}
                    className="rounded-xl"
                    placeholder="Tell us about yourself..."
                  />
                </div>
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/70 backdrop-blur-xl rounded-xl border-2 border-white/50 p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-gradient-to-br from-yellow-500 to-orange-500 p-2.5 rounded-xl">
                  <FaAward className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-2xl font-black text-gray-900">Achievements</h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {achievements.map((achievement) => (
                  <motion.div
                    key={achievement.id}
                    whileHover={{ scale: 1.02 }}
                    className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-4 border-2 border-yellow-200"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">{achievement.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-bold text-gray-900">{achievement.title}</h3>
                          <FaCheckCircle className="w-4 h-4 text-green-500" />
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-600">
                          <FaCalendarAlt className="w-3 h-3" />
                          <span>{new Date(achievement.date).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric', 
                            year: 'numeric' 
                          })}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Donation History Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white/70 backdrop-blur-xl rounded-xl border-2 border-white/50 p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-br from-red-500 to-pink-500 p-2.5 rounded-xl">
                    <FaChartLine className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-black text-gray-900">Recent Activity</h2>
                </div>
                <Link href="/dashboard">
                  <Button type="link" className="font-semibold text-red-500">
                    View All
                  </Button>
                </Link>
              </div>

              <div className="space-y-3">
                {[1, 2, 3].map((_, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all"
                  >
                    <div className="bg-green-100 p-3 rounded-xl">
                      <FaCheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-gray-900 mb-1">Whole Blood Donation</div>
                      <div className="text-sm text-gray-600 flex items-center gap-2">
                        <FaMapMarkerAlt className="w-4 h-4" />
                        City Blood Bank, New York
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-gray-900">
                        {new Date(Date.now() - index * 60 * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric'
                        })}
                      </div>
                      <Badge status="success" text="Completed" />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}


