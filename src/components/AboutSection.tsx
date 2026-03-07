import { Layers, Eye, Lightbulb } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ScrollReveal from "./ScrollReveal";

const highlights = [
  { icon: Layers, titleKey: "about.highlight1.title", descKey: "about.highlight1.desc" },
  { icon: Eye, titleKey: "about.highlight2.title", descKey: "about.highlight2.desc" },
  { icon: Lightbulb, titleKey: "about.highlight3.title", descKey: "about.highlight3.desc" },
];

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 max-w-5xl">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-8 text-gradient inline-block">
            {t("about.title")}
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-5 gap-12">
          <div className="md:col-span-3 space-y-5">
            <ScrollReveal delay={0.1}>
              <p className="text-muted-foreground leading-relaxed">{t("about.p1")}</p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-muted-foreground leading-relaxed">{t("about.p2")}</p>
            </ScrollReveal>
          </div>

          <div className="md:col-span-2 space-y-4">
            {highlights.map((h, i) => (
              <ScrollReveal key={h.titleKey} delay={0.1 * (i + 1)} direction="right">
                <div className="glass-card rounded-2xl p-5 glow-blue-hover transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-xl bg-primary/10">
                      <h.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-sm mb-1">{t(h.titleKey)}</h3>
                      <p className="text-xs text-muted-foreground">{t(h.descKey)}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
