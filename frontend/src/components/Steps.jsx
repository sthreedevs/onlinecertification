import { motion } from "framer-motion";

const Steps = ({ title = "How It Works", steps = [] }) => (
  <section className="py-20 px-6 md:px-20 bg-white">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-16">{title}</h2>
      <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-10">
        {steps.map((item, idx) => (
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

export default Steps;