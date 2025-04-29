import { motion } from "framer-motion";

const HeroLeftRight = ({ title, description, src, left }) => {
  return (
    <div
      className={`flex flex-col-reverse ${
        left ? "md:flex-row-reverse" : "md:flex-row"
      } gap-10 items-center justify-between px-6 md:px-20 py-16 md:py-32 max-w-7xl mx-auto`}
    >
      {/* Text Section */}
      <motion.div
        className={`flex-[0.6] space-y-6 text-center md:text-left ${
          left ? "md:pl-16" : "md:pr-16"
        }`}
        initial={{ opacity: 0, x: left ? 100 : -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          type: "spring",
          stiffness: 60,
        }}
      >
        <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
          {title}
        </h1>
        <p className="text-base md:text-lg leading-relaxed tracking-normal">
          {description}
        </p>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="flex-[0.4] w-full max-w-md"
        initial={{ opacity: 0, x: left ? -100 : 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
          type: "spring",
          stiffness: 60,
        }}
      >
        <img
          src={src}
          alt={title}
          className="w-full h-auto object-cover rounded-2xl shadow-2xl"
        />
      </motion.div>
    </div>
  );
};

export default HeroLeftRight;
