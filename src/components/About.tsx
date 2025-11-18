const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">Sobre Mim</span>
            <h2 className="text-4xl sm:text-5xl font-bold mt-4 mb-6">
              Transformando <span className="text-gradient">Dados</span> em Decisões
            </h2>
          </div>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed animate-fade-in-up">
            <p>
              Sou um profissional que transita entre <span className="text-foreground font-semibold">Ciência e Engenharia de Dados</span>, construindo soluções completas: desde a integração e modelagem de dados até algoritmos de machine learning e dashboards para tomada de decisão.
            </p>

            <p>
              Trabalho com dados de qualquer origem — sistemas internos, bancos relacionais, serviços em nuvem, APIs, planilhas, eventos, logs ou dados não estruturados. O foco é sempre o mesmo: transformar informação bruta em algo <span className="text-accent font-semibold">útil, confiável e acionável</span>.
            </p>

            <p>
              Minha abordagem é <span className="text-foreground font-semibold">híbrida e multidisciplinar</span>. Entendo tanto a parte técnica (pipelines, arquitetura, engenharia, modelagem estatística) quanto a parte humana (como comunicar resultados, alinhar expectativas, facilitar decisões e antecipar necessidades).
            </p>

            <p>
              Fora do universo corporativo, também lidero um ministério de louvor, o que fortalece minha capacidade de organização, comunicação e liderança. Meu objetivo é simples: criar soluções de dados que <span className="text-accent font-semibold">façam sentido, funcionem bem e gerem impacto</span>.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-6 rounded-2xl bg-card border border-border hover:border-accent transition-all duration-300">
              <div className="text-4xl font-bold text-gradient mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Anos de Experiência</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-card border border-border hover:border-accent transition-all duration-300">
              <div className="text-4xl font-bold text-gradient mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Projetos Concluídos</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-card border border-border hover:border-accent transition-all duration-300 col-span-2 md:col-span-1">
              <div className="text-4xl font-bold text-gradient mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Comprometimento</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
