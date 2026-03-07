import { useState } from "react";
import { Send, Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import ScrollReveal from "./ScrollReveal";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "Thank you for reaching out. I'll get back to you soon." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 max-w-4xl">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-display font-bold mb-4 text-gradient inline-block">
              {t("contact.title")}
            </h2>
            <p className="text-muted-foreground">{t("contact.subtitle")}</p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-5 gap-10">
          <ScrollReveal delay={0.1} className="md:col-span-3">
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 sm:p-8 space-y-5">
              <div>
                <label className="text-sm font-medium mb-2 block">{t("contact.name")}</label>
                <Input
                  required
                  placeholder={t("contact.namePlaceholder")}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="rounded-xl"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">{t("contact.email")}</label>
                <Input
                  type="email"
                  required
                  placeholder={t("contact.emailPlaceholder")}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="rounded-xl"
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">{t("contact.message")}</label>
                <Textarea
                  required
                  placeholder={t("contact.messagePlaceholder")}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="rounded-xl min-h-[120px]"
                />
              </div>
              <Button type="submit" className="w-full rounded-xl glow-blue-hover transition-all duration-300">
                <Send className="h-4 w-4 mr-2" />
                {t("contact.send")}
              </Button>
            </form>
          </ScrollReveal>

          <ScrollReveal delay={0.2} direction="right" className="md:col-span-2">
            <div className="flex flex-col gap-4 h-full justify-center">
              {[
                { icon: Mail, label: "lucasmateus.dasilva@outlook.com", href: "mailto:lucasmateus.dasilva@outlook.com" },
                { icon: Github, label: "GitHub", href: "https://github.com" },
                { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/lucas-mateus-b8abaa30b/" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card rounded-2xl p-4 flex items-center gap-4 glow-blue-hover transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="p-2.5 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <link.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{link.label}</span>
                </a>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
