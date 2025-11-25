"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button, Progress, Steps } from "antd";
import {
  FaHeartbeat,
  FaTint,
  FaUsers,
  FaHandHoldingHeart,
  FaChartLine,
  FaMapMarkerAlt,
  FaAward,
} from "react-icons/fa";

const stats = [
  { label: "Lives Touched", value: "125K+", icon: FaHeartbeat },
  { label: "Active Donors", value: "48K+", icon: FaUsers },
  { label: "Global Cities", value: "62", icon: FaMapMarkerAlt },
  { label: "Emergency Drives", value: "360+", icon: FaHandHoldingHeart },
];

const milestones = [
  {
    year: "2019",
    title: "The Spark",
    description:
      "BloodBooth launched as a grassroots initiative after witnessing critical blood shortages in coastal cities.",
  },
  {
    year: "2021",
    title: "Nationwide Network",
    description:
      "Expanded to 30+ cities with AI-powered donor matching, live availability, and emergency routing.",
  },
  {
    year: "2023",
    title: "Global Impact",
    description:
      "Formed partnerships with leading hospitals and NGOs, enabling 24/7 operations across three continents.",
  },
  {
    year: "Today",
    title: "Future-Ready",
    description:
      "Building predictive donation patterns, immersive education, and VR-powered onboarding experiences.",
  },
];

