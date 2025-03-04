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
                I am a passionate developer and designer who thrives on crafting innovative, dynamic, and highly functional digital experiences. With a strong background in both frontend and backend development, I specialize in building modular and scalable applications that seamlessly blend aesthetics with performance. 
                My journey in development has been driven by a deep curiosity for technology and a commitment to writing clean, efficient, and maintainable code. I take pride in transforming ideas into intuitive and visually compelling solutions that not only meet technical requirements but also enhance user experience. Whether it's designing pixel-perfect interfaces or architecting robust backend systems.
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
<li>✓ Mobile Application Development</li>
<li>✓ Technical Consulting</li>
<li>✓ Full-Stack Development</li>
<li>✓ API Design & Integration</li>
<li>✓ Database Management</li>
<li>✓ Cloud Computing & Deployment</li>
<li>✓ Performance Optimization</li>
<li>✓ SEO & Digital Marketing Strategies</li>
<li>✓ AI & Machine Learning Integration</li>
<li>✓ E-Commerce Solutions</li>
<li>✓ DevOps & CI/CD Pipelines</li>

                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
