"use client";

import { Button, Empty, Input, Select, Slider, Switch } from "antd";
import { motion } from "framer-motion";
import {
  FaAward,
  FaCalendarAlt,
  FaTint,
  FaHeart,
  FaEnvelope,
  FaMapMarkerAlt,
  FaLocationArrow,
  FaSyncAlt,
  FaSearch,
  FaSlidersH,
  FaStar,
  FaUser,
  FaUsers,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { mockDonors } from "./mock-donors";

const { Option } = Select;

export default function FindDonorPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBloodType, setSelectedBloodType] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);
  const [maxDistance, setMaxDistance] = useState(20);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Filter donors
  const filteredDonors = mockDonors.filter((donor) => {
    const matchesSearch =
      donor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      donor.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesBloodType =
      !selectedBloodType || donor.bloodType === selectedBloodType;
    const matchesCity = !selectedCity || donor.city === selectedCity;
    const matchesAvailability = !showAvailableOnly || donor.available;
    const matchesDistance = parseFloat(donor.distance) <= maxDistance;

    return (
      matchesSearch &&
      matchesBloodType &&
      matchesCity &&
      matchesAvailability &&
      matchesDistance
    );
  });

  const handleReset = () => {
    setSearchQuery("");
    setSelectedBloodType("");
    setSelectedCity("");
    setShowAvailableOnly(false);
    setMaxDistance(20);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-red-50/30 to-pink-50/30">
      {/* Hero Header */}
      <div className="relative bg-gradient-to-r from-red-500 via-pink-500 to-red-500 text-white py-20 px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{ duration: 20, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
            animate={{
              x: [0, -100, 0],
              y: [0, -50, 0],
            }}
            transition={{ duration: 15, repeat: Infinity }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Link
                  href="/"
                  className="text-white/80 hover:text-white transition-colors font-semibold"
                >
                  Home
                </Link>
                <span className="text-white/60">/</span>
                <span className="font-semibold">Find Donor</span>
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white/20 backdrop-blur-xl p-4 rounded-2xl">
                  <FaTint className="w-12 h-12" />
                </div>
                <div>
                  <h1 className="text-5xl md:text-6xl font-black mb-2">
                    Find Blood Donors
                  </h1>
                </div>
              </div>
              <p className="text-xl text-white/90 max-w-xl mb-8">
                Connect with verified donors nearby. Search by blood type,
                location, and availability to find the perfect match.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20"
                >
                  <div className="text-3xl font-black mb-1">
                    {mockDonors.length}+
                  </div>
                  <div className="text-sm text-white/80">Donors</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20"
                >
                  <div className="text-3xl font-black mb-1">8</div>
                  <div className="text-sm text-white/80">Blood Types</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20"
                >
                  <div className="text-3xl font-black mb-1">24/7</div>
                  <div className="text-sm text-white/80">Available</div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1615461066841-6116e61058f4?w=800&q=80"
                  alt="Blood donation"
                  fill
                  className="object-cover rounded-xl"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Floating Card on Image */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-xl rounded-2xl p-6 border border-white/50 shadow-xl"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-gradient-to-br from-red-500 to-pink-500 p-3 rounded-xl">
                      <FaHeart className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-gray-900 font-black text-lg mb-1">
                        Save Lives Today
                      </div>
                      <div className="text-gray-600 text-sm">
                        Every donation can save up to 3 lives
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Blood Type Badges */}
                <div className="absolute top-6 right-6 flex flex-wrap gap-2">
                  {["A+", "B+", "O+", "AB+"].map((type, index) => (
                    <motion.div
                      key={type}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-red-200"
                    >
                      <span className="text-red-500 font-black text-sm">
                        {type}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Decorative Elements */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -left-4 bg-white/20 backdrop-blur-xl p-4 rounded-2xl border border-white/30"
              >
                <FaUsers className="w-8 h-8 text-white" />
              </motion.div>
              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -right-4 bg-white/20 backdrop-blur-xl p-4 rounded-2xl border border-white/30"
              >
                <FaTint className="w-8 h-8 text-white" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Sidebar - Filters */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:w-80 flex-shrink-0"
          >
            <div className="sticky top-24 space-y-6">
              {/* Filter Card */}
              <div className="bg-white/70 backdrop-blur-xl rounded-xl shadow-xl border-2 border-white/50 p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-gradient-to-br from-red-500 to-pink-500 p-2.5 rounded-xl">
                    <FaSlidersH className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-black text-gray-900">Filters</h2>
                </div>

                <div className="space-y-5">
                  {/* Search */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Search
                    </label>
                    <Input
                      size="large"
                      placeholder="Name or location..."
                      prefix={<FaSearch className="w-4 h-4 text-gray-400" />}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="rounded-xl"
                    />
                  </div>

                  {/* Blood Type */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Blood Type
                    </label>
                    <Select
                      size="large"
                      placeholder="Select blood type"
                      value={selectedBloodType || undefined}
                      onChange={setSelectedBloodType}
                      className="w-full"
                      allowClear
                    >
                      {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map(
                        (type) => (
                          <Option key={type} value={type}>
                            <div className="flex items-center gap-2">
                              <FaTint className="w-4 h-4 text-red-500" />
                              <span className="font-semibold">{type}</span>
                            </div>
                          </Option>
                        )
                      )}
                    </Select>
                  </div>

                  {/* City */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      City
                    </label>
                    <Select
                      size="large"
                      placeholder="Select city"
                      value={selectedCity || undefined}
                      onChange={setSelectedCity}
                      className="w-full"
                      allowClear
                    >
                      {[
                        "New York",
                        "Los Angeles",
                        "Chicago",
                        "Houston",
                        "Phoenix",
                      ].map((city) => (
                        <Option key={city} value={city}>
                          <div className="flex items-center gap-2">
                            <FaMapMarkerAlt className="w-4 h-4 text-blue-500" />
                            <span className="font-semibold">{city}</span>
                          </div>
                        </Option>
                      ))}
                    </Select>
                  </div>

                  {/* Distance Slider */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-3">
                      Max Distance:{" "}
                      <span className="text-red-500">{maxDistance} km</span>
                    </label>
                    <Slider
                      min={1}
                      max={50}
                      value={maxDistance}
                      onChange={setMaxDistance}
                      tooltip={{ formatter: (value) => `${value} km` }}
                      className="px-1"
                    />
                  </div>

                  {/* Available Only Toggle */}
                  <div className="flex items-center justify-between bg-gray-50 rounded-xl p-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-green-100 p-2 rounded-lg">
                        <FaHeart className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-gray-900">
                          Available Only
                        </div>
                        <div className="text-xs text-gray-500">
                          Show ready donors
                        </div>
                      </div>
                    </div>
                    <Switch
                      checked={showAvailableOnly}
                      onChange={setShowAvailableOnly}
                      className="bg-gray-300"
                    />
                  </div>
                </div>

                {/* Reset Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-6"
                >
                  <Button
                    size="large"
                    block
                    icon={<FaSyncAlt className="w-4 h-4" />}
                    onClick={handleReset}
                    className="rounded-xl font-bold h-12"
                  >
                    Reset All Filters
                  </Button>
                </motion.div>

                {/* Results Count */}
                <div className="mt-6 pt-6 border-t-2 border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-gray-600">
                      Results
                    </span>
                    <span className="text-2xl font-black bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                      {filteredDonors.length}
                    </span>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-gradient-to-br from-red-500 to-pink-500 rounded-xl p-6 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <FaAward className="w-6 h-6" />
                  <h3 className="font-bold text-lg">Quick Stats</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-white/80 text-sm">Total Donors</span>
                    <span className="font-bold text-xl">
                      {mockDonors.length}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80 text-sm">Available Now</span>
                    <span className="font-bold text-xl">
                      {mockDonors.filter((d) => d.available).length}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Donor Cards */}
          <div className="flex-1">
            {filteredDonors.length > 0 ? (
              <motion.div
                initial="initial"
                animate="animate"
                variants={staggerContainer}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
              >
                {filteredDonors.map((donor) => (
                  <motion.div
                    key={donor.id}
                    variants={fadeInUp}
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="h-full hover:shadow-2xl shadow-sm transition-all rounded-xl border-2 border-white/50 overflow-hidden bg-white/70 backdrop-blur-xl">
                      <div className="relative">
                        {/* Status Badge */}
                        <div className="absolute top-4 right-4 z-10">
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring" }}
                          >
                            <span
                              className={`inline-flex items-center text-xs font-bold px-3 py-1.5 rounded-full shadow-sm ${
                                donor.available
                                  ? "bg-green-50 text-green-700 border border-green-200"
                                  : "bg-gray-50 text-gray-600 border border-gray-200"
                              }`}
                            >
                              <span
                                className={`mr-1 h-2 w-2 rounded-full ${
                                  donor.available ? "bg-green-500" : "bg-gray-400"
                                }`}
                              />
                              {donor.available ? "Available" : "Unavailable"}
                            </span>
                          </motion.div>
                        </div>

                        {/* Profile Image */}
                        <div className="relative h-56 bg-gradient-to-br from-red-100 to-pink-100 rounded-t-xl">
                          <Image
                            src={donor.image}
                            alt={donor.name}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                          {/* Blood Type Badge */}
                          <motion.div
                            className="absolute bottom-4 left-4"
                            whileHover={{ scale: 1.1 }}
                          >
                            <div className="bg-white/95 backdrop-blur-sm px-5 py-3 rounded-2xl border-2 border-red-500 shadow-xl">
                              <span className="text-3xl font-black bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
                                {donor.bloodType}
                              </span>
                            </div>
                          </motion.div>

                          {/* Distance Badge */}
                          <div className="absolute bottom-4 right-4">
                            <div className="bg-blue-500/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-1.5">
                              <FaLocationArrow className="w-3.5 h-3.5 text-white" />
                              <span className="text-white text-xs font-bold">
                                {donor.distance}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-6">
                        {/* Name & Rating */}
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-xl font-black text-gray-900">
                            {donor.name}
                          </h3>
                          <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg">
                            <FaStar className="w-4 h-4 text-yellow-500" />
                            <span className="text-sm font-bold text-yellow-700">
                              {donor.rating}
                            </span>
                          </div>
                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-2 text-gray-600 mb-4">
                          <FaMapMarkerAlt className="w-4 h-4 text-red-500" />
                          <span className="text-sm font-medium">
                            {donor.location}
                          </span>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-3 mb-5">
                          <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-4 text-center border border-red-100">
                            <FaHeart className="w-5 h-5 text-red-500 mx-auto mb-2" />
                            <div className="text-2xl font-black text-red-500">
                              {donor.totalDonations}
                            </div>
                            <div className="text-xs font-semibold text-gray-600 mt-1">
                              Donations
                            </div>
                          </div>
                          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-4 text-center border border-blue-100">
                            <FaCalendarAlt className="w-5 h-5 text-blue-500 mx-auto mb-2" />
                            <div className="text-xs font-bold text-blue-500 mt-1">
                              {donor.lastDonation}
                            </div>
                            <div className="text-xs font-semibold text-gray-600 mt-1">
                              Last Donated
                            </div>
                          </div>
                        </div>

                        {/* Contact Actions */}
                        <div className="flex gap-3">
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex-1"
                          >
                            <Button
                              type="primary"
                              size="large"
                              block
                              icon={<FaUser className="w-4 h-4" />}
                              className="rounded-xl font-bold border-0 h-12 shadow-lg"
                              href={`/find-donor/${donor.id}`}
                              style={{
                                background:
                                  "linear-gradient(135deg, #dc2626 0%, #e11d48 50%, #ec4899 100%)",
                              }}
                            >
                              View Profile
                            </Button>
                          </motion.div>
                          <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Button
                              size="large"
                              icon={<FaEnvelope className="w-4 h-4" />}
                              disabled={!donor.available}
                              className="rounded-xl font-bold h-12 w-12 flex items-center justify-center p-0"
                            />
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center py-20 rounded-xl border-2 border-white/50 bg-white/70 backdrop-blur-xl">
                  <Empty
                    image={Empty.PRESENTED_IMAGE_SIMPLE}
                    description={
                      <div>
                        <p className="text-2xl font-bold text-gray-900 mb-2">
                          No donors found
                        </p>
                        <p className="text-gray-600 mb-4">
                          Try adjusting your filters or search criteria
                        </p>
                      </div>
                    }
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        type="primary"
                        size="large"
                        shape="round"
                        icon={<FaSyncAlt className="w-5 h-5" />}
                        onClick={handleReset}
                        className="font-bold border-0 h-14 px-10 shadow-xl"
                        style={{
                          background:
                            "linear-gradient(135deg, #dc2626 0%, #e11d48 50%, #ec4899 100%)",
                        }}
                      >
                        Reset All Filters
                      </Button>
                    </motion.div>
                  </Empty>
                </div>
              </motion.div>
            )}

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 relative overflow-hidden bg-gradient-to-r from-red-500 via-pink-500 to-red-500 rounded-xl p-10 md:p-16 text-center text-white shadow-2xl"
            >
              {/* Animated Background Elements */}
              <div className="absolute inset-0 overflow-hidden opacity-20">
                <motion.div
                  className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"
                  animate={{
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                  }}
                  transition={{ duration: 20, repeat: Infinity }}
                />
              </div>

              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="inline-block bg-white/20 backdrop-blur-sm p-4 rounded-2xl mb-6"
                >
                  <FaHeart className="w-12 h-12 text-white" />
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-black mb-4">
                  Become a Life Saver
                </h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Register as a donor and join thousands of heroes making a
                  difference
                </p>
                <Link href="/signup">
                  <motion.div
                    whileHover={{ scale: 1.05, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      type="default"
                      size="large"
                      shape="round"
                      icon={<FaTint className="w-5 h-5" />}
                      className="h-16 px-12 font-black text-lg bg-white text-red-500 hover:bg-gray-50 border-0 shadow-2xl"
                    >
                      Register as Donor
                    </Button>
                  </motion.div>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
