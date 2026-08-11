import { motion } from "framer-motion";
import { IconType } from "react-icons";

interface ServiceCardProps {
  icon: IconType;
  title: string;
  description: string;
  color?: string;
  index?: number;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  color = "#D4AF37",
  index = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="group relative bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-yellow-500/30 shadow-sm hover:shadow-xl transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-amber-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative">
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
          style={{ background: `${color}20` }}
        >
          <Icon className="text-2xl" style={{ color }} />
        </div>
        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-gray-500 leading-relaxed">{description}</p>
        <div className="mt-4 flex items-center text-sm text-gray-500 group-hover:text-[#D4AF37] transition-colors">
          Learn more
          <svg
            className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}
