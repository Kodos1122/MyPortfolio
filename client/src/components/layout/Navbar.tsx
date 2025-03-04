import { Link } from "wouter";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contacts", label: "Contacts" },
];

export default function Navbar() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.querySelector(sectionId);
    if (section) {
      const navHeight = 64; // height of navbar (h-16 = 64px)
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold text-primary bg-gradient-to-r from-blue-500 to-red-500 text-transparent bg-clip-text"
        >
          Portfolio.
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="hidden md:flex space-x-6"
        >
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                "relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0",
                "after:bg-primary after:transition-all hover:after:w-full"
              )}
            >
              {item.label}
            </a>
          ))}
        </motion.div>
      </div>
    </nav>
  );
}