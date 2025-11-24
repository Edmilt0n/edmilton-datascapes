import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, BarChart3, Brain, ArrowRight } from "lucide-react";
const Projects = () => {
  const projects = [
    {
      icon: Database,
      title: "Migração & Arquitetura de Dados",
      description:
        "Construí pipelines completos para migrar dados de sistemas diversos como: Salesforce, Google Analytcs. Para um Data Warehouse corporativo. Estruturei camadas de ingestão, tratamento e modelagem, garantindo padronização, rastreabilidade e qualidade.",
      technologies: ["ADF", "Data Lake", "SQL", "DW", "Databricks"],
      impact:
        "Base sólida para análises, redução de retrabalho manual dos times e dados confiáveis para decisões estratégicas.",
      gradient: "from-primary to-purple",
    },
    {
      icon: BarChart3,
      title: "Dashboards Responsivos",
      description:
        "Criei vários dashboards estratégicos para monitoramento de indicadores críticos, com atualização automatizada diária, DAX avançado e modelagem limpa e otimizada.",
      technologies: ["Power BI", "SQL", "R", "DAX"],
      impact: "Decisões rápidas e assertivas, alinhamento entre áreas e visão clara dos resultados.",
      gradient: "from-purple to-accent",
    },
    {
      icon: Brain,
      title: "Modelos de Machine Learning",
      description:
        "Implementei modelos de ML usando dados reais para prever comportamentos, detectar padrões, fazer segmentações, identificar riscos e priorizar ações.",
      technologies: ["Python", "Scikit-learn", "SQL", "ML Ops"],
      impact: "Aumento da precisão nas decisões, identificação antecipada de oportunidades e redução de riscos.",
      gradient: "from-accent to-primary",
    },
  ];
  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-navy-light/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <span className="font-semibold text-sm uppercase tracking-wider text-indigo-700">Portfólio</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">
            Projetos em <span className="text-gradient">Destaque</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções reais que transformaram dados em resultados mensuráveis
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-border hover:border-accent bg-card hover:shadow-2xl transition-all duration-500 animate-fade-in-up"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              ></div>

              <CardContent className="p-8 relative h-full flex flex-col">
                {/* Icon */}
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${project.gradient} mb-6 w-fit group-hover:scale-110 transition-transform duration-300`}
                >
                  <project.icon className="h-6 w-6 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-4 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="text-xs bg-muted border border-transparent hover:border-accent hover:bg-accent/10 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Impact */}
                <div className="pt-6 border-t border-border">
                  <p className="text-sm font-medium text-accent mb-2">Impacto:</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.impact}</p>
                </div>

                {/* Arrow indicator */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="h-5 w-5 text-accent" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
