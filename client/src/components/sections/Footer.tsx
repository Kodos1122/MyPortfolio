import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <h3 className="text-lg font-bold mb-4">Portfolio</h3>
            <p className="text-muted-foreground">
              A showcase of my work and skills as a developer and designer.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a></li>
              <li><a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">Skills</a></li>
              <li><a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</a></li>
              <li><a href="#contacts" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <FaGithub size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <FaTwitter size={24} />
              </a>
            </div>
          </div>
        </motion.div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}