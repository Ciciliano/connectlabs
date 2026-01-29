import { 
  Target, 
  Zap, 
  Users, 
  Award,
  Lightbulb,
  Heart,
  CheckCircle2
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader, StatCard } from "@/components/ui/SectionComponents";
import { CTASection } from "@/components/CTASection";

const values = [
  {
    icon: Target,
    title: "Foco em Resultado",
    description: "Cada projeto é desenhado com metas claras e métricas de sucesso definidas desde o início.",
  },
  {
    icon: Zap,
    title: "Agilidade na Entrega",
    description: "Implementação rápida e iterativa, com resultados visíveis em semanas, não meses.",
  },
  {
    icon: Users,
    title: "Parceria Consultiva",
    description: "Não somos apenas fornecedores. Somos parceiros estratégicos do seu crescimento.",
  },
  {
    icon: Lightbulb,
    title: "Inovação Constante",
    description: "Sempre atualizados com as últimas tecnologias de IA e automação do mercado.",
  },
];

const differentials = [
  "Método próprio de orquestração digital",
  "Visão técnica com mentalidade de negócio",
  "Atendimento consultivo e personalizado",
  "Foco em ROI e métricas de resultado",
  "Suporte contínuo e otimização constante",
  "Equipe especializada em conversão",
];

export default function Sobre() {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-bg py-20 md:py-32 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6">
              Sobre a Connect Labs
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Orquestramos tecnologia para{" "}
              <span className="text-gradient-cta">gerar resultado real</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Nascemos da visão de que automação sem estratégia é desperdício. 
              Por isso, integramos IA, tecnologia e metodologia comercial em soluções que realmente convertem.
            </p>
          </div>
        </div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cta/10 rounded-full blur-3xl" />
      </section>

      {/* Mission */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <SectionHeader
                badge="Nossa Missão"
                title="Transformar a forma como empresas vendem e atendem"
                centered={false}
              />
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Acreditamos que toda empresa merece ter acesso à tecnologia de ponta 
                para escalar suas vendas sem perder a essência do relacionamento humano.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Por isso, desenvolvemos um método exclusivo de orquestração digital que 
                combina o melhor da inteligência artificial com estratégias comerciais 
                comprovadas, entregando previsibilidade e escala para nossos clientes.
              </p>
              
              <div className="space-y-3">
                {differentials.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-premium p-8 md:p-12 bg-gradient-to-br from-accent/5 to-cta/5">
              <div className="grid grid-cols-2 gap-8">
                <StatCard value="+150" label="Empresas atendidas" />
                <StatCard value="5+" label="Anos de experiência" />
                <StatCard value="+3M" label="Interações/mês" />
                <StatCard value="98%" label="Satisfação" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <SectionHeader
            badge="Nossos Valores"
            title="O que nos guia"
            subtitle="Princípios que norteiam todas as nossas decisões e entregas."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="card-premium text-center p-8">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2 text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Method */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              badge="Nosso Método"
              title="Orquestração Digital Inteligente"
              subtitle="Um framework proprietário que integra todas as pontas do seu processo comercial."
            />

            <div className="card-premium p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-5xl font-heading font-bold text-accent/30 mb-4">01</div>
                  <h4 className="font-heading font-semibold text-foreground mb-2">Estratégia</h4>
                  <p className="text-muted-foreground text-sm">
                    Mapeamos seu processo atual e desenhamos a arquitetura ideal de automação.
                  </p>
                </div>
                <div>
                  <div className="text-5xl font-heading font-bold text-accent/30 mb-4">02</div>
                  <h4 className="font-heading font-semibold text-foreground mb-2">Tecnologia</h4>
                  <p className="text-muted-foreground text-sm">
                    Implementamos IA, automação e integrações sob medida para seu negócio.
                  </p>
                </div>
                <div>
                  <div className="text-5xl font-heading font-bold text-accent/30 mb-4">03</div>
                  <h4 className="font-heading font-semibold text-foreground mb-2">Otimização</h4>
                  <p className="text-muted-foreground text-sm">
                    Acompanhamos resultados e otimizamos continuamente para maximizar ROI.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Quer conhecer nossa equipe?"
        subtitle="Agende uma conversa e descubra como podemos ajudar seu negócio a crescer."
        buttonText="Agendar conversa"
        buttonLink="/contato"
      />
    </Layout>
  );
}
