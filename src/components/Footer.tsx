import { Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-navy border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              © {currentYear} – <span className="font-semibold text-foreground">Edmilton Souza</span>
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Tecnologia, dados e inteligência para decisões melhores.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:border-accent hover:bg-accent/10 transition-all duration-300 group"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:border-accent hover:bg-accent/10 transition-all duration-300 group"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
            </a>
            <a 
              href="mailto:contato@example.com"
              className="p-3 rounded-full bg-card border border-border hover:border-accent hover:bg-accent/10 transition-all duration-300 group"
              aria-label="E-mail"
            >
              <Mail className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
