import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Dados & Analytics",
      skills: [
        "SQL Avançado",
        "Power BI",
        "DAX",
        "Modelagem Tabular",
        "KPIs & Métricas",
        "Análise Exploratória",
        "Data Storytelling",
      ],
      color: "primary",
    },
    {
      title: "Engenharia de Dados",
      skills: [
        "Azure Data Factory",
        "Azure Data Lake",
        "Data Warehouse",
        "Azure Synapse",
        "Pipelines ETL/ELT",
        "AWS Cloud",
        "Modelagem de Dados",
      ],
      color: "purple",
    },
    {
      title: "Ciência de Dados & IA",
      skills: [
        "Python",
        "Pandas & NumPy",
        "Scikit-learn",
        "Machine Learning",
        "Feature Engineering",
        "Modelos Preditivos",
        "IA Generativa",
      ],
      color: "accent",
    },
    {
      title: "Soft Skills",
      skills: [
        "Comunicação",
        "Liderança",
        "Visão Sistêmica",
        "Resolução de Problemas",
        "Gestão de Projetos",
        "Trabalho em Equipe",
      ],
      color: "primary",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Competências</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">
            Minhas <span className="text-gradient">Habilidades</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tecnologias e competências que domino para entregar resultados excepcionais
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="p-8 rounded-2xl bg-card border border-border hover:border-accent transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-accent animate-glow-pulse"></span>
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="px-4 py-2 text-sm font-medium bg-muted hover:bg-accent/20 hover:text-accent hover:border-accent border border-transparent transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
