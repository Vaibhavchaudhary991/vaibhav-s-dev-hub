import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Github, Linkedin, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem, slideInLeft, slideInRight } from "@/components/AnimatedSection";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "vaibhavchaudhary9912@gmail.com",
      href: "mailto:vaibhavchaudhary9912@gmail.com",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Vaibhavchaudhary991",
      href: "https://github.com/Vaibhavchaudhary991",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "vaibhav-chaudhary",
      href: "www.linkedin.com/in/vaibhav-chaudhary-195766284",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Punjab, India",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/30">
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
            <p className="text-primary font-mono text-sm mb-2">07. Contact</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get In Touch
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              I'm currently looking for new opportunities. Whether you have a question
              or just want to say hi, I'll get back to you as soon as possible!
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mt-4" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInLeft}
              className="space-y-6"
            >
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="space-y-4"
              >
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={staggerItem}
                    whileHover={{ x: 10, transition: { duration: 0.2 } }}
                    className="flex items-center gap-4 p-4 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="font-medium hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Contact form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={slideInRight}
            >
              <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-card/50 border-border/50 focus:border-primary/50"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-card/50 border-border/50 focus:border-primary/50"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-card/50 border-border/50 focus:border-primary/50 resize-none"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
