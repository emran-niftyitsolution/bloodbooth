"use client";

import { getCurrentUser, isAuthenticated } from "@/lib/auth";
import { Badge, Button, Progress } from "antd";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  FaArrowRight,
  FaArrowUp,
  FaAward,
  FaBell,
  FaCalendarAlt,
  FaChartLine,
  FaCheckCircle,
  FaClock,
  FaCog,
  FaEdit,
  FaHeart,
  FaMapMarkerAlt,
  FaShareAlt,
  FaStar,
  FaTint,
  FaTrophy,
} from "react-icons/fa";

interface DonationRecord {
  id: string;
  date: string;
  location: string;
  type: string;
  status: "completed" | "pending" | "upcoming";
}

interface Appointment {
  id: string;
  date: string;
  time: string;
  location: string;
  type: string;
}

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      if (!isAuthenticated()) {
        router.push("/login");
        return;
      }

      const currentUser = getCurrentUser();
      setUser(currentUser);
      setLoading(false);
    };

    checkAuth();
  }, [router]);

  // Mock data
  const stats = {
    totalDonations: 12,
    livesSaved: 36,
    nextEligible: "15 days",
    points: 1200,
    streak: 6,
  };

  const donationHistory: DonationRecord[] = [
    {
      id: "1",
      date: "2024-11-15",
      location: "City Blood Bank, New York",
      type: "Whole Blood",
      status: "completed",
    },
    {
      id: "2",
      date: "2024-09-10",
      location: "Memorial Hospital, Brooklyn",
      type: "Platelets",
      status: "completed",
    },
    {
      id: "3",
      date: "2024-07-05",
      location: "Community Health Center, Manhattan",
      type: "Whole Blood",
      status: "completed",
    },
  ];

  const upcomingAppointments: Appointment[] = [
    {
      id: "1",
      date: "2024-12-05",
      time: "10:00 AM",
      location: "City Blood Bank, New York",
      type: "Whole Blood",
    },
  ];

  const achievements = [
    { id: 1, title: "First Donation", icon: "🎉", unlocked: true },
    { id: 2, title: "5 Donations", icon: "⭐", unlocked: true },
    { id: 3, title: "10 Donations", icon: "🏆", unlocked: true },
    { id: 4, title: "Life Saver", icon: "❤️", unlocked: true },
    { id: 5, title: "20 Donations", icon: "💎", unlocked: false },
    { id: 6, title: "Hero Status", icon: "👑", unlocked: false },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

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
          <p className="mt-4 text-gray-600 font-semibold">
            Loading dashboard...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-red-50/30 to-pink-50/30 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-2">
                Welcome back, {user?.name?.split(" ")[0] || "Hero"}! 👋
              </h1>
              <p className="text-lg text-gray-600">
                Track your donations, schedule appointments, and save more
                lives.
              </p>
            </div>
            <div className="flex gap-3">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="large"
                  icon={<FaBell className="w-5 h-5" />}
                  className="rounded-xl font-semibold h-12"
                >
                  <Badge dot>Notifications</Badge>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="large"
                  icon={<FaCog className="w-5 h-5" />}
                  className="rounded-xl font-semibold h-12"
                >
                  Settings
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-6">
          {/* Left Column */}
          <div className="lg:col-span-8 space-y-6">
            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
            >
              {/* Total Donations */}
              <div className="bg-white/70 backdrop-blur-xl rounded-xl border-2 border-white/50 p-6 hover:shadow-xl transition-all">
                <div className="flex items-center justify-between mb-3">
                  <div className="bg-gradient-to-br from-red-500 to-pink-500 p-3 rounded-xl">
                    <FaTint className="w-6 h-6 text-white" />
                  </div>
                  <FaArrowUp className="w-5 h-5 text-green-500" />
                </div>
                <div className="text-3xl font-black text-gray-900 mb-1">
                  {stats.totalDonations}
                </div>
                <div className="text-sm font-semibold text-gray-600">
                  Total Donations
                </div>
              </div>

              {/* Lives Saved */}
              <div className="bg-white/70 backdrop-blur-xl rounded-xl border-2 border-white/50 p-6 hover:shadow-xl transition-all">
                <div className="flex items-center justify-between mb-3">
                  <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-3 rounded-xl">
                    <FaHeart className="w-6 h-6 text-white" />
                  </div>
                  <FaArrowUp className="w-5 h-5 text-green-500" />
                </div>
                <div className="text-3xl font-black text-gray-900 mb-1">
                  {stats.livesSaved}
                </div>
                <div className="text-sm font-semibold text-gray-600">
                  Lives Saved
                </div>
              </div>

              {/* Donation Streak */}
              <div className="bg-white/70 backdrop-blur-xl rounded-xl border-2 border-white/50 p-6 hover:shadow-xl transition-all">
                <div className="flex items-center justify-between mb-3">
                  <div className="bg-gradient-to-br from-orange-500 to-yellow-500 p-3 rounded-xl">
                    <FaTrophy className="w-6 h-6 text-white" />
                  </div>
                  <FaStar className="w-5 h-5 text-yellow-500" />
                </div>
                <div className="text-3xl font-black text-gray-900 mb-1">
                  {stats.streak}
                </div>
                <div className="text-sm font-semibold text-gray-600">
                  Month Streak
                </div>
              </div>

              {/* Reward Points */}
              <div className="bg-white/70 backdrop-blur-xl rounded-xl border-2 border-white/50 p-6 hover:shadow-xl transition-all">
                <div className="flex items-center justify-between mb-3">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-3 rounded-xl">
                    <FaAward className="w-6 h-6 text-white" />
                  </div>
                  <FaArrowRight className="w-5 h-5 text-purple-500" />
                </div>
                <div className="text-3xl font-black text-gray-900 mb-1">
                  {stats.points}
                </div>
                <div className="text-sm font-semibold text-gray-600">
                  Reward Points
                </div>
              </div>
            </motion.div>

            {/* Blood Type & Eligibility Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-red-500 to-pink-500 rounded-xl p-8 text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="relative z-10 grid md:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                      <FaTint className="w-8 h-8" />
                    </div>
                    <div>
                      <div className="text-sm text-white/80">
                        Your Blood Type
                      </div>
                      <div className="text-4xl font-black">
                        {user?.bloodType || "A+"}
                      </div>
                    </div>
                  </div>
                  <p className="text-white/90 text-sm">
                    Your blood type is in high demand. You can help save lives!
                  </p>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                      <FaClock className="w-8 h-8" />
                    </div>
                    <div>
                      <div className="text-sm text-white/80">Next Eligible</div>
                      <div className="text-4xl font-black">
                        {stats.nextEligible}
                      </div>
                    </div>
                  </div>
                  <Link href="/find-donor">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        type="default"
                        size="large"
                        icon={<FaCalendarAlt className="w-5 h-5" />}
                        className="bg-white text-red-500 hover:bg-gray-50 border-0 rounded-xl font-bold h-12 w-full"
                      >
                        Schedule Donation
                      </Button>
                    </motion.div>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Donation History */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/70 backdrop-blur-xl rounded-xl border-2 border-white/50 p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-br from-red-500 to-pink-500 p-2.5 rounded-xl">
                    <FaChartLine className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-black text-gray-900">
                    Donation History
                  </h2>
                </div>
                <Button type="link" className="font-semibold text-red-500">
                  View All
                </Button>
              </div>

              <div className="space-y-4">
                {donationHistory.map((donation, index) => (
                  <motion.div
                    key={donation.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all"
                  >
                    <div className="bg-green-100 p-3 rounded-xl">
                      <FaCheckCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-gray-900 mb-1">
                        {donation.type}
                      </div>
                      <div className="text-sm text-gray-600 flex items-center gap-2">
                        <FaMapMarkerAlt className="w-4 h-4" />
                        {donation.location}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-gray-900">
                        {new Date(donation.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </div>
                      <Badge status="success" text="Completed" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-4 space-y-6">
            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white/70 backdrop-blur-xl rounded-xl border-2 border-white/50 p-6"
            >
              <div className="text-center mb-4">
                <div className="relative inline-block mb-4">
                  <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center">
                    <span className="text-4xl text-white font-black">
                      {user?.name?.charAt(0) || "U"}
                    </span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 bg-green-500 w-6 h-6 rounded-full border-4 border-white" />
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-1">
                  {user?.name || "User"}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{user?.email}</p>
                <div className="inline-flex items-center gap-2 bg-red-100 px-4 py-2 rounded-full">
                  <FaTint className="w-4 h-4 text-red-500" />
                  <span className="font-black text-red-500">
                    {user?.bloodType || "A+"}
                  </span>
                </div>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Profile Completion</span>
                  <span className="font-bold text-gray-900">85%</span>
                </div>
                <Progress
                  percent={85}
                  strokeColor={{ from: "#ef4444", to: "#ec4899" }}
                  showInfo={false}
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <Button
                  block
                  icon={<FaEdit className="w-4 h-4" />}
                  className="rounded-xl font-semibold"
                >
                  Edit
                </Button>
                <Button
                  block
                  icon={<FaShareAlt className="w-4 h-4" />}
                  className="rounded-xl font-semibold"
                >
                  Share
                </Button>
              </div>
            </motion.div>

            {/* Upcoming Appointments */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/70 backdrop-blur-xl rounded-xl border-2 border-white/50 p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-2.5 rounded-xl">
                  <FaCalendarAlt className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-black text-gray-900">Upcoming</h2>
              </div>

              {upcomingAppointments.length > 0 ? (
                <div className="space-y-3">
                  {upcomingAppointments.map((appointment) => (
                    <div
                      key={appointment.id}
                      className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-4 border border-blue-100"
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <div className="bg-blue-500 p-2 rounded-lg">
                          <FaCalendarAlt className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-gray-900 mb-1">
                            {appointment.type}
                          </div>
                          <div className="text-sm text-gray-600 flex items-center gap-1 mb-1">
                            <FaClock className="w-4 h-4" />
                            {new Date(appointment.date).toLocaleDateString(
                              "en-US",
                              {
                                weekday: "short",
                                month: "short",
                                day: "numeric",
                              }
                            )}{" "}
                            at {appointment.time}
                          </div>
                          <div className="text-sm text-gray-600 flex items-center gap-1">
                            <FaMapMarkerAlt className="w-4 h-4" />
                            {appointment.location}
                          </div>
                        </div>
                      </div>
                      <Button
                        block
                        type="primary"
                        className="rounded-xl font-semibold border-0"
                        style={{
                          background:
                            "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
                        }}
                      >
                        View Details
                      </Button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-6">
                  <FaCalendarAlt className="w-12 h-12 text-gray-300 mx-auto mb-2" />
                  <p className="text-gray-600 text-sm mb-3">
                    No upcoming appointments
                  </p>
                  <Link href="/find-donor">
                    <Button type="primary" className="rounded-xl font-semibold">
                      Schedule Now
                    </Button>
                  </Link>
                </div>
              )}
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/70 backdrop-blur-xl rounded-xl border-2 border-white/50 p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-br from-yellow-500 to-orange-500 p-2.5 rounded-xl">
                  <FaAward className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-black text-gray-900">
                  Achievements
                </h2>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {achievements.map((achievement) => (
                  <motion.div
                    key={achievement.id}
                    whileHover={{ scale: 1.05 }}
                    className={`aspect-square rounded-xl p-3 flex flex-col items-center justify-center text-center ${
                      achievement.unlocked
                        ? "bg-gradient-to-br from-yellow-100 to-orange-100 border-2 border-yellow-300"
                        : "bg-gray-100 border-2 border-gray-200 opacity-50"
                    }`}
                  >
                    <div className="text-3xl mb-1">{achievement.icon}</div>
                    <div className="text-xs font-bold text-gray-900">
                      {achievement.title}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl p-6 text-white"
            >
              <h3 className="text-lg font-black mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <Link href="/find-donor">
                  <Button
                    block
                    size="large"
                    className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 rounded-xl font-semibold h-12"
                  >
                    Find Blood Donors
                  </Button>
                </Link>
                <Button
                  block
                  size="large"
                  className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 rounded-xl font-semibold h-12"
                >
                  Request Blood
                </Button>
                <Button
                  block
                  size="large"
                  className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 rounded-xl font-semibold h-12"
                >
                  Donation Centers
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
