import { useLanguage } from "@/contexts/LanguageContext";
import Logo from "./Logo";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border/50 py-8">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Logo className="w-7 h-7" />
          <span className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Lucas Mateus. {t("footer.rights")}
          </span>
        </div>
        <p className="text-xs text-muted-foreground/60">
          Designed & Built with precision
        </p>
      </div>
    </footer>
  );
};

export default Footer;
