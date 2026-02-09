import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, FileText } from "lucide-react";
import { motion, Variants } from "framer-motion";
import profilePhoto from "@/assets/profile-photo.jpg";

const easeOut: [number, number, number, number] = [0.25, 0.4, 0.25, 1];

const Hero = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  const socialVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        delay: 0.8 + i * 0.1,
        ease: easeOut,
      },
    }),
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/80" />

      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: easeOut }}
            className="relative flex-shrink-0"
          >
            <div className="relative group">
              <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-2 border-primary/40">
                <img
                  src={profilePhoto}
                  alt="Vaibhav Chaudhary"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="max-w-2xl text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Hi, I'm <span className="text-gradient">Vaibhav Chaudhary</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-muted-foreground mb-4 font-mono"
            >
              Full Stack Developer • DSA Enthusiast
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Button size="lg" asChild>
                <a href="#projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </motion.div>

            {/* Social links */}
            <div className="flex gap-4">
              {[
                {
                  href: "https://github.com/Vaibhavchaudhary991",
                  icon: Github,
                  label: "GitHub",
                },
                {
                  href: "https://www.linkedin.com/in/vaibhav-chaudhary-195766284",
                  icon: Linkedin,
                  label: "LinkedIn",
                },
                {
                  href: "mailto:vaibhavchaudhary9912@gmail.com",
                  icon: Mail,
                  label: "Email",
                },
              ].map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className="p-3 rounded-full border"
                  custom={i}
                  variants={socialVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
