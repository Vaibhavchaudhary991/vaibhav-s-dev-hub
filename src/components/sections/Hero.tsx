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
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/80" />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-slow"
        style={{ animationDelay: '1s' }}
      />
      
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
              {/* Subtle gradient background */}
              <div className="absolute -inset-1 bg-gradient-to-b from-primary/20 via-primary/10 to-transparent rounded-2xl blur-xl opacity-60" />
              {/* Main image container - professional rounded rectangle */}
              <div className="relative w-56 h-72 md:w-64 md:h-80 lg:w-72 lg:h-96 rounded-2xl overflow-hidden border border-border/40 bg-card/30 backdrop-blur-sm shadow-xl">
                <img 
                  src={profilePhoto} 
                  alt="Vaibhav Chaudhary" 
                  className="w-full h-full object-cover object-top grayscale-[10%] contrast-[1.02]"
                />
                {/* Subtle overlay for professional look */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
              </div>
              {/* Elegant accent line */}
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-primary/60 to-transparent rounded-full" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            className="max-w-2xl text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Status badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-border/50 bg-card/50 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm text-muted-foreground">Available for opportunities</span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            >
              Hi, I'm{" "}
              <span className="text-gradient">Vaibhav Chaudhary</span>
            </motion.h1>
            
            {/* Role */}
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-muted-foreground mb-4 font-mono"
            >
              Full Stack Developer • DSA Enthusiast
            </motion.p>
            
            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground/80 max-w-2xl mb-8 leading-relaxed"
            >
              I build scalable full-stack web applications and solve real-world problems using code.
              Passionate about creating impactful digital experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <Button variant="default" size="lg" className="group" asChild>
                <a href="#projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-2 h-4 w-4" />
                  Check CV
                </a>
              </Button>
            </motion.div>

            {/* Social links */}
            <div className="flex justify-center lg:justify-start gap-4">
              {[
                { href: "https://github.com/Vaibhavchaudhary991", icon: Github, label: "GitHub" },
                { href: "https://linkedin.com/in/vaibhav-chaudhary", icon: Linkedin, label: "LinkedIn" },
                { href: "mailto:vaibhavchaudhary9912@gmail.com", icon: Mail, label: "Email" },
              ].map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className="p-3 rounded-full border border-border/50 bg-card/50 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                  aria-label={social.label}
                  custom={i}
                  variants={socialVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2 animate-scroll" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
