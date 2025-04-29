import { motion } from "framer-motion";
import Steps from "../../components/Steps";
import ServicePagesHeroSection from "../../components/HeroSection/ServicePagesHeroSection";

const SickLeaveCertificatePage = () => {
  return (
    <div>
      <ServicePagesHeroSection
        heading={"Sick Leave Certificate in Hours, Not Days"}
        description={
          "Get doctor-signed sick leave certificates online with quick, confidential service."
        }
        buttonText={"Get Started"}
      />
      <CertificateTypes />
      <WhenToGetSickLeave />
      <CTASection />
      <StepsSection />
    </div>
  );
};

const CertificateTypes = () => {
  const types = [
    {
      title: "Workplace Sick Leave",
      desc: "Get a valid certificate for your employer, signed by a verified doctor.",
      color: "bg-white border-l-4 border-blue-500",
    },
    {
      title: "School/College Leave",
      desc: "Excuse yourself from academic duties with official medical proof.",
      color: "bg-gray-50 border-l-4 border-green-500",
    },
    {
      title: "Travel Cancellation",
      desc: "Cancel trips with a doctor-certified medical reason.",
      color: "bg-white border-l-4 border-yellow-500",
    },
    {
      title: "COVID-19 Sick Leave",
      desc: "Get a certificate for COVID-related absence with proper documentation.",
      color: "bg-gray-50 border-l-4 border-red-500",
    },
    {
      title: "Short-Term Sick Leave",
      desc: "For 1-3 days minor illnesses needing official leave documentation.",
      color: "bg-white border-l-4 border-purple-500",
    },
    {
      title: "Remote Job Sick Note",
      desc: "Need rest while working remotely? Get a valid certificate to notify HR.",
      color: "bg-gray-50 border-l-4 border-pink-500",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-20 bg-slate-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          Types of Sick Leave Certificates
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {types.map((item, idx) => (
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
      Need a Sick Leave Certificate Now?
    </motion.h2>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      className="text-lg mb-8 max-w-xl mx-auto"
    >
      Talk to a doctor online and get your certificate delivered to your inbox.
    </motion.p>
    <motion.button
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      viewport={{ once: true }}
      className="px-8 py-3 rounded-full bg-white text-violet-700 font-semibold shadow-xl hover:bg-gray-100 transition hover:scale-105"
    >
      Book Consultation
    </motion.button>
  </section>
);

const StepsSection = () => {
  const steps = [
    {
      step: "1",
      title: "Fill Form",
      desc: "Share your basic details and medical reason.",
    },
    {
      step: "2",
      title: "Doctor Review",
      desc: "Consult with a licensed medical professional.",
    },
    {
      step: "3",
      title: "Get Certificate",
      desc: "Receive a digitally signed sick leave certificate.",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-20 bg-white">
      <Steps steps={steps}/>
    </section>
  );
};

const WhenToGetSickLeave = () => (
  <section className="py-20 px-6 md:px-20 bg-white">
    <div className="max-w-6xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8"
      >
        When Do You Need a Sick Leave Certificate?
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-sm md:text-lg text-gray-500 text-center max-w-4xl mx-auto"
      >
        Feeling under the weather? Prioritize your health by staying home. Rest
        is essential for recovery, especially if you have a contagious illness.
        While taking sick leave can be stressful, especially when dealing with
        the hassle of doctor’s appointments, there’s a simpler solution. Consult
        a doctor online and get your medical sick leave certificate in minutes.
        Save time and energy, and focus on getting well.
      </motion.p>
    </div>
  </section>
);

export default SickLeaveCertificatePage;
