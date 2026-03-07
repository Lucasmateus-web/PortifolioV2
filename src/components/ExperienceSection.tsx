import { Briefcase } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ScrollReveal from "./ScrollReveal";

const roles = [
  {
    titleKey: "experience.role4.title",
    companyKey: "experience.role4.company",
    periodKey: "experience.role4.period",
    descKey: "experience.role4.desc",
  },
  {
    titleKey: "experience.role1.title",
    companyKey: "experience.role1.company",
    periodKey: "experience.role1.period",
    descKey: "experience.role1.desc",
  },
  {
    titleKey: "experience.role2.title",
    companyKey: "experience.role2.company",
    periodKey: "experience.role2.period",
    descKey: "experience.role2.desc",
  },
  {
    titleKey: "experience.role3.title",
    companyKey: "experience.role3.company",
    periodKey: "experience.role3.period",
    descKey: "experience.role3.desc",
  },
];

const ExperienceSection = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-24 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-12 text-gradient inline-block">
            {t("experience.title")}
          </h2>
        </ScrollReveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border hidden sm:block" />

          <div className="space-y-8">
            {roles.map((role, i) => (
              <ScrollReveal key={role.titleKey} delay={i * 0.15}>
                <div className="flex gap-6 items-start">
                  {/* Timeline dot */}
                  <div className="hidden sm:flex shrink-0 w-10 h-10 rounded-full bg-primary/10 items-center justify-center border-2 border-primary/30 z-10">
                    <Briefcase className="h-4 w-4 text-primary" />
                  </div>

                  <div className="glass-card rounded-2xl p-6 flex-1 glow-blue-hover transition-all duration-300 hover:-translate-y-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-1">
                      <h3 className="font-display font-semibold text-lg">{t(role.titleKey)}</h3>
                      <span className="text-xs text-primary font-medium bg-primary/10 px-3 py-1 rounded-full whitespace-nowrap">
                        {t(role.periodKey)}
                      </span>
                    </div>
                    <p className="text-sm text-primary/80 font-medium mb-3">{t(role.companyKey)}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{t(role.descKey)}</p>
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

export default ExperienceSection;
