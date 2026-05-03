"use client";

import { Button, Card } from "@heroui/react";

const plans = [
  {
    title: "Basic",
    price: "$19",
    desc: "Perfect for beginners",
    features: ["Access to 5 courses", "Basic support", "Community access"],
  },
  {
    title: "Pro",
    price: "$49",
    desc: "Most popular plan",
    features: [
      "Access to all courses",
      "Priority support",
      "Download resources",
    ],
    popular: true,
  },
  {
    title: "Premium",
    price: "$99",
    desc: "For serious learners",
    features: ["All Pro features", "1-on-1 mentorship", "Career guidance"],
  },
];

const PricingPage = () => {
  return (
    <section className="min-h-screen py-20 bg-linear-to-b from-slate-900 via-slate-950 to-black">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white">
            Choose Your Plan
          </h1>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Flexible pricing plans designed for learners at every stage.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`p-8 rounded-2xl border backdrop-blur-xl transition-all duration-300 
              ${
                plan.popular
                  ? "border-[#5271FF] bg-white/10 scale-105 shadow-xl shadow-[#5271FF]/20"
                  : "border-white/10 bg-white/5 hover:border-[#5271FF]/40"
              }`}
            >
              {/* Title */}
              <h2 className="text-xl font-semibold text-white mb-2">
                {plan.title}
              </h2>

              {/* Price */}
              <h3 className="text-3xl font-bold text-white mb-2">
                {plan.price}
                <span className="text-sm text-gray-400"> /month</span>
              </h3>

              <p className="text-gray-400 text-sm mb-6">{plan.desc}</p>

              {/* Features */}
              <ul className="space-y-3 text-sm text-gray-300 mb-8">
                {plan.features.map((f, i) => (
                  <li key={i}>✔ {f}</li>
                ))}
              </ul>

              {/* Button */}
              <Button
                className={`w-full text-white rounded-xl font-medium ${
                  plan.popular
                    ? "bg-[#5271FF] text-white hover:bg-[#3f5ce0] shadow-lg shadow-[#5271FF]/30"
                    : "border border-[#5271FF] text-[#5271FF] hover:bg-[#5271FF] hover:text-white"
                }`}
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPage;
