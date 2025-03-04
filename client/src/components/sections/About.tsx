import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">Who am I?</h3>
                <p className="text-muted-foreground">
                  I am a passionate developer and designer with expertise in creating beautiful, 
                  functional websites and applications. With years of experience in both frontend 
                  and backend development, I bring ideas to life through clean code and intuitive design.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4">What I do?</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>✓ Web Development</li>
                  <li>✓ UI/UX Design</li>
                  <li>✓ Mobile Applications</li>
                  <li>✓ Technical Consulting</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
