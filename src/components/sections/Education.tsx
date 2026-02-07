import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { fadeInUp } from "@/components/AnimatedSection";

const easeOut: [number, number, number, number] = [0.25, 0.4, 0.25, 1];

const Education = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "Lovely Professional University",
      location: "Punjab, India",
      duration: "2022 - 2026",
      grade: "CGPA: 7.82",
      current: true,
    },
    {
      degree: "Intermediate (12th)",
      institution: "M.D International School",
      location: "India",
      duration: "2020 - 2022",
      grade: "Completed",
      current: false,
    },
    {
      degree: "Matriculation (10th)",
      institution: "M.D International School",
      location: "India",
      duration: "2018 - 2020",
      grade: "Completed",
      current: false,
    },
  ];

  const timelineVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: easeOut,
      },
    },
  };

  return (
    <section id="education" className="py-20 md:py-32">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <p className="text-primary font-mono text-sm mb-2">06. Education</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Academic Background
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={timelineVariants}
            className="relative"
          >
            {/* Vertical line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border/50 md:-translate-x-1/2 origin-top"
            />

            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, type: "spring", stiffness: 300 }}
                  className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background md:-translate-x-1/2 z-10"
                />

                {/* Content */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <motion.div
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className={`p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 ${
                      edu.current ? "border-primary/30" : ""
                    }`}
                  >
                    {edu.current && (
                      <motion.span
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block px-2 py-1 mb-3 text-xs font-medium bg-primary/20 text-primary rounded-full"
                      >
                        Currently Pursuing
                      </motion.span>
                    )}
                    <div className={`flex items-center gap-2 mb-3 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <GraduationCap className="h-5 w-5 text-primary" />
                      <h3 className="text-lg font-semibold">{edu.degree}</h3>
                    </div>
                    <p className="text-primary/80 font-medium mb-2">{edu.institution}</p>
                    <div className={`flex flex-wrap gap-4 text-sm text-muted-foreground ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {edu.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {edu.location}
                      </span>
                    </div>
                    {edu.grade && (
                      <p className="mt-3 text-sm font-medium text-accent">
                        {edu.grade}
                      </p>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
