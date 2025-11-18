import { Button } from "@/components/ui/button";
import { Linkedin, Mail, MessageSquare } from "lucide-react";
const Contact = () => {
  return <section className="py-24 bg-gradient-to-br from-navy via-navy-light to-purple-dark/20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" style={{
        animationDelay: "2s"
      }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <span className="font-semibold text-sm uppercase tracking-wider text-green-50">Contato</span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6 text-slate-50">
              Vamos <span className="text-gradient">Conversar</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Se quiser conversar sobre dados, IA, engenharia, projetos ou oportunidades, será um prazer.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12 animate-fade-in-up">
            <a href="https://www.linkedin.com/in/edmilton-souza/" target="_blank" rel="noopener noreferrer" className="group p-8 rounded-2xl bg-card border border-border hover:border-accent transition-all duration-300 hover:shadow-2xl">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 rounded-full bg-gradient-to-br from-primary to-purple group-hover:scale-110 transition-transform duration-300">
                  <Linkedin className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">LinkedIn</h3>
                  <p className="text-sm text-muted-foreground">Conecte-se comigo profissionalmente</p>
                </div>
                <MessageSquare className="h-5 w-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </a>

            <a href="mailto:edmiltonsouzamsc@gmail.com" className="group p-8 rounded-2xl bg-card border border-border hover:border-accent hover:shadow-2xl transition-all duration-300">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 rounded-full bg-gradient-to-br from-accent to-primary group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">E-mail</h3>
                  <p className="text-sm text-muted-foreground">Envie uma mensagem direta</p>
                </div>
                <MessageSquare className="h-5 w-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{
          animationDelay: "200ms"
        }}>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-accent/50 transition-all duration-300" asChild>
              <a href="https://www.linkedin.com/in/edmilton-souza/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                Falar no LinkedIn
              </a>
            </Button>
            
            <Button size="lg" variant="outline" className="border-accent/30 hover:bg-accent/10 hover:border-accent transition-all duration-300" asChild>
              <a href="mailto:edmiltonsouzamsc@gmail.com">
                <Mail className="mr-2 h-5 w-5" />
                Enviar E-mail
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;