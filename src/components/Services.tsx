import { Database, Brain, BarChart3 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
const Services = () => {
  const services = [{
    icon: Database,
    title: "Engenharia de Dados",
    description: "Construo pipelines confiáveis e escaláveis para ingestão, transformação, padronização e entrega de dados. Trabalho com orquestração, governança básica, camadas de dados, automações e monitoramento.",
    gradient: "from-primary to-purple"
  }, {
    icon: Brain,
    title: "Machine Learning & IA",
    description: "Desenvolvo modelos preditivos e analíticos, desde a preparação dos dados até a avaliação, tuning e deployment. Foco em problemas reais: risco, previsão, segmentação, anomalias, performance e otimização.",
    gradient: "from-purple to-accent"
  }, {
    icon: BarChart3,
    title: "Dashboards & Data Storytelling",
    description: "Crio dashboards estratégicos e responsivos que traduzem dados complexos em insights claros. Combino modelagem otimizada, DAX/SQL avançado e narrativa visual para facilitar a tomada de decisão.",
    gradient: "from-accent to-primary"
  }];
  return <section className="py-24 bg-gradient-to-b from-background to-navy-light/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Serviços</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">
            O Que Eu <span className="text-gradient">Faço?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções completas de dados, da arquitetura à inteligência artificial
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => <Card key={index} className="group relative overflow-hidden border-border hover:border-accent bg-card hover:shadow-2xl transition-all duration-500 animate-fade-in-up" style={{
          animationDelay: `${index * 150}ms`
        }}>
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <CardContent className="p-8 relative">
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Decorative line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-accent to-primary group-hover:w-full transition-all duration-500"></div>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default Services;