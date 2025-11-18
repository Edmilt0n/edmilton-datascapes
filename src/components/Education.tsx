import { GraduationCap, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Education = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-navy-light/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Educação</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">
            Formação & <span className="text-gradient">Certificações</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Aprendizado contínuo em tecnologia, dados e inteligência artificial
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {/* Main Education */}
          <Card className="border-border hover:border-accent transition-all duration-300 animate-fade-in-up">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-accent to-primary">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-bold">Pós-graduação em Engenharia e Arquitetura de Dados com IA</h3>
                    <span className="text-sm text-accent font-medium mt-2 sm:mt-0">Em andamento</span>
                  </div>
                  <p className="text-muted-foreground">XP Educação</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border hover:border-accent transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-purple">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-bold">Tecnólogo em Análise e Desenvolvimento de Sistemas</h3>
                    <span className="text-sm text-muted-foreground mt-2 sm:mt-0">Concluído</span>
                  </div>
                  <p className="text-muted-foreground">Uninassau</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="border-accent/30 bg-gradient-to-br from-accent/5 to-primary/5 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <CardContent className="p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple to-accent">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Certificações & Cursos</h3>
                  <p className="text-sm text-muted-foreground">Aprendizado contínuo e especializado</p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "SQL Avançado",
                  "Python para Data Science",
                  "Power BI Completo",
                  "Machine Learning",
                  "Arquitetura de Dados",
                  "Microsoft Azure",
                  "IA Generativa",
                  "Automações e APIs",
                ].map((cert, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 p-3 rounded-lg bg-card/50 border border-border hover:border-accent transition-colors duration-300"
                  >
                    <div className="h-2 w-2 rounded-full bg-accent"></div>
                    <span className="text-sm font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
