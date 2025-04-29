import { motion } from "framer-motion";
import Steps from "../../components/Steps";
import ServicePagesHeroSection from "../../components/HeroSection/ServicePagesHeroSection";

const FitnessCertificatePage = () => {
  return (
    <div>
      <ServicePagesHeroSection
        heading={"Get Your Fitness Certificate Online in Minutes"}
        description={
          "Consult a certified doctor and receive a verified medical fitness certificate digitally."
        }
        buttonText={"Get Get Certificate"}
      />
      <WhenToGetFitness />
      <CertificateBenefits />
      <CTASection />
      <StepsSection />
    </div>
  );
};

const WhenToGetFitness = () => (
  <section className="py-20 px-6 md:px-20 bg-white">
    <div className="max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8"
      >
        When Do You Need a Fitness Certificate?
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-sm md:text-lg text-gray-500 text-center max-w-4xl mx-auto"
      >
        Whether you're applying for a new job, renewing a driving license, or
        traveling internationally, a fitness certificate issued by a verified
        doctor is often mandatory. Instead of visiting clinics, consult a doctor
        online and get a valid certificate delivered directly to your inbox,
        saving your time and effort.
      </motion.p>
    </div>
  </section>
);

const CertificateBenefits = () => {
  const benefits = [
    {
      title: "Employment Requirement",
      desc: "Needed to prove you're medically fit for specific roles.",
      color: "bg-white border-l-4 border-blue-500",
    },
    {
      title: "Driving License Fitness",
      desc: "Get clearance for new or renewed license applications.",
      color: "bg-gray-50 border-l-4 border-green-500",
    },
    {
      title: "Travel Fit-to-Fly",
      desc: "Required for traveling, especially after recent illnesses.",
      color: "bg-white border-l-4 border-yellow-500",
    },
    {
      title: "Pre-Surgery Fitness",
      desc: "Ensure you're healthy enough to undergo medical procedures.",
      color: "bg-gray-50 border-l-4 border-red-500",
    },
    {
      title: "Sports & Gym Clearance",
      desc: "Get authorized to participate in physical training or competitions.",
      color: "bg-white border-l-4 border-purple-500",
    },
    {
      title: "College/University Admission",
      desc: "Medical proof often required at the time of admission.",
      color: "bg-gray-50 border-l-4 border-pink-500",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-20 bg-slate-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          Who Needs a Fitness Certificate?
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {benefits.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className={`p-6 ${item.color} rounded-2xl shadow hover:shadow-2xl transition text-left`}
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {item.title}
              </h3>
              <p className="mt-3 text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => (
  <section className="py-20 bg-gradient-to-r from-indigo-500 to-violet-700 text-white text-center px-6 md:px-20">
    <motion.h2
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-bold mb-4"
    >
      Need a Fitness Certificate Urgently?
    </motion.h2>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      className="text-lg mb-8 max-w-xl mx-auto"
    >
      Talk to a doctor online and receive your certificate the same day.
    </motion.p>
    <motion.button
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      viewport={{ once: true }}
      className="px-8 py-3 rounded-full bg-white text-violet-700 font-semibold shadow-xl hover:bg-gray-100 transition hover:scale-105"
    >
      Book Now
    </motion.button>
  </section>
);

const StepsSection = () => {
  const steps = [
    {
      step: "1",
      title: "Fill Basic Info",
      desc: "Tell us why you need the certificate.",
    },
    {
      step: "2",
      title: "Doctor Consultation",
      desc: "Connect with a certified physician online.",
    },
    {
      step: "3",
      title: "Receive Certificate",
      desc: "Get your digitally signed fitness certificate via email.",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-20 bg-white">
      <Steps steps={steps} />
    </section>
  );
};

export default FitnessCertificatePage;
