import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const { t } = useLanguage();
  const fullName = t("hero.name");
  const [displayedName, setDisplayedName] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    setDisplayedName("");
    let i = 0;
    const interval = setInterval(() => {
      if (i < fullName.length) {
        setDisplayedName(fullName.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => setShowCursor(false), 2000);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [fullName]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-hero animate-gradient" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto"
        >
          {/* Name with typewriter */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold mb-6 tracking-tight">
            <span className="text-gradient">{displayedName}</span>
            {showCursor && <span className="cursor-blink ml-0.5">&nbsp;</span>}
          </h1>

          {/* Headline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="text-lg sm:text-xl text-muted-foreground mb-4 font-medium"
          >
            {t("hero.headline")}
          </motion.p>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="text-base text-muted-foreground/80 mb-10 max-w-xl mx-auto"
          >
            {t("hero.subheadline")}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              onClick={() => scrollTo("projects")}
              className="rounded-2xl px-8 glow-blue-hover transition-all duration-300"
            >
              {t("hero.cta.projects")}
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollTo("contact")}
              className="rounded-2xl px-8 hover:border-primary/50 transition-all duration-300"
            >
              {t("hero.cta.contact")}
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowDown className="h-5 w-5 text-muted-foreground/50" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
