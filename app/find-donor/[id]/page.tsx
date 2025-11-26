import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  FaArrowLeft,
  FaEnvelope,
  FaLocationArrow,
  FaMapMarkerAlt,
  FaPhone,
  FaStar,
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

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-red-50/20 to-pink-50/20">
      <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4 mb-12">
          <Link
            href="/find-donor"
            className="flex items-center gap-2 text-sm font-semibold text-red-500 hover:underline"
          >
            <FaArrowLeft className="w-4 h-4" />
            Back to Donors
          </Link>
          <span className="text-xs uppercase tracking-wider text-gray-400">
            Profile
          </span>
        </div>

        <div className="bg-white/90 backdrop-blur-xl rounded-3xl border border-white/70 shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-3">
            <div className="lg:col-span-1 relative p-8 bg-linear-to-br from-red-500 to-pink-500 text-white flex flex-col items-center gap-4">
              <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <Image
                  src={donor?.image || ""}
                  alt={donor?.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <p className="text-sm uppercase tracking-widest text-red-100">
                  Blood Type
                </p>
                <h2 className="text-4xl font-black">{donor?.bloodType}</h2>
              </div>
              <div className="text-center space-y-1">
                <p className="text-xl font-bold">{donor?.name}</p>
                <p className="text-sm text-red-100">{donor?.location}</p>
              </div>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <FaStar className="w-4 h-4 text-yellow-300" />
                <span>{donor?.rating.toFixed(1)} rating</span>
              </div>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <FaLocationArrow className="w-4 h-4" />
                <span>{donor?.distance}</span>
              </div>
            </div>

            <div className="lg:col-span-2 p-8 space-y-8">
              <div className="flex flex-col gap-2">
                <h3 className="text-3xl font-black text-gray-900">
                  Connect with {donor?.name}
                </h3>
                <p className="text-gray-600 max-w-2xl">
                  Verified donor located in {donor?.city}. Availability is{" "}
                  {donor?.available ? "open" : "limited"}, reach out below to
                  coordinate.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-4">
                {highlights.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-gray-100 bg-white p-4 shadow transition-transform duration-200 hover:-translate-y-1"
                  >
                    <p className="text-xs text-gray-500 uppercase tracking-wide">
                      {item.label}
                    </p>
                    <p className="text-lg font-bold text-gray-900">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-gray-100 rounded-2xl p-6 space-y-4 bg-white">
                  <h4 className="text-lg font-semibold text-gray-900">
                    Contact Info
                  </h4>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <FaPhone className="w-4 h-4 text-red-500" />
                    <span>{donor?.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <FaEnvelope className="w-4 h-4 text-red-500" />
                    <span>{donor?.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <FaMapMarkerAlt className="w-4 h-4 text-red-500" />
                    <span>{donor?.city}</span>
                  </div>
                  <div className="flex flex-col gap-3">
                    <Button
                      type="primary"
                      size="large"
                      block
                      href={`tel:${donor?.phone?.replace(/[^0-9+]/g, "")}`}
                      className="rounded-xl font-bold"
                    >
                      Call Donor
                    </Button>
                    <Button
                      type="default"
                      size="large"
                      block
                      href={`mailto:${donor?.email}`}
                      className="rounded-xl font-bold border-2 border-red-500 text-red-500"
                    >
                      Email Donor
                    </Button>
                  </div>
                </div>

                <div className="border border-gray-100 rounded-2xl p-6 space-y-4 bg-white">
                  <h4 className="text-lg font-semibold text-gray-900">
                    Availability
                  </h4>
                  <p className="text-sm text-gray-600">
                    Last donation was {donor?.lastDonation}. The donor is
                    currently{" "}
                    <span className="font-semibold text-green-600">
                      {donor?.available ? "Available" : "Unavailable"}
                    </span>
                    .
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
