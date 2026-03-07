import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Lang } from "@/i18n/translations";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import { Button } from "@/components/ui/button";

const navItems = ["home", "about", "projects", "skills", "experience", "contact"] as const;
const langs: Lang[] = ["en", "pt", "es"];

const Header = () => {
  const { lang, setLang, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <button onClick={() => scrollTo("home")} className="flex items-center gap-2 group" aria-label="Home">
          <Logo />
          <span className="font-display font-semibold text-lg tracking-tight hidden sm:inline">LM</span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50"
            >
              {t(`nav.${item}`)}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Language Selector */}
          <div className="flex items-center gap-0.5 rounded-full border border-border/50 p-0.5">
            {langs.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-2.5 py-1 text-xs font-medium rounded-full transition-all ${
                  lang === l
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          <ThemeToggle />

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="px-4 py-3 text-left text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
              >
                {t(`nav.${item}`)}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
