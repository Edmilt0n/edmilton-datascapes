import { Briefcase, Building2 } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Data Engineer",
      company: "Serasa Experian",
      description:
        "Desenvolvimento de soluções completas de dados, incluindo pipelines, dashboards e modelos preditivos. Trabalho com dados de múltiplas fontes, arquitetura em nuvem e produtos analíticos voltados à tomada de decisão.",
      period: "Atual",
    },
    {
      title: "Analista de Dados – Marketing Analytcs",
      company: "ClearSale",
      description:
        "Análise profunda de dados, construção de dashboards estratégicos, estudos de comportamento, segmentações e automações. Atuação voltada à geração de insights acionáveis e melhoria contínua de processos.",
      period: "Experiência Anterior",
    },
    {
      title: "Supervisor Administrativo",
      company: "A&J Comércio de Gás",
      description:
        "Gestão operacional, financeira e de processos internos, usando dados para orientar decisões e otimizar a rotina da equipe.",
      period: "Experiência Anterior",
    },
    {
      title: "Agente de Microcrédito",
      company: "Banco do Nordeste",
      description:
        "Avaliação de perfis, análise de crédito, acompanhamento de carteiras e relacionamento com microempreendedores.",
      period: "Experiência Anterior",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Carreira</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">
            Experiência <span className="text-gradient">Profissional</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trajetória construída com foco em dados, análise e resultados
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 pb-8 border-l-2 border-border hover:border-accent transition-colors duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 transform -translate-x-1/2">
                <div className="p-2 rounded-full bg-card border-2 border-accent">
                  <Briefcase className="h-4 w-4 text-accent" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6 rounded-xl bg-card border border-border hover:border-accent hover:shadow-lg transition-all duration-300 group">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <h3 className="text-xl font-bold group-hover:text-accent transition-colors">{exp.title}</h3>
                  <span className="text-sm text-muted-foreground mt-2 sm:mt-0">{exp.period}</span>
                </div>

                <div className="flex items-center gap-2 text-accent font-medium mb-4">
                  <Building2 className="h-4 w-4" />
                  <span>{exp.company}</span>
                </div>

                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}

          {/* Additional Projects */}
          <div className="p-8 rounded-xl bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-accent animate-glow-pulse"></span>
              Projetos Paralelos
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Desenvolvo soluções e análises para pequenos negócios, incluindo controle de vendas, estoque, performance
              e presença digital.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
