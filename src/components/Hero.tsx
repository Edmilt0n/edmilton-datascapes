import { Button } from "@/components/ui/button";
import { Linkedin, Github, Mail, Download, ChevronDown } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";
import curriculum from "@/assets/Edmilton_Souza_-_Data_Science.pdf";
const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy via-navy-light to-purple-dark/20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" style={{
        animationDelay: "2s"
      }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 text-center lg:text-left animate-fade-in">
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20">
                Disponível para novos projetos
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              <span className="block text-white">Edmilton Souza</span>
              
            </h1>

            <p className="text-xl text-accent leading-relaxed">
              Cientista de Dados · Engenheiro de Dados · IA & Arquitetura
            </p>

            <p className="text-lg text-white max-w-2xl">
              Desenvolvo soluções de dados ponta a ponta — da ingestão ao insight — unindo engenharia, machine learning e visualização para acelerar decisões e impulsionar resultados reais.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-accent/50 transition-all duration-300" onClick={() => scrollToSection('projects')}>
                Ver meus projetos
              </Button>
              <Button size="lg" variant="outline" className="border-muted-foreground/30 hover:bg-muted/50 hover:border-accent transition-all duration-300" asChild>
                <a href={curriculum} download="Edmilton_Souza_-_Data_Science.pdf">
                  <Download className="mr-2 h-5 w-5" />
                  Baixar currículo
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a href="https://www.linkedin.com/in/edmilton-souza/" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-card border border-border hover:border-accent hover:bg-accent/10 transition-all duration-300 group">
                <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
              </a>
              <a href="https://github.com/Edmilt0n" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-card border border-border hover:border-accent hover:bg-accent/10 transition-all duration-300 group">
                <Github className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
              </a>
              <a href="mailto:edmiltonsouzamsc@gmail.com" className="p-3 rounded-full bg-card border border-border hover:border-accent hover:bg-accent/10 transition-all duration-300 group">
                <Mail className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative animate-fade-in-up lg:justify-self-end">
            <div className="relative w-full max-w-md mx-auto">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-primary/30 rounded-3xl blur-3xl"></div>
              
              {/* Decorative frame */}
              <div className="absolute inset-4 rounded-3xl border-4 border-accent/20 shadow-2xl pointer-events-none z-0"></div>
              
              {/* Main image container - no overflow hidden */}
              <div className="relative rounded-3xl z-10">
                <img src={profilePhoto} alt="Edmilton Souza" className="w-full h-auto object-contain" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={() => scrollToSection('about')} className="p-2 rounded-full bg-card/50 border border-border hover:border-accent transition-all duration-300">
            <ChevronDown className="h-6 w-6 text-muted-foreground" />
          </button>
        </div>
      </div>
    </section>;
};
export default Hero;