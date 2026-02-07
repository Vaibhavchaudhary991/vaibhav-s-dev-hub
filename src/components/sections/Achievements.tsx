import { Trophy, Target, Star, Flame } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem, scaleIn } from "@/components/AnimatedSection";

const Achievements = () => {
  const achievements = [
    {
      icon: Target,
      title: "200+ Problems",
      description: "Solved on LeetCode",
      highlight: "100+ Day Streak",
    },
    {
      icon: Trophy,
      title: "100+ Problems",
      description: "Solved on HackerRank",
      highlight: "Consistent Performer",
    },
    {
      icon: Star,
      title: "5-Star Badge",
      description: "Python on HackerRank",
      highlight: "Gold Level",
    },
  ];

  const stats = [
    { value: "300+", label: "Total Problems" },
    { value: "100+", label: "Day Streak" },
    { value: "5⭐", label: "HackerRank" },
    { value: "2+", label: "Years Coding" },
  ];

  return (
    <section id="achievements" className="py-20 md:py-32">
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
            <p className="text-primary font-mono text-sm mb-2">04. Achievements</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Problem Solving Journey
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </motion.div>

          {/* Achievement cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="group p-6 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                  className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform"
                >
                  <achievement.icon className="h-8 w-8 text-primary" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-1">{achievement.title}</h3>
                <p className="text-muted-foreground mb-3">{achievement.description}</p>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                  <Flame className="h-3 w-3" />
                  {achievement.highlight}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={scaleIn}
            custom={0.3}
            className="mt-12 p-6 rounded-xl border border-border/50 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5"
          >
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
            >
              {stats.map((stat, index) => (
                <motion.div key={index} variants={staggerItem}>
                  <motion.p
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                    className="text-3xl font-bold text-primary"
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
