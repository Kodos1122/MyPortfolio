import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "GlamHub",
    description: "A full-stack e-commerce solution with React and Node.js.",
    image: "/glamhub.png", // Adjust the filename based on your actual image
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Static Website Template",
    description: "Analytics dashboard for social media management",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5",
    tags: ["Vue.js", "D3.js", "Firebase"],
  },
  {
    title: "Capstone Project",
    description: "Modern portfolio website with animations",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
    tags: ["React", "Framer Motion", "Tailwind"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-accent/5">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
