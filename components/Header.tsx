"use client";

import { getCurrentUser, isAuthenticated, logout } from "@/lib/auth";
import type { MenuProps } from "antd";
import { Button, Dropdown } from "antd";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  FaBars,
  FaChartLine,
  FaCog,
  FaHeart,
  FaSignOutAlt,
  FaTimes,
  FaUser,
} from "react-icons/fa";

export default function Header() {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<{
    email: string;
    name?: string;
    bloodType?: string;
  } | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Check authentication status
  useEffect(() => {
    const checkAuth = () => {
      const authenticated = isAuthenticated();
      setIsLoggedIn(authenticated);
      if (authenticated) {
        setUser(getCurrentUser());
      }
    };

    checkAuth();

    // Listen for storage changes (login/logout in other tabs)
    window.addEventListener("storage", checkAuth);
    return () => window.removeEventListener("storage", checkAuth);
  }, []);

  // User dropdown menu
  const userMenuItems: MenuProps["items"] = [
    {
      key: "profile",
      label: (
        <div className="flex items-center gap-3 py-2">
          <FaUser className="w-4 h-4" />
          <div>
            <div className="font-semibold">{user?.name || "User"}</div>
            <div className="text-xs text-gray-500">{user?.email}</div>
          </div>
        </div>
      ),
    },
    {
      type: "divider",
    },
    {
      key: "dashboard",
      label: <Link href="/dashboard">Dashboard</Link>,
      icon: <FaChartLine className="w-4 h-4" />,
    },
    {
      key: "myprofile",
      label: <Link href="/profile">My Profile</Link>,
      icon: <FaUser className="w-4 h-4" />,
    },
    {
      key: "settings",
      label: "Settings",
      icon: <FaCog className="w-4 h-4" />,
    },
    {
      type: "divider",
    },
    {
      key: "logout",
      label: "Logout",
      icon: <FaSignOutAlt className="w-4 h-4" />,
      danger: true,
      onClick: logout,
    },
  ];

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Find Donor", href: "/find-donor" },
    { label: "Good to Know", href: "/good-to-know" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-2xl border-b border-gray-100 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/">
              <motion.div
                className="flex items-center gap-3 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="relative w-12 h-12">
                  <motion.div
                    className="absolute inset-0 bg-linear-to-r from-red-500 to-pink-500 blur-xl opacity-50"
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <Image
                    src="/logo.svg"
                    alt="BloodBooth logo"
                    width={48}
                    height={48}
                    className="relative z-10 drop-shadow-lg"
                    priority
                  />
                </div>
                <span className="text-3xl font-black bg-linear-to-r from-red-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                  BloodBooth
                </span>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link key={item.label} href={item.href}>
                  <motion.span
                    className={`text-base font-semibold relative group cursor-pointer transition-all ${
                      pathname === item.href
                        ? "text-red-500"
                        : "text-gray-700 hover:text-red-500"
                    }`}
                    whileHover={{ y: -2 }}
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-red-500 to-pink-500 group-hover:w-full transition-all duration-300" />
                  </motion.span>
                </Link>
              ))}

              {/* Auth Buttons */}
              {!isLoggedIn ? (
                <>
                  <Link href="/login">
                    <motion.span
                      whileHover={{ y: -2 }}
                      className="text-gray-700 hover:text-red-500 transition-all font-semibold text-base cursor-pointer inline-block"
                    >
                      Sign In
                    </motion.span>
                  </Link>
                  <Link href="/signup">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.96 }}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 25,
                      }}
                      className="relative group"
                    >
                      <div className="absolute inset-0 bg-linear-to-r from-red-500 to-pink-500 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
                      <Button
                        type="primary"
                        size="large"
                        shape="round"
                        icon={<FaHeart className="w-5 h-5" />}
                        className="relative h-14 px-9 font-bold text-base shadow-lg border-0"
                        style={{
                          background:
                            "linear-gradient(135deg, #dc2626 0%, #e11d48 50%, #ec4899 100%)",
                          color: "#ffffff",
                        }}
                      >
                        Donate
                      </Button>
                    </motion.div>
                  </Link>
                </>
              ) : (
                <div className="flex items-center gap-4">
                  <Dropdown
                    menu={{ items: userMenuItems }}
                    placement="bottomRight"
                    arrow
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="cursor-pointer"
                    >
                      <div className="flex items-center gap-3 px-4 py-2.5 rounded-full hover:bg-white/10 transition-colors">
                        <div className="w-8 h-8 bg-linear-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center">
                          <FaUser className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-semibold text-gray-700">
                          {user?.name?.split(" ")[0] || "User"}
                        </span>
                      </div>
                    </motion.div>
                  </Dropdown>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-3">
              {!isLoggedIn ? (
                <Link href="/login">
                  <Button
                    type="primary"
                    size="large"
                    shape="round"
                    className="font-bold border-0"
                    style={{
                      background:
                        "linear-gradient(135deg, #dc2626 0%, #e11d48 50%, #ec4899 100%)",
                    }}
                  >
                    Sign In
                  </Button>
                </Link>
              ) : (
                <Dropdown
                  menu={{ items: userMenuItems }}
                  placement="bottomRight"
                  arrow
                >
                  <div className="cursor-pointer">
                    <div className="w-10 h-10 bg-linear-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                      <FaUser className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </Dropdown>
              )}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-gray-700 hover:text-red-500 transition-colors"
              >
                {mobileMenuOpen ? (
                  <FaTimes className="w-6 h-6" />
                ) : (
                  <FaBars className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-xl"
          >
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <Link key={item.label} href={item.href}>
                  <div
                    className={`block px-4 py-3 rounded-xl font-semibold transition-all ${
                      pathname === item.href
                        ? "bg-red-50 text-red-500"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </div>
                </Link>
              ))}
              {!isLoggedIn && (
                <Link href="/signup">
                  <div
                    className="block px-4 py-3 rounded-xl font-semibold bg-linear-to-r from-red-500 to-pink-500 text-white text-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Donate
                  </div>
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* Spacer to prevent content from hiding under fixed header */}
      <div className="h-20" />
    </>
  );
}
