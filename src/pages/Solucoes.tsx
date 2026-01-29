import { 
  Bot, 
  Clock, 
  Target, 
  Zap, 
  MessageSquare, 
  Calendar, 
  CreditCard,
  BarChart3,
  Users,
  Workflow,
  BrainCircuit,
  Shield,
  CheckCircle2
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader, FeatureCard } from "@/components/ui/SectionComponents";
import { CTASection } from "@/components/CTASection";

const mainSolutions = [
  {
    icon: Workflow,
    title: "Orquestração Digital Completa",
    description: "Não apenas bots: integramos IA, automação e estratégia em um sistema coeso que trabalha 24/7 para converter leads em clientes.",
    features: [
      "Fluxos automatizados personalizados",
      "Integração entre canais",
      "Handoff inteligente para equipe humana",
      "Métricas unificadas de performance",
    ],
  },
  {
    icon: Bot,
    title: "Atendimento 24/7 com IA",
    description: "Chatbots inteligentes que entendem contexto, respondem perguntas complexas e conduzem conversas humanizadas a qualquer hora.",
    features: [
      "Processamento de linguagem natural",
      "Respostas contextualizadas",
      "Aprendizado contínuo",
      "Múltiplos idiomas",
    ],
  },
  {
    icon: Target,
    title: "Qualificação Automática de Leads",
    description: "Sistema de scoring que prioriza leads prontos para comprar, economizando tempo da equipe comercial com prospects que realmente importam.",
    features: [
      "Lead scoring dinâmico",
      "Segmentação por perfil",
      "Alertas em tempo real",
      "Priorização inteligente",
    ],
  },
  {
    icon: Zap,
    title: "Automação Orientada a Conversão",
    description: "Cada automação é desenhada com foco em resultado: mais agendamentos, mais vendas, mais retenção.",
    features: [
      "Follow-up automático",
      "Recuperação de carrinho",
      "Nutrição de leads",
      "Reativação de clientes inativos",
    ],
  },
];

const integrations = [
  { icon: MessageSquare, name: "WhatsApp Business", description: "API oficial com múltiplos atendentes" },
  { icon: BarChart3, name: "CRM", description: "RD Station, Pipedrive, HubSpot e outros" },
  { icon: Calendar, name: "Agenda", description: "Google Calendar, Calendly, Doctoralia" },
  { icon: CreditCard, name: "Pagamentos", description: "Stripe, PagSeguro, Mercado Pago" },
];

const benefits = [
  {
    icon: Clock,
    title: "Economia de Tempo",
    description: "Reduza em até 80% o tempo gasto com tarefas repetitivas de atendimento e follow-up.",
  },
  {
    icon: Users,
    title: "Escala sem Equipe",
    description: "Atenda 10x mais leads sem precisar contratar novos funcionários.",
  },
  {
    icon: BrainCircuit,
    title: "Decisões Baseadas em Dados",
    description: "Dashboards em tempo real para acompanhar cada métrica que importa.",
  },
  {
    icon: Shield,
    title: "Segurança e Compliance",
    description: "Dados protegidos e processos em conformidade com LGPD.",
  },
];

export default function Solucoes() {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-bg py-20 md:py-32 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6">
              Nossas Soluções
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Orquestração digital para{" "}
              <span className="text-gradient-cta">vender todos os dias</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Tecnologia, IA e método próprio trabalhando juntos para transformar 
              seu atendimento em uma máquina de conversão previsível.
            </p>
          </div>
        </div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cta/10 rounded-full blur-3xl" />
      </section>

      {/* Main Solutions */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeader
            badge="Soluções Principais"
            title="O que entregamos"
            subtitle="Cada solução é pensada para resolver problemas reais e gerar resultados mensuráveis."
          />

          <div className="space-y-12">
            {mainSolutions.map((solution, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">
                    <solution.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-foreground">
                    {solution.title}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {solution.description}
                  </p>
                  <ul className="space-y-3">
                    {solution.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <div className="card-premium p-8 md:p-12 bg-gradient-to-br from-accent/5 to-cta/5">
                    <solution.icon className="w-32 h-32 text-accent/30 mx-auto" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <SectionHeader
            badge="Integrações"
            title="Conectamos tudo"
            subtitle="Suas ferramentas favoritas trabalhando juntas de forma automatizada."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="card-premium text-center p-8">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <integration.icon className="w-8 h-8 text-accent" />
                </div>
                <h4 className="text-lg font-heading font-semibold mb-2 text-foreground">
                  {integration.name}
                </h4>
                <p className="text-sm text-muted-foreground">{integration.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionHeader
            badge="Benefícios"
            title="Por que escolher a Connect Labs"
            subtitle="Resultados tangíveis que impactam diretamente seu faturamento."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <FeatureCard
                key={index}
                icon={benefit.icon}
                title={benefit.title}
                description={benefit.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Pronto para automatizar suas vendas?"
        subtitle="Descubra como nossa orquestração digital pode transformar seu negócio."
        buttonText="Quero estruturar minha automação"
        buttonLink="/contato"
      />
    </Layout>
  );
}
