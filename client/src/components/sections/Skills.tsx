import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";

const skills = [
  // Frontend Development
  { name: "React", level: 90 },
  { name: "Vue.js", level: 85 },
  { name: "Nuxt.js", level: 80 },
  { name: "Next.js", level: 85 },
  { name: "HTML/CSS", level: 95 },
  { name: "JavaScript", level: 90 },
  { name: "TypeScript", level: 80 },
  { name: "UI/UX Design", level: 85 },

  
  // Backend Development
  { name: "Node.js", level: 85 },
  { name: "Express.js", level: 82 },
  { name: "MongoDB", level: 78 },
  { name: "PostgreSQL", level: 72 },
  { name: "Firebase", level: 78 },
];




export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My Skills
        </motion.h2>

        <div className="max-w-2xl mx-auto space-y-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-muted-foreground">{skill.level}%</span>
              </div>
              <Progress
                value={skill.level}
                className="h-2"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
