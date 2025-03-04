import { motion } from "framer-motion";
import { SiGithub, SiLinkedin, SiGitter } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="relative bg-accent/5 py-12 mt-20">
      {/* Circuit Pattern Background */}
      <div className="absolute inset-0 -z-10">
        <svg width="100%" height="100%" className="opacity-5">
          <defs>
            <pattern id="circuit-footer" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <path
                d="M10 0 L10 50 M20 0 L20 50 M30 0 L30 50 M40 0 L40 50 M0 10 L50 10 M0 20 L50 20 M0 30 L50 30 M0 40 L50 40"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-primary"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-footer)" />
        </svg>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-red-500 text-transparent bg-clip-text">
              Portfolio.
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center text-sm text-muted-foreground"
          >
            <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
            <p>Designed and built with ❤️</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center md:justify-end space-x-6"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <SiGithub className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <SiLinkedin className="w-6 h-6" />
            </a>
            <a
              href="https://gitter.im"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <SiGitter className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}