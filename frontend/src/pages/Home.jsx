import { motion } from "framer-motion";

const HeroSection = () => (
  <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 px-6 md:px-20 text-center">
    <motion.h1
      initial={{ opacity: 0, y: -80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight"
    >
      Get Instant <span className="text-indigo-600">Medical Certificates</span>
    </motion.h1>
    <motion.p
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      className="mt-6 text-xl md:text-2xl text-gray-700 max-w-2xl"
    >
      Consult online with verified doctors and receive your certificate within
      hours.
    </motion.p>
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="mt-8 px-10 py-4 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-lg transition-all"
    >
      Book Now
    </motion.button>
  </section>
);

const WhyChooseUs = () => (
  <section className="py-20 px-6 md:px-20 bg-white">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-16">Why Choose Us</h2>
      <div className="grid md:grid-cols-3 gap-10">
        {[
          {
            title: "Verified Doctors",
            desc: "Licensed professionals for consultations.",
          },
          {
            title: "Quick Turnaround",
            desc: "Certificates delivered within hours.",
          },
          {
            title: "100% Confidential",
            desc: "Your information is safe with us.",
          },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ rotate: 5 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="p-8 bg-indigo-50 rounded-3xl shadow-2xl transform hover:scale-105 transition"
          >
            <h3 className="text-2xl font-bold text-indigo-700">{item.title}</h3>
            <p className="mt-4 text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Services = () => (
  <section className="py-20 px-6 md:px-20 bg-gray-100">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-16">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          "Sick Leave Certificate",
          "Fitness Certificate",
          "Medical Consultation",
        ].map((service, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: idx * 0.3 }}
            viewport={{ once: true }}
            className="bg-white bg-opacity-60 backdrop-blur-md p-10 rounded-3xl shadow-lg hover:shadow-2xl transition"
          >
            <h4 className="text-2xl font-bold text-gray-800">{service}</h4>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-20 px-6 md:px-20 bg-gradient-to-r from-pink-100 to-pink-200">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-16">Testimonials</h2>
      <div className="grid md:grid-cols-3 gap-10">
        {[
          "Best experience! Got my certificate the same day.",
          "Smooth consultation and quick response!",
          "Very professional doctors and support team.",
        ].map((quote, idx) => (
          <motion.div
            key={idx}
            whileHover={{ rotate: "-3deg" }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="p-8 bg-white rounded-[30px] shadow-xl border-2 border-pink-200 hover:shadow-2xl transition"
          >
            <p className="italic text-gray-700">"{quote}"</p>
            <div className="mt-6 text-gray-500 font-medium">- Happy Client</div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Steps = () => (
  <section className="py-20 px-6 md:px-20 bg-white">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-16">How It Works</h2>
      <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-10">
        {[
          {
            step: "1",
            title: "Fill Form",
            desc: "Provide your details and health concern.",
          },
          {
            step: "2",
            title: "Consult Doctor",
            desc: "Online consultation with our experts.",
          },
          {
            step: "3",
            title: "Receive Certificate",
            desc: "Get certified instantly via email.",
          },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.3 }}
            viewport={{ once: true }}
            className="relative bg-indigo-50 p-8 rounded-2xl shadow-lg w-full text-center md:w-1/3"
          >
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 flex items-center justify-center bg-indigo-600 text-white text-2xl font-bold rounded-full shadow-md">
              {item.step}
            </div>
            <h4 className="mt-10 text-xl font-bold text-gray-800">
              {item.title}
            </h4>
            <p className="mt-4 text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// FAQ Section
const FAQ = () => (
  <section className="py-20 px-6 md:px-20 bg-white">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-gray-900 mb-10">
        Frequently Asked Questions
      </h2>
      <div className="space-y-6 text-left">
        {[
          {
            q: "How fast do I get my certificate?",
            a: "Usually within a few hours after consultation!",
          },
          {
            q: "Are your doctors verified?",
            a: "Absolutely. All our doctors are licensed professionals.",
          },
          { q: "Is the process confidential?", a: "100% private and secure." },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: true }}
            className="p-4 border-b border-gray-200"
          >
            <h4 className="font-semibold text-lg text-gray-800">{item.q}</h4>
            <p className="mt-2 text-gray-600">{item.a}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Home = () => (
  <div>
    <HeroSection />
    <WhyChooseUs />
    <Services />
    <Steps />
    <Testimonials />
    <FAQ />
  </div>
);

export default Home;
