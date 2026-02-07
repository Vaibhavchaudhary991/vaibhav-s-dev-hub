import { Code2, Lightbulb, Target, Users } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem, slideInLeft, slideInRight } from "@/components/AnimatedSection";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Full Stack Developer",
      description: "Building end-to-end web applications with modern technologies",
    },
    {
      icon: Target,
      title: "Problem Solver",
      description: "200+ problems solved across LeetCode and HackerRank",
    },
    {
      icon: Lightbulb,
      title: "Quick Learner",
      description: "Constantly exploring new technologies and best practices",
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborative mindset with strong communication skills",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
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
            <p className="text-primary font-mono text-sm mb-2">01. About Me</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get to know me
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInLeft}
              className="space-y-6"
            >
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a <span className="text-foreground font-medium">Computer Science Engineering</span> student 
                at <span className="text-primary">Lovely Professional University</span>, passionate about 
                building innovative web solutions that make a difference.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey in tech started with a curiosity for how things work on the internet. 
                This led me to explore <span className="text-foreground font-medium">Full Stack Development</span>, 
                where I love crafting seamless user experiences backed by robust server architectures.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not coding, you'll find me solving algorithmic challenges, contributing to 
                open-source projects, or exploring the latest in web technologies. I believe in 
                writing clean, maintainable code and continuously improving my craft.
              </p>
              <div className="pt-4">
                <p className="text-sm text-muted-foreground font-mono">
                  📍 Punjab, India
                </p>
              </div>
            </motion.div>

            {/* Highlight cards */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid sm:grid-cols-2 gap-4"
            >
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:bg-card transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
