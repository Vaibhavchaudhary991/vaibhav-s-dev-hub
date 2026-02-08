import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Folder } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/components/AnimatedSection";

const Projects = () => {
  const projects = [
    {
      title: "Somana",
      description:
        "AI-powered platform with storytelling, blogs, movie & music recommendations, authentication, and user-generated content. A comprehensive entertainment and content creation hub.",
      tech: ["Next.js", "React", "MongoDB", "Supabase", "REST APIs"],
      github: "https://github.com/Vaibhavchaudhary991",
      live: null,
      featured: true,
    },
    {
      title: "Child Labour Reporting System",
      description:
        "Secure reporting system with image upload, location tracking, verification workflow, and real-time status updates. Built to help combat child labor through technology.",
      tech: ["Next.js", "React", "Express.js", "MongoDB", "Tailwind CSS"],
      github: "https://github.com/Vaibhavchaudhary991",
      live: null,
      featured: true,
    },
    {
      title: "USEPOPCORN – Movie Watchlist Application",
      description:
        "React-based movie discovery and watchlist app enabling real-time search, detailed views, and personalized watchlist management. Features user rating, watch-time calculation, and rating analytics with optimized performance using React hooks and custom hooks.",
      tech: ["React.js", "REST APIs", "Custom Hooks"],
      github: "https://github.com/Vaibhavchaudhary991",
      live: null,
      featured: true,
    },
    {
      title: "ChaloSeekhein – Rural Education Platform",
      description:
        "Complete rural education platform with structured lessons, smart attendance, quizzes, teacher tools, and community-based learning. Responsive frontend with real-time data handling via AJAX.",
      tech: ["HTML", "Tailwind CSS", "JavaScript", "jQuery", "PHP", "MySQL"],
      github: "https://github.com/Vaibhavchaudhary991",
      live: null,
      featured: true,
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30">
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
            <p className="text-primary font-mono text-sm mb-2">03. Projects</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Work
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </motion.div>

          {/* Project cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid gap-8"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative p-6 md:p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500"
              >
                {/* Featured badge */}
                {project.featured && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="absolute -top-3 left-6"
                  >
                    <Badge className="bg-primary text-primary-foreground">
                      Featured
                    </Badge>
                  </motion.div>
                )}

                <div className="flex flex-col md:flex-row gap-6">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <motion.div
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                      className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                    >
                      <Folder className="h-8 w-8 text-primary" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="font-mono text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          GitHub Repo
                        </a>
                      </Button>
                      {project.live && (
                        <Button variant="ghost" size="sm" asChild>
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* More projects link */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            custom={0.4}
            className="text-center mt-12"
          >
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://github.com/Vaibhavchaudhary991"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4 mr-2" />
                View More on GitHub
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
