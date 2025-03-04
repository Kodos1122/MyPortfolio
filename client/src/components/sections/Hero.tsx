import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const roles = ["Developer", "Designer", "Software Engineer"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setText(text.slice(0, -1));
        if (text === "") {
          setIsDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      } else {
        setText(currentRole.slice(0, text.length + 1));
        if (text === currentRole) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section id="home" className="min-h-screen pt-17 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="./attached_assets/IMG_3224.jpg" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-800/30"></div>
      </div>
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-background/60 backdrop-blur-xs rounded-full p-12 md:p-15 relative"
        >
          <motion.h1 
            className="text-3xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hello, my name is
          </motion.h1>

          <motion.h2
            className="text-1xl md:text-6xl font-bold bg-gradient-to-r from-blue-500 to-red-500 text-transparent bg-clip-text mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Laith Hasan
          </motion.h2>

          <motion.div
            className="text-2xl md:text-3xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            and I'm a <span className="font-bold">{text}</span>
            <span className="animate-blink">|</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Button
  size="lg"
  className="bg-primary hover:bg-primary/90 text-white"
  onClick={() => {
    const link = document.createElement("a");
    link.href = "/Laith_Hasan-Full_Stack_Developer.pdf"; // Adjust the path if needed
    link.download = "Laith_Hasan-Full_Stack_Developer.pdf"; // Set the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }}
>
  Hire Me
</Button>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}