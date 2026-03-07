import { useLanguage } from "@/contexts/LanguageContext";
import ScrollReveal from "./ScrollReveal";

const skillCategories = [
  {
    key: "frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML5/CSS3", "React Native"],
  },
  {
    key: "backend",
    skills: ["Python", "Node.js", "SQL", "Firebase", "REST APIs", "GraphQL"],
  },
  {
    key: "tools",
    skills: ["Git", "VS Code", "Figma", "Power BI", "Jira", "Postman"],
  },
  {
    key: "infrastructure",
    skills: ["Vercel", "Docker", "CI/CD", "AWS", "GitHub Actions"],
  },
];

const SkillsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 max-w-5xl">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-12 text-gradient inline-block">
            {t("skills.title")}
          </h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-6">
          {skillCategories.map((cat, i) => (
            <ScrollReveal key={cat.key} delay={i * 0.1}>
              <div className="glass-card rounded-2xl p-6 glow-blue-hover transition-all duration-300 hover:-translate-y-1">
                <h3 className="font-display font-semibold text-primary mb-5 text-sm uppercase tracking-wider">
                  {t(`skills.${cat.key}`)}
                </h3>
                <div className="space-y-3">
                  {cat.skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-3">
                      <div className="h-1.5 flex-1 rounded-full bg-muted overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000"
                          style={{ width: `${70 + Math.random() * 25}%` }}
                        />
                      </div>
                      <span className="text-sm text-muted-foreground min-w-[100px] text-right font-medium">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
