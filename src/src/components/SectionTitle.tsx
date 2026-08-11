import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center max-w-3xl mx-auto"
    >
      <div className="w-12 h-1 bg-gradient-to-r from-[#F5D067] to-[#B8860B] mx-auto rounded-full mb-4" />
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
        {title}
      </h2>
      {subtitle && <p className="text-gray-500 text-lg">{subtitle}</p>}
    </motion.div>
  );
}
