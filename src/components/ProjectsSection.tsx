import { ExternalLink, BookOpen, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    titleKey: "projects.supplier.title",
    descKey: "projects.supplier.desc",
    caseStudyKey: "projects.supplier.caseStudy",
    techs: ["React", "Next.js", "Python", "SQL", "Firebase"],
    status: "production" as const,
    liveUrl: "https://portaldosfornecedores-engeman.vercel.app/",
  },
  {
    titleKey: "projects.dashboard.title",
    descKey: "projects.dashboard.desc",
    caseStudyKey: "projects.dashboard.caseStudy",
    techs: ["React", "Power BI", "SQL"],
    status: "production" as const,
    liveUrl: "https://verde-floresta.vercel.app/",
  },
  {
    titleKey: "projects.fafen.title",
    descKey: "projects.fafen.desc",
    caseStudyKey: "projects.fafen.caseStudy",
    techs: ["React", "JavaScript", "SQL"],
    status: "production" as const,
    liveUrl: "https://aquac-metrics.vercel.app/",
  },
  {
    titleKey: "projects.logix.title",
    descKey: "projects.logix.desc",
    caseStudyKey: "projects.logix.caseStudy",
    techs: ["React", "Python", "AI APIs"],
    status: "development" as const,
    liveUrl: "https://logix-4bnk.onrender.com",
  },
  {
    titleKey: "projects.gliclog.title",
    descKey: "projects.gliclog.desc",
    caseStudyKey: "projects.gliclog.caseStudy",
    techs: ["React Native", "Firebase", "SQL"],
    status: "development" as const,
    liveUrl: "#",
  },
];

const ProjectsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-24 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-4 max-w-6xl">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-display font-bold mb-12 text-gradient inline-block">
            {t("projects.title")}
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ScrollReveal key={project.titleKey} delay={i * 0.1}>
              <div className="glass-card rounded-2xl p-6 h-full flex flex-col glow-blue-hover transition-all duration-300 hover:-translate-y-2 group">
                {/* Status Badge */}
                <div className="mb-4">
                  <Badge
                    variant={project.status === "production" ? "default" : "secondary"}
                    className="text-xs rounded-full"
                  >
                    {t(`projects.${project.status}`)}
                  </Badge>
                </div>

                {/* Title & Description */}
                <h3 className="font-display font-semibold text-lg mb-3 group-hover:text-primary transition-colors">
                  {t(project.titleKey)}
                </h3>
                <p className="text-sm text-muted-foreground mb-5 flex-1 leading-relaxed">
                  {t(project.descKey)}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-2 mt-auto">
                  <Button size="sm" variant="outline" className="rounded-xl text-xs flex-1" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-3.5 w-3.5 mr-1.5" />
                      {t("projects.viewProject")}
                    </a>
                  </Button>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="sm" variant="ghost" className="rounded-xl text-xs">
                        <BookOpen className="h-3.5 w-3.5 mr-1.5" />
                        {t("projects.caseStudy")}
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-lg">
                      <DialogHeader>
                        <DialogTitle className="font-display">{t(project.titleKey)}</DialogTitle>
                      </DialogHeader>
                      <div className="mt-4 space-y-4">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {t(project.caseStudyKey)}
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2">
                          {project.techs.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
