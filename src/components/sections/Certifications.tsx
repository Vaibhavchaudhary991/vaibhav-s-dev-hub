import { Award, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/components/AnimatedSection";

const Certifications = () => {
  const certifications = [
    {
      title: "Full Stack Web Development",
      issuer: "Cipher Schools",
      description: "Comprehensive training in modern full-stack development technologies and best practices.",
      year: "2024",
      link: "https://www.cipherschools.com/certificate/preview?id=689d823f94c24c5a4c60a9b8",
    },
    {
      title: "Git & GitHub",
      issuer: "Cipher Schools",
      description: "Version control mastery with Git and collaborative development using GitHub.",
      year: "2024",
      link: "https://www.cipherschools.com/certificate/preview?id=689c7dde94c24c5a4c60a613",
    },
    {
      title: "Privacy and Security in Online Social Media",
      issuer: "NPTEL",
      description: "Understanding security principles and privacy considerations in social media platforms.",
      year: "2024",
      link: "https://drive.google.com/file/d/1NThsk5U8tF78twUdav8-mhXwFjMj3tbL/view",
    },
    {
      title: "Build Generative AI Apps and Solutions with No-Code Tools",
      issuer: "Udemy",
      description: "Issued to Vaibhav Chaudhary. Completed August 31, 2025.",
      year: "2025",
      link: "https://ude.my/UC-c5248cdd-a3dc-4d74-9896-43ae1f903813",
    },
    {
      title: "Master Generative AI & Generative AI Tools (ChatGPT & More)",
      issuer: "Udemy • Instructor: Saad A",
      description: "15 total hours of comprehensive generative AI training. Completed September 8, 2025.",
      year: "2025",
      link: "https://ude.my/UC-c5248cdd-a3dc-4d74-9896-43ae1f903813",
    },
  ];

  return (
    <section id="certifications" className="py-20 md:py-32 bg-muted/30">
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
            <p className="text-primary font-mono text-sm mb-2">05. Certifications</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Professional Credentials
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </motion.div>

          {/* Certification cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                    className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                  >
                    <Award className="h-6 w-6 text-primary" />
                  </motion.div>
                  <span className="text-sm font-mono text-muted-foreground">
                    {cert.year}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="text-primary/80 text-sm font-medium mb-3">
                  {cert.issuer}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                  {cert.description}
                </p>
                {cert.link && (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                  >
                    <ExternalLink className="h-3 w-3" />
                    View Credential
                  </a>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