const values = [
  {
    title: "Radical Transparency",
    body: "Every donation, every request, and every delivery is traceable. Families see their impact in real time.",
  },
  {
    title: "Human-First Technology",
    body: "We blend data, design, and empathy. AI tools amplify compassion—they never replace it.",
  },
  {
    title: "Community Obsession",
    body: "Local heroes, clinic partners, and micro-volunteers shape every feature we launch.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-red-50/30 to-pink-50/30 pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Hero */}
        <section className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 text-red-500 font-semibold shadow-lg shadow-red-200/50 w-max">
              <FaAward className="w-4 h-4" />
              Our Story
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
              Designing the future of{" "}
              <span className="bg-gradient-to-r from-red-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                compassionate donation
              </span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              BloodBooth is an ultra-modern platform built to unite donors, recipients, hospitals, and
              emergency responders through a single transparent ecosystem. We merge design thinking,
              cinematic storytelling, and real-time data to keep every city transfusion-ready.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/find-donor">
                <Button
                  type="primary"
                  size="large"
                  className="h-14 px-10 rounded-full font-semibold"
                  style={{
                    background: "linear-gradient(135deg, #dc2626 0%, #e11d48 45%, #ec4899 100%)",
                    border: "none",
                  }}
                >
                  Explore Donor Network
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button size="large" className="h-14 px-10 rounded-full font-semibold border-red-200 text-red-500">
                  Meet the Platform
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-[480px] rounded-[32px] overflow-hidden shadow-2xl border border-white/60 bg-white">
              <Image
                src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&q=80"
                alt="BloodBooth mission"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

              <motion.div
                className="absolute top-6 left-6 bg-white/90 backdrop-blur-lg rounded-2xl p-4 border border-white/50"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-gradient-to-br from-red-500 to-pink-500 text-white">
                    <FaTint className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-gray-500">Today</p>
                    <p className="text-lg font-black text-gray-900">137 donations matched</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-lg rounded-2xl p-6 border border-white/50 w-64"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <p className="text-sm font-semibold text-gray-500 mb-2 flex items-center gap-2">
                  <FaChartLine className="text-red-500" />
                  Response Readiness
                </p>
                <Progress percent={92} size="small" strokeColor={{ from: "#dc2626", to: "#ec4899" }} showInfo={false} />
                <p className="mt-3 text-sm text-gray-600">
                  AI monitors live requests, predicts shortages, and nudges nearby donors.
                </p>
              </motion.div>
            </div>
            <div className="absolute -inset-8 bg-gradient-to-r from-red-500/20 via-pink-500/10 to-transparent blur-3xl -z-10" />
          </motion.div>
        </section>

        {/* Stats */}
        <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map(({ label, value, icon: Icon }) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white/75 backdrop-blur-xl border border-white/60 rounded-2xl p-6 shadow-lg shadow-red-100/30"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-red-500 to-pink-500 text-white">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-semibold">{label}</p>
                  <p className="text-3xl font-black text-gray-900">{value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </section>

        {/* Mission */}
        <section className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/80 backdrop-blur-xl border border-white/60 rounded-3xl p-10 shadow-xl shadow-red-100/30 space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-red-100 text-red-500">
                <FaHandHoldingHeart className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-widest text-gray-500 font-bold">Mission</p>
                <h2 className="text-3xl font-black text-gray-900">Human-centered blood infrastructure</h2>
              </div>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              We invest in empathetic product design, cinematic education, and verifiable logistics so that
              every donor interaction feels luxurious, every recipient feels seen, and every hospital partner
              trusts the data we share.
            </p>

            <div className="grid sm:grid-cols-3 gap-6">
              {values.map((value) => (
                <div key={value.title} className="p-4 rounded-2xl border border-red-100/70 bg-gradient-to-br from-white via-red-50/20 to-white">
                  <p className="text-sm font-bold text-red-500 uppercase tracking-wide">{value.title}</p>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">{value.body}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-full"
          >
            <div className="h-full rounded-3xl overflow-hidden shadow-2xl border border-white/60 bg-white">
              <Image
                src="https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?w=800&q=80"
                alt="Community impact"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-pink-500/30" />
            </div>
          </motion.div>
        </section>

        {/* Timeline */}
        <section className="space-y-8">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-white text-red-500 border border-red-100">
              <FaChartLine className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-gray-500 font-semibold">Milestones</p>
              <h2 className="text-3xl font-black text-gray-900">The BloodBooth timeline</h2>
            </div>
          </div>

          <div className="bg-white/85 backdrop-blur-xl rounded-3xl border border-white/70 p-6 sm:p-10 shadow-xl shadow-red-100/40">
            <Steps
              progressDot
              direction="vertical"
              current={milestones.length - 1}
              items={milestones.map((milestone, index) => ({
                title: (
                  <div className="flex flex-col">
                    <span className="text-xs font-bold uppercase tracking-[0.4em] text-red-500">
                      {milestone.year}
                    </span>
                    <span className="text-2xl font-black text-gray-900">{milestone.title}</span>
                  </div>
                ),
                description: (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="text-gray-600 leading-relaxed"
                  >
                    {milestone.description}
                  </motion.p>
                ),
              }))}
            />
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden rounded-3xl border border-white/60 bg-gradient-to-r from-red-500 via-pink-500 to-red-600 text-white p-10 shadow-2xl">
          <motion.div
            className="absolute inset-0 opacity-60"
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 15, repeat: Infinity }}
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.2), transparent 50%), radial-gradient(circle at 80% 0%, rgba(255,255,255,0.15), transparent 40%), radial-gradient(circle at 50% 80%, rgba(255,255,255,0.2), transparent 45%)",
              backgroundSize: "120% 120%",
            }}
          />
          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-4 max-w-2xl">
              <p className="text-sm uppercase tracking-[0.4em] font-semibold">Join the movement</p>
              <h3 className="text-3xl md:text-4xl font-black leading-tight">
                We&apos;re building the most trusted, cinematic, and compassionate blood donation brand.
              </h3>
              <p className="text-white/80 text-lg">
                Donate, volunteer, fundraise, or integrate your hospital network. We will help you launch impact in
                under 48 hours.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/signup">
                <Button
                  type="primary"
                  size="large"
                  className="h-14 px-10 rounded-full font-semibold border-0 bg-white text-red-600"
                >
                  Become a Donor
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="large"
                  className="h-14 px-10 rounded-full font-semibold text-white backdrop-blur-sm"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.15)",
                    borderColor: "rgba(255,255,255,0.6)",
                  }}
                >
                  Partner with Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

