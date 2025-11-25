"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button, Input, Select, message, Checkbox } from "antd";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHeadset,
  FaClock,
  FaWhatsapp,
  FaPaperPlane,
} from "react-icons/fa";
import Image from "next/image";

const { TextArea } = Input;

const contactChannels = [
  {
    title: "Emergency Lifeline",
    description: "We route urgent cases to hospitals and verified donors in under 5 minutes.",
    icon: FaHeadset,
    detail: "+1 (888) 527-4453",
    tag: "24/7 Priority",
  },
  {
    title: "Email Concierge",
    description: "Curated donor lists, partnership inquiries, and press relations.",
    icon: FaEnvelope,
    detail: "hello@bloodbooth.org",
    tag: "Responses in <4h",
  },
  {
    title: "Global WhatsApp",
    description: "Encrypted chat with community managers and medical coordinators.",
    icon: FaWhatsapp,
    detail: "+1 (555) 652-9911",
    tag: "Secure Chat",
  },
];

const officeCards = [
  {
    city: "New York HQ",
    address: "45 Hudson Yards, 23rd Floor, NY 10001",
    hours: "Mon - Fri · 9:00 AM - 8:00 PM EST",
  },
  {
    city: "Singapore Studio",
    address: "88 Market Street, Level 35, Singapore 048948",
    hours: "Daily · 10:00 AM - 10:00 PM SGT",
  },
];

