import React from "react";
import { motion } from "framer-motion";
import HeroLeftRight from "../components/common/HeroLeftRight";

const steps = [
  {
    title: "Get a Medical Certificate",
    description:
      "We provide authentic medical certificates directly from registered doctors, ensuring a smooth and verified process.",
  },
  {
    title: "No Consultation Needed",
    description:
      "Skip lengthy appointments. Simply fill out your details and get certified quickly and securely.",
  },
  {
    title: "Digital Delivery",
    description:
      "Receive your certificate directly via email or WhatsApp — fast, secure, and hassle-free.",
  },
];

const AboutUs = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white overflow-hidden py-10">
        <HeroLeftRight
          title="Fast. Reliable. Certified."
          description="Get your Medical Certificate online — anytime, anywhere in India"
          src="https://media.istockphoto.com/id/1363738635/vector/patient-is-holding-medical-certificate-physician-is-signing-it.jpg?s=612x612&w=0&k=20&c=dj33LSwYBUYDWHKzy28VIC6EqzMXxBdjNsbcG8uyguQ="
        />
      </section>

      {/* Our Story Section */}
      <section className="py-10 bg-gray-100">
        <HeroLeftRight
          left={true}
          title="Our Journey"
          description="From a small startup to a trusted name in medical documentation, our journey has been fueled by innovation and dedication."
          src="https://www.shutterstock.com/image-vector/business-leadership-team-businesspeople-paper-260nw-2012467934.jpg"
        />
      </section>

      {/* Mission & Vision Section */}
      <section className="py-10 bg-white">
        <HeroLeftRight
          title="Our Values"
          description="Integrity, transparency, and customer satisfaction are at the core of everything we do."
          src="https://media.istockphoto.com/id/625061004/photo/compliance.jpg?s=1024x1024&w=is&k=20&c=LYw1XXDnwjJCQYQmAOStKhm-mdGwU1wGiF3R1MRSESs="
        />
      </section>

      {/* How We Work Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-4xl font-bold text-gray-900"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            How We Work
          </motion.h2>
          <p className="mt-4 text-lg text-gray-600">
            Simple, fast, and verified — that's our promise to you.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-md rounded-lg p-8 text-center hover:shadow-2xl transition"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 + index * 0.2 }}
              >
                <h3 className="text-xl font-semibold text-blue-900">
                  {step.title}
                </h3>
                <p className="mt-4 text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
