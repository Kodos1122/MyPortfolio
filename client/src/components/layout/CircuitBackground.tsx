import { motion } from "framer-motion";

const CircuitBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <svg width="100%" height="100%" className="opacity-10">
        <defs>
          <pattern id="circuit" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
            <path
              d="M10 0 L10 50 M20 0 L20 50 M30 0 L30 50 M40 0 L40 50 M0 10 L50 10 M0 20 L50 20 M0 30 L50 30 M0 40 L50 40"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-primary"
            />
          </pattern>
        </defs>
        <motion.rect
          width="100%"
          height="100%"
          fill="url(#circuit)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </svg>
      
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-red-500/10" />
    </div>
  );
};

export default CircuitBackground;