export default function ContactPage() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "general",
    message: "",
    updates: true,
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (!formValues.name || !formValues.email || !formValues.message) {
      message.error("Please fill in your name, email, and message.");
      return;
    }

    if (!formValues.email.includes("@")) {
      message.error("Enter a valid email so we can reach you.");
      return;
    }

    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1400));
    message.success("We received your message! Expect a response shortly.");
    setFormValues((prev) => ({ ...prev, message: "" }));
    setSubmitting(false);
  };

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
              <FaPaperPlane className="w-4 h-4" />
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              Let&apos;s orchestrate{" "}
              <span className="bg-gradient-to-r from-red-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                life-saving connections
              </span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              The BloodBooth concierge team works alongside medical coordinators and donor success managers.
              Reach us for emergencies, partnerships, or to showcase your city as a donation hub.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-white/70 border border-white flex items-center justify-center">
                  <FaPhoneAlt className="text-red-500 w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-500 font-bold">Hotline</p>
                  <p className="font-black text-gray-900 text-xl">+1 (888) 527-4453</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-white/70 border border-white flex items-center justify-center">
                  <FaClock className="text-red-500 w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-gray-500 font-bold">Response</p>
                  <p className="font-black text-gray-900 text-xl">&lt; 5 Minutes</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="relative"
          >
            <div className="relative h-[420px] rounded-[32px] overflow-hidden shadow-2xl border border-white/60 bg-white">
              <Image
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80"
                alt="BloodBooth contact team"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-lg rounded-2xl p-4 border border-white/50 max-w-[260px]">
                <p className="text-xs uppercase tracking-[0.3em] text-gray-500 font-bold mb-2">
                  Live Dispatch
                </p>
                <p className="text-2xl font-black text-gray-900">17 coordinators online</p>
                <p className="text-sm text-gray-500 mt-2">
                  Routing donor availability across 14 cities right now.
                </p>
              </div>

              <motion.div
                className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-lg rounded-2xl p-4 border border-white/50"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <p className="text-xs uppercase tracking-[0.3em] text-gray-500 font-bold mb-2">
                  Currently assisting
                </p>
                <div className="text-3xl font-black text-red-500">3 cities</div>
                <p className="text-sm text-gray-500">Lagos · Mumbai · São Paulo</p>
              </motion.div>
            </div>
            <div className="absolute -inset-8 bg-gradient-to-r from-red-500/20 via-pink-500/10 to-transparent blur-3xl -z-10" />
          </motion.div>
        </section>

        {/* Channels */}
        <section className="grid md:grid-cols-3 gap-6">
          {contactChannels.map((channel, index) => (
            <motion.div
              key={channel.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/80 backdrop-blur-xl border border-white/60 rounded-3xl p-6 shadow-lg shadow-red-100/30"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-red-500 to-pink-500 text-white">
                  <channel.icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-red-500 font-bold">{channel.tag}</p>
                  <h3 className="text-xl font-black text-gray-900">{channel.title}</h3>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">{channel.description}</p>
              <p className="text-lg font-semibold text-gray-900">{channel.detail}</p>
            </motion.div>
          ))}
        </section>

        {/* Contact Form */}
        <section className="grid lg:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 bg-white/80 backdrop-blur-xl border border-white/60 rounded-3xl p-8 shadow-xl shadow-red-100/40"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-red-100 text-red-500">
                <FaEnvelope className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-gray-500 font-bold">Send a Message</p>
                <h2 className="text-3xl font-black text-gray-900">Tell us how we can help</h2>
              </div>
            </div>

            <div className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                  <Input
                    size="large"
                    placeholder="Alexa Rivera"
                    value={formValues.name}
                    onChange={(e) => setFormValues((prev) => ({ ...prev, name: e.target.value }))}
                    className="rounded-2xl"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                  <Input
                    size="large"
                    type="email"
                    placeholder="you@example.com"
                    value={formValues.email}
                    onChange={(e) => setFormValues((prev) => ({ ...prev, email: e.target.value }))}
                    className="rounded-2xl"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone (Optional)</label>
                  <Input
                    size="large"
                    placeholder="+1 (555) 123-4567"
                    value={formValues.phone}
                    onChange={(e) => setFormValues((prev) => ({ ...prev, phone: e.target.value }))}
                    className="rounded-2xl"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Inquiry Type</label>
                  <Select
                    size="large"
                    value={formValues.inquiryType}
                    onChange={(value) => setFormValues((prev) => ({ ...prev, inquiryType: value }))}
                    className="w-full rounded-2xl"
                    options={[
                      { label: "General Question", value: "general" },
                      { label: "Emergency Support", value: "emergency" },
                      { label: "Partnerships", value: "partnerships" },
                      { label: "Media / Press", value: "media" },
                    ]}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <TextArea
                  rows={5}
                  placeholder="Share context, cities, timelines, or URLs..."
                  value={formValues.message}
                  onChange={(e) => setFormValues((prev) => ({ ...prev, message: e.target.value }))}
                  className="rounded-2xl"
                />
              </div>

              <Checkbox
                checked={formValues.updates}
                onChange={(e) => setFormValues((prev) => ({ ...prev, updates: e.target.checked }))}
                className="text-sm text-gray-600"
              >
                Notify me about BloodBooth live drives and donor simulations.
              </Checkbox>

              <Button
                type="primary"
                size="large"
                className="h-14 rounded-2xl font-semibold mt-2"
                onClick={handleSubmit}
                loading={submitting}
                block
                style={{
                  background: "linear-gradient(135deg, #dc2626 0%, #e11d48 45%, #ec4899 100%)",
                  border: "none",
                }}
              >
                Send Message
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {officeCards.map((office) => (
              <div
                key={office.city}
                className="bg-white/80 backdrop-blur-xl border border-white/60 rounded-3xl p-6 shadow-lg shadow-red-100/30"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 rounded-2xl bg-red-50 text-red-500">
                    <FaMapMarkerAlt className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.4em] text-gray-500 font-bold">Flagship Studio</p>
                    <h3 className="text-2xl font-black text-gray-900">{office.city}</h3>
                  </div>
                </div>
                <p className="text-gray-600">{office.address}</p>
                <p className="text-sm font-semibold text-gray-500 mt-2">{office.hours}</p>
              </div>
            ))}

            <div className="relative rounded-3xl overflow-hidden border border-white/70 shadow-xl shadow-red-100/40 h-64">
              <Image
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80"
                alt="Map illustration"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/30 to-pink-500/30 mix-blend-multiply" />
              <div className="absolute top-6 left-6 bg-white/85 backdrop-blur-lg rounded-2xl p-4 border border-white/50 max-w-xs">
                <p className="text-xs uppercase tracking-[0.3em] text-gray-500 font-bold">Offline Drives</p>
                <p className="text-lg font-black text-gray-900">68 pop-up donation salons scheduled</p>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}

