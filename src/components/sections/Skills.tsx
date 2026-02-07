import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/components/AnimatedSection";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["C++", "Java", "JavaScript", "C", "PHP", "TypeScript", "Python"],
      color: "primary",
    },
    {
      title: "Frameworks & Libraries",
      skills: ["Next.js", "React.js", "Node.js", "Express.js", "Tailwind CSS"],
      color: "accent",
    },
    {
      title: "Databases",
      skills: ["MongoDB", "MySQL", "Supabase", "PostgreSQL"],
      color: "secondary",
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "Postman", "VS Code", "Vercel", "Figma"],
      color: "muted",
    },
  ];

  const softSkills = [
    "Problem Solving",
    "Team Collaboration",
    "Communication",
    "Time Management",
    "Adaptability",
    "Critical Thinking",
  ];

  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <p className="text-primary font-mono text-sm mb-2">02. Skills</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Technologies I work with
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </motion.div>

          {/* Technical skills */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6 mb-12"
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {category.title}
                </h3>
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                  className="flex flex-wrap gap-2"
                >
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      variants={staggerItem}
                    >
                      <Badge
                        variant="secondary"
                        className="px-3 py-1.5 text-sm font-medium hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Soft skills */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            custom={0.2}
            className="p-6 rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm"
          >
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Soft Skills
            </h3>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="flex flex-wrap gap-3"
            >
              {softSkills.map((skill, index) => (
                <motion.span
                  key={index}
                  variants={staggerItem}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 rounded-full border border-border/50 bg-background/50 text-sm font-medium hover:border-accent/50 hover:text-accent transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
