"use client";

import { motion } from "framer-motion";
import { Button } from "antd";
import { FaAngleRight, FaHeartbeat, FaTint, FaUserShield } from "react-icons/fa";
import Link from "next/link";

const cards = [
  {
    title: "Eligibility & Health",
    description:
      "Most donors must be at least 17 years old (16 with parental consent) and in good general health. A quick questionnaire and mini-physical ensure safety.",
    icon: <FaHeartbeat className="w-6 h-6 text-white" />,
    accent: "from-red-500 to-pink-500",
  },
  {
    title: "What to Bring",
    description:
      "Bring a valid ID, hydrate well, and eat a nutritious meal before donating. Wearing comfortable clothing speeds up the process.",
    icon: <FaTint className="w-6 h-6 text-white" />,
    accent: "from-rose-500 to-orange-500",
  },
  {
    title: "Frequency",
    description:
      "Whole-blood donors can give once every 56 days, while power red donors wait 112 days. Platelet and plasma schedules vary, so plan ahead.",
    icon: <FaUserShield className="w-6 h-6 text-white" />,
    accent: "from-red-600 to-rose-500",
  },
];

export default function GoodToKnowPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-red-50 to-pink-50">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 pointer-events-none bg-[radial-gradient(circle_at_top,_rgba(239,68,68,0.25),_transparent_45%)]" />
        <div className="max-w-6xl mx-auto px-4 py-20 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="uppercase tracking-[0.4em] text-sm font-semibold text-red-500 mb-4">
                Good to Know
              </p>
              <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight">
                Empower your donation journey with quick facts and trusted tips.
              </h1>
              <p className="mt-6 text-lg text-gray-600 max-w-2xl">
                Whether you're a first-time donor or a seasoned hero, these reminders
                keep you prepared, confident, and comfortable before, during, and
                after you give.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/signup">
                  <Button
                    type="primary"
                    size="large"
                    className="rounded-full px-8 shadow-xl"
                  >
                    Register to Donate
                  </Button>
                </Link>
                <Link href="/find-donor">
                  <Button
                    size="large"
                    className="rounded-full px-8 border border-red-300 text-red-600 shadow-sm hover:bg-red-50"
                  >
                    <span className="flex items-center gap-2">
                      <span>Find Donors</span>
                      <FaAngleRight className="w-4 h-4" />
                    </span>
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-[2rem] border border-white/60 shadow-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-pink-500 opacity-80" />
              <div className="relative z-10 p-10 md:p-12 text-white space-y-4">
                <p className="text-sm uppercase tracking-[0.4em]">Did you know?</p>
                <h2 className="text-3xl font-black">Every 2 seconds</h2>
                <p className="text-lg text-white/80">
                  someone in the U.S. needs blood. Your regular donation keeps local
                  hospitals ready for emergencies and life-saving surgeries.
                </p>
                <div className="flex gap-4">
                  <div>
                    <p className="text-3xl font-black">1</p>
                    <p className="text-sm uppercase tracking-[0.3em] text-white/70">
                      Donation = 3 Lives
                    </p>
                  </div>
                  <div>
                    <p className="text-3xl font-black">24/7</p>
                    <p className="text-sm uppercase tracking-[0.3em] text-white/70">
                      Support
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-3 gap-6"
          >
            {cards.map((card) => (
              <div
                key={card.title}
                className="rounded-3xl border border-gray-200 bg-white/80 p-8 shadow-lg hover:-translate-y-1 transition-transform"
              >
                <div className={`inline-flex p-3 rounded-2xl bg-gradient-to-br ${card.accent} mb-4`}>
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 via-white to-pink-50">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-3xl border border-white/70 bg-white/80 p-10 shadow-2xl backdrop-blur-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-100/70 via-transparent to-pink-200/70 opacity-70" />
            <div className="relative space-y-6">
              <div>
                <p className="text-sm uppercase tracking-[0.4em] text-red-500 mb-2">Important</p>
                <h2 className="text-3xl font-black text-gray-900 mb-3">
                  Who should pause or delay donating
                </h2>
                <p className="text-gray-700">
                  The most rigorous ethical standards rely on physiological and epidemiological criteria. These deferments guard both the donor’s health and the integrity of the blood supply.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <p className="text-lg font-semibold text-gray-900">Hematologic & Immune Factors</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 leading-relaxed">
                    <li>
                      <strong>Anemia or low hemoglobin</strong> (Hgb &lt;12.5 g/dL women, &lt;13.0 g/dL men) signals insufficient erythropoietic recovery; donating further would worsen hypoxia.
                    </li>
                    <li>
                      <strong>Recent live vaccines</strong> (e.g., yellow fever, measles) are deferred for 2–4 weeks so attenuated organisms have cleared from plasma.
                    </li>
                    <li>
                      <strong>Bleeding or autoimmune disorders</strong> such as von Willebrand disease or active lupus flares increase procedural risk and require hematology clearance.
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <p className="text-lg font-semibold text-gray-900">Infections, Meds, & Travel</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 leading-relaxed">
                    <li>
                      <strong>Symptomatic infections</strong> with fever, respiratory, or gastrointestinal symptoms trigger a minimum 48-hour wait so systemic inflammation resolves.
                    </li>
                    <li>
                      <strong>Certain medications</strong> (isotretinoin, blood thinners, specific antimalarials) remain bioactive in plasma and need washout periods—some last months.
                    </li>
                    <li>
                      <strong>Travel to malaria-endemic regions</strong> leads to 3-month deferrals to exclude low-level parasitemia even when asymptomatic.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-lg font-semibold text-gray-900">Permanent disqualifiers</p>
                <p className="text-gray-700 leading-relaxed">
                  Individuals with confirmed transfusion-transmissible infections (HIV, hepatitis B/C, HTLV), prion-associated neurologic diagnoses, or a history of systemic malignancies are deferred indefinitely. Always consult your local blood center for nuanced cases.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

