"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { event } from "@/lib/analytics";
import {
  Mail,
  Phone,
  //   MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Calendar,
} from "lucide-react";
import Card from "./ui/Card";
import Button from "./ui/Button";
import Badge from "./Badge";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    content: "info@dataflowsolutions.se",
    description: "Skicka oss ett meddelande så svarar vi inom 24 timmar.",
    action: () => window.open("mailto:info@dataflowsolutions.se"),
  },
  {
    icon: Phone,
    title: "Telefon",
    content: "+46 72 877 53 59",
    description: "Ring oss alla dagar i veckan under bestämda tider.",
  },
  //   {
  //     icon: MapPin,
  //     title: "Kontor",
  //     content: "Stockholm, Sverige",
  //     description: "Vi arbetar främst digitalt men möts gärna på vårt kontor",
  //     action: () => window.open("https://maps.google.com"),
  //   },
  {
    icon: Calendar,
    title: "Boka möte",
    content: "Kostnadsfri konsultation",
    description: "Boka en 30-minuters kostnadsfri diskussion om ditt projekt.",
    action: () =>
      window.open("https://calendly.com/admin-dataflowsolutions-mupp/30min"),
  },
];

export default function ModernContact() {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name) return toast.error("Var vänlig ange ditt namn.");
    if (!formData.email)
      return toast.error("Var vänlig ange din e-postadress.");
    if (!formData.message)
      return toast.error("Var vänlig ange ditt meddelande.");

    setIsSubmitting(true);
    setSubmitStatus("idle");

    const templateParams = {
      name: formData.name,
      title: formData.email,
      message: formData.message,
      company: formData.company,
      phone: formData.phone,
    };

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
      });

      setSubmitStatus("success");
      toast.success("Ditt meddelande har skickats framgångsrikt!");

      // Track form submission in Google Analytics
      event({
        action: "form_submit",
        category: "Contact",
        label: "Contact Form",
        value: 1,
      });

      // Reset success status after 3 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 3000);
    } catch {
      setSubmitStatus("error");
      toast.error(
        "Misslyckades med att skicka meddelandet. Försök igen senare."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 lg:py-32 bg-background relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute text-[#dbe9ff] top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge text="Kontakt" variant="primary" size="lg" className="mb-6" />

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Låt oss skapa något
            <span className="gradient-text"> extraordinärt tillsammans</span>
          </h2>

          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Har du ett spännande projekt i åtanke? Vi älskar att höra om nya
            utmaningar och diskutera hur vi kan hjälpa dig att förverkliga dina
            digitala visioner.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card variant="elevated" className="p-8">
              <h3 className="text-2xl font-bold text-text-primary mb-6">
                Berätta om ditt projekt
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-text-primary mb-2"
                    >
                      Namn *
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-text-primary transition-colors duration-200"
                      placeholder="Ditt fullständiga namn"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-text-primary mb-2"
                    >
                      E-post *
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-text-primary transition-colors duration-200"
                      placeholder="din@email.se"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-text-primary mb-2"
                  >
                    Företag
                  </label>
                  <input
                    type="text"
                    name="company"
                    id="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-text-primary transition-colors duration-200"
                    placeholder="Ditt företag (valfritt)"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-text-primary mb-2"
                  >
                    Telefonnummer
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-text-primary transition-colors duration-200"
                    placeholder="Ditt telefonnummer (valfritt)"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-text-primary mb-2"
                  >
                    Meddelande *
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-text-primary transition-colors duration-200 resize-none"
                    placeholder="Berätta mer om ditt projekt, dina mål och utmaningar..."
                  />
                </div>

                <Button
                  type="submit"
                  variant={submitStatus === "success" ? "outline" : "gradient"}
                  size="lg"
                  isLoading={isSubmitting}
                  disabled={submitStatus === "success"}
                  className="w-full cursor-pointer"
                  rightIcon={
                    submitStatus === "success" ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : submitStatus === "error" ? (
                      <AlertCircle className="w-5 h-5" />
                    ) : (
                      <Send className="w-5 h-5" />
                    )
                  }
                >
                  {submitStatus === "success"
                    ? "Meddelande skickat!"
                    : submitStatus === "error"
                    ? "Försök igen"
                    : isSubmitting
                    ? "Skickar..."
                    : "Skicka meddelande"}
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <Card
                    variant="glass"
                    className="p-6 hover-glow cursor-pointer"
                    hover
                    onClick={info.action}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-text-primary mb-1">
                          {info.title}
                        </h4>
                        <p className="text-primary font-medium mb-2">
                          {info.content}
                        </p>
                        <p className="text-text-secondary text-sm">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Office Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <Card variant="elevated" className="p-6">
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 text-primary mr-3" />
                  <h4 className="text-lg font-semibold text-text-primary">
                    Öppettider (för telefonsamtal)
                  </h4>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Måndag - Fredag</span>
                    <span className="text-text-primary">07:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Lördag</span>
                    <span className="text-text-primary">10:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Söndag</span>
                    <span className="text-text-primary">10:00 - 18:00</span>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
