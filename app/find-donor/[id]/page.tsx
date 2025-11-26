import { Button } from "antd";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FaArrowLeft,
  FaEnvelope,
  FaLocationArrow,
  FaMapMarkerAlt,
  FaMars,
  FaPhone,
  FaStar,
  FaVenus,
} from "react-icons/fa";
import { mockDonors } from "../mock-donors";

interface DonorProfileProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function DonorProfilePage({ params }: DonorProfileProps) {
  const { id } = await params;
  const donor = mockDonors.find((item) => item.id === id);

  if (!donor) {
    notFound();
  }

  const highlights = [
    { label: "Total Donations", value: `${donor?.totalDonations || 0}` },
    { label: "Last Donation", value: donor?.lastDonation },
    { label: "Distance", value: donor?.distance },
  ];

  const genderIcon = donor?.gender === "female" ? (
    <FaVenus className="w-12 h-12" />
  ) : (
    <FaMars className="w-12 h-12" />
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-red-50 to-white">
      <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-red-500 mb-1">Donor insight</p>
            <h1 className="text-3xl md:text-4xl font-black text-gray-900">Profile of {donor?.name}</h1>
          </div>
          <Link
            href="/find-donor"
            className="flex items-center gap-1 text-sm font-semibold text-red-500 hover:underline"
          >
            <FaArrowLeft className="w-4 h-4" />
            Back to Donors
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
          <div className="relative overflow-hidden rounded-3xl border border-white/50 bg-gradient-to-br from-red-500 to-pink-500 p-8 text-white shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.2),_transparent_45%)]" />
            <div className="relative space-y-5">
              <div className="relative mx-auto h-36 w-36 overflow-hidden rounded-full border-4 border-white shadow-2xl">
                <div className="flex h-full w-full items-center justify-center bg-white/10 text-white text-2xl">
                  {genderIcon}
                </div>
              </div>
              <div className="text-center space-y-1">
                <p className="text-sm uppercase tracking-widest text-white/70">Blood Type</p>
                <h2 className="text-4xl font-black">{donor?.bloodType}</h2>
                <p className="text-sm text-white/80">
                  {donor?.location} · {donor?.city}
                </p>
              </div>

              <div className="space-y-3 text-center">
                <div className="flex items-center justify-center gap-2">
                  <FaStar className="w-4 h-4 text-yellow-300" />
                  <span className="text-sm uppercase tracking-[0.3em] text-white/80">Trusted</span>
                </div>
                <div className="text-3xl font-bold">{donor?.rating.toFixed(1)}</div>
                <p className="text-xs text-white/70">Average donor rating</p>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between space-x-4">
              <span className="text-xs tracking-[0.3em] text-white/70">Status</span>
              <span className={`rounded-full px-4 py-1 text-sm font-semibold ${donor?.available ? "bg-white/20 text-white" : "bg-white/40 text-red-500"}`}>
                {donor?.available ? "Available" : "Temporarily Unavailable"}
              </span>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-gray-200 bg-white/80 p-6 shadow-lg backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.4em] text-gray-500">Medical Snapshot</p>
                  <h3 className="text-2xl font-black text-gray-900">Vital stats</h3>
                </div>
                <span className="text-xs font-semibold text-red-500">Verified</span>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {highlights.map((item) => (
                  <div key={item.label} className="rounded-2xl bg-gray-50 p-4 text-center">
                    <p className="text-xs uppercase tracking-wide text-gray-400">{item.label}</p>
                    <p className="text-lg font-bold text-gray-900 mt-2">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-gray-200 bg-white/90 p-6 shadow-lg">
                <h4 className="text-lg font-bold text-gray-900">Contact & Connect</h4>
                <p className="mt-4 text-sm text-gray-600">
                  Reach out via secured communication channels. We mask personal data, so calls and emails connect you directly in moments.
                </p>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <FaPhone className="w-4 h-4 text-red-500" />
                    <span>{donor?.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <FaEnvelope className="w-4 h-4 text-red-500" />
                    <span>{donor?.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <FaMapMarkerAlt className="w-4 h-4 text-red-500" />
                    <span>{donor?.city}</span>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button
                    type="primary"
                    size="large"
                    className="rounded-full px-6 font-semibold"
                    href={`tel:${donor?.phone?.replace(/[^0-9+]/g, "")}`}
                  >
                    Call Donor
                  </Button>
                  <Button
                    size="large"
                    className="rounded-full border border-red-300 text-red-600 px-6 font-semibold hover:bg-red-50"
                    href={`mailto:${donor?.email}`}
                  >
                    Email Donor
                  </Button>
                </div>
              </div>

              <div className="rounded-3xl border border-gray-200 bg-white/90 p-6 shadow-lg space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-bold text-gray-900">Availability</h4>
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-red-500">Live</span>
                </div>
                <p className="text-sm text-gray-600">
                  Last donation was {donor?.lastDonation}. The donor is{" "}
                  <span className="font-semibold text-red-500">
                    {donor?.available ? "ready to give" : "currently unavailable"}
                  </span>{" "}
                  due to scheduling or medical guidance.
                </p>
                <div className="flex gap-3 flex-wrap">
                  <Button
                    href="/signup"
                    className="rounded-2xl border border-red-500 px-5 py-2 text-red-500 font-semibold"
                  >
                    Become a Donor
                  </Button>
                  <Button
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-gray-200 px-5 py-2 text-gray-700 font-semibold"
                  >
                    View Nearest Center
                  </Button>
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-gray-200 bg-white/90 p-6 shadow-lg">
              <h4 className="text-lg font-bold text-gray-900">Donor Details</h4>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-gray-100 bg-gray-50 px-4 py-3 text-sm font-semibold text-gray-700">
                  Gender
                  <p className="text-xl font-black text-gray-900 mt-1">
                    {donor?.gender}
                  </p>
                </div>
                <div className="rounded-2xl border border-gray-100 bg-gray-50 px-4 py-3 text-sm font-semibold text-gray-700">
                  Weight
                  <p className="text-xl font-black text-gray-900 mt-1">
                    {donor?.weightKg} kg
                  </p>
                </div>
                <div className="rounded-2xl border border-gray-100 bg-gray-50 px-4 py-3 text-sm font-semibold text-gray-700">
                  Last Donation
                  <p className="text-xl font-black text-gray-900 mt-1">
                    {donor?.lastDonation}
                  </p>
                </div>
                <div className="rounded-2xl border border-gray-100 bg-gray-50 px-4 py-3 text-sm font-semibold text-gray-700">
                  Total Donations
                  <p className="text-xl font-black text-gray-900 mt-1">
                    {donor?.totalDonations}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
