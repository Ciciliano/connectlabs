import { 
  Building2, 
  Scale, 
  Heart, 
  Laptop, 
  Briefcase,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionComponents";
import { CTASection } from "@/components/CTASection";

const segments = [
  {
    icon: Building2,
    title: "Imobiliárias, Construtoras e Administradoras",
    description: "Automatize o atendimento de leads de portais, qualifique interessados e agende visitas automaticamente. Nunca mais perca um lead por demora no retorno.",
    painPoints: [
      "Alto volume de leads não qualificados",
      "Demora no primeiro contato",
      "Falta de follow-up consistente",
      "Dificuldade em agendar visitas",
    ],
    solutions: [
      "Resposta automática em segundos",
      "Qualificação por perfil e interesse",
      "Agendamento de visitas integrado",
      "Nutrição automática para leads frios",
    ],
    color: "from-blue-500/10 to-cyan-500/10",
  },
  {
    icon: Scale,
    title: "Escritórios de Advocacia e Profissionais Liberais",
    description: "Capture consultas, qualifique casos e agende reuniões de forma automatizada. Profissionalize seu atendimento e ganhe tempo para o que realmente importa.",
    painPoints: [
      "Perda de potenciais clientes por falta de resposta rápida",
      "Tempo gasto com consultas que não viram contrato",
      "Dificuldade em gerenciar agenda de reuniões",
      "Falta de follow-up em propostas enviadas",
    ],
    solutions: [
      "Pré-atendimento 24/7 com IA",
      "Triagem automática de casos",
      "Agendamento sincronizado com sua agenda",
      "Acompanhamento automatizado de propostas",
    ],
    color: "from-purple-500/10 to-indigo-500/10",
  },
  {
    icon: Heart,
    title: "Clínicas de Saúde, Estética e Bem-estar",
    description: "Reduza faltas, automatize confirmações e mantenha sua agenda sempre cheia com leads qualificados buscando seus procedimentos.",
    painPoints: [
      "Alta taxa de no-show em consultas",
      "Dificuldade em preencher horários vazios",
      "Atendimento limitado ao horário comercial",
      "Falta de comunicação pós-procedimento",
    ],
    solutions: [
      "Confirmação automática de consultas",
      "Remarketing para horários disponíveis",
      "Atendimento e agendamento 24 horas",
      "Follow-up pós-atendimento automatizado",
    ],
    color: "from-pink-500/10 to-rose-500/10",
  },
  {
    icon: Laptop,
    title: "Negócios Digitais, Infoprodutores e Creators",
    description: "Escale seu atendimento, qualifique leads para high-ticket e automatize a jornada do cliente do interesse à compra.",
    painPoints: [
      "Volume alto de mensagens no Direct/WhatsApp",
      "Dificuldade em qualificar leads para mentorias",
      "Perda de vendas por falta de follow-up",
      "Onboarding manual e demorado",
    ],
    solutions: [
      "Atendimento automatizado em escala",
      "Qualificação para produtos high-ticket",
      "Sequências de vendas automatizadas",
      "Onboarding e suporte automatizados",
    ],
    color: "from-orange-500/10 to-amber-500/10",
  },
  {
    icon: Briefcase,
    title: "Empresas B2B Orientadas a Performance",
    description: "Estruture seu funil de vendas com automação inteligente, desde a prospecção até o fechamento e pós-venda.",
    painPoints: [
      "Ciclo de vendas longo e complexo",
      "Dificuldade em nutrir leads ao longo do funil",
      "Falta de previsibilidade comercial",
      "Retrabalho em processos manuais",
    ],
    solutions: [
      "Automação de prospecção outbound",
      "Nutrição multicanal de leads",
      "Pipeline automatizado com alertas",
      "Relatórios de performance em tempo real",
    ],
    color: "from-emerald-500/10 to-teal-500/10",
  },
];

export default function Segmentos() {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-bg py-20 md:py-32 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6">
              Segmentos Atendidos
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Soluções sob medida para{" "}
              <span className="text-gradient-cta">cada mercado</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Entendemos as particularidades de cada segmento e criamos 
              automações personalizadas que resolvem problemas reais.
            </p>
          </div>
        </div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cta/10 rounded-full blur-3xl" />
      </section>

      {/* Segments Detail */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="space-y-20">
            {segments.map((segment, index) => (
              <div
                key={index}
                className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start"
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center">
                      <segment.icon className="w-7 h-7 text-accent" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                      {segment.title}
                    </h2>
                  </div>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {segment.description}
                  </p>
                  <Link
                    to="/contato"
                    className="btn-cta inline-flex items-center gap-2"
                  >
                    Fale com especialista
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>

                <div className={`space-y-6 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  {/* Pain Points */}
                  <div className="card-premium">
                    <h4 className="font-heading font-semibold text-destructive mb-4">
                      😓 Dores comuns
                    </h4>
                    <ul className="space-y-2">
                      {segment.painPoints.map((pain, pIndex) => (
                        <li key={pIndex} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-destructive mt-1">•</span>
                          {pain}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Solutions */}
                  <div className={`card-premium bg-gradient-to-br ${segment.color}`}>
                    <h4 className="font-heading font-semibold text-accent mb-4">
                      ✨ Nossa solução
                    </h4>
                    <ul className="space-y-2">
                      {segment.solutions.map((solution, sIndex) => (
                        <li key={sIndex} className="flex items-start gap-2 text-foreground">
                          <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Seu segmento não está listado?"
        subtitle="Atendemos diversos outros mercados. Entre em contato e descubra como podemos ajudar seu negócio."
        buttonText="Falar sobre meu negócio"
        buttonLink="/contato"
      />
    </Layout>
  );
}
