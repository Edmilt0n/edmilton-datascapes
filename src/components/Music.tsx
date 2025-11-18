import { Music2, Users, Calendar } from "lucide-react";
const Music = () => {
  return <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6 animate-fade-in">
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">Liderança</span>
              <h2 className="text-4xl sm:text-5xl font-bold">
                Música & <span className="text-gradient">Liderança</span>
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sou líder de um ministério de louvor, onde gerencio equipes, agendas, eventos, escalas e comunicação. Essa vivência fortalece minha liderança, disciplina, gestão de pessoas e habilidade de coordenar entregas recorrentes — competências que levo comigo para projetos de dados.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-accent transition-colors duration-300">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <Users className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Gestão de Equipes</h4>
                    <p className="text-sm text-muted-foreground">Coordenação de pessoas, escalas e responsabilidades</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-accent transition-colors duration-300">
                  <div className="p-2 rounded-lg bg-accent/10">
                    <Calendar className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Organização & Disciplina</h4>
                    <p className="text-sm text-muted-foreground">Planejamento de eventos, agendas e entregas</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative animate-fade-in-up lg:justify-self-end">
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-purple/30 rounded-3xl blur-3xl"></div>
                
                {/* Main card */}
                <div className="relative p-12 rounded-3xl bg-gradient-to-br from-navy-light to-navy border border-accent/20 shadow-2xl">
                  <div className="flex flex-col items-center text-center space-y-6">
                    <div className="p-6 rounded-full bg-gradient-to-br from-accent to-primary animate-glow-pulse">
                      <Music2 className="h-12 w-12 text-white" />
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-cyan-500">Ministério de Louvor</h3>
                      <p className="text-slate-50">Liderança, organização e gestão de pessoas</p>
                    </div>

                    <div className="grid grid-cols-2 gap-6 w-full pt-6 border-t border-border">
                      <div>
                        <div className="text-3xl font-bold text-gradient mb-1">2+</div>
                        <div className="text-xs text-muted-foreground bg-[#1b253a]">Anos de Liderança</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-gradient mb-1">60+</div>
                        <div className="text-xs text-muted-foreground">Membros na Equipe</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Music;