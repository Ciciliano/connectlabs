import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Zap, 
  Bot, 
  Users, 
  TrendingUp, 
  Clock, 
  Target,
  Building2,
  Scale,
  Heart,
  Laptop,
  Briefcase,
  CheckCircle2,
  MessageSquare,
  Calendar,
  CreditCard,
  BarChart3
} from "lucide-react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader, FeatureCard, TestimonialCard, StatCard } from "@/components/ui/SectionComponents";
import { CTASection } from "@/components/CTASection";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/ScrollReveal";

const benefits = [
  {
    icon: Clock,
    title: "Atendimento 24/7",
    description: "IA trabalhando para você mesmo enquanto você descansa, sem perder nenhum lead.",
  },
  {
    icon: Target,
    title: "Qualificação Automática",
    description: "Leads filtrados e priorizados automaticamente, economizando tempo da equipe comercial.",
  },
  {
    icon: TrendingUp,
    title: "Previsibilidade de Vendas",
    description: "Processos estruturados que geram resultados consistentes e mensuráveis mês a mês.",
  },
  {
    icon: Zap,
    title: "Automação Inteligente",
    description: "Fluxos automatizados que seguem seu método de vendas com precisão cirúrgica.",
  },
  {
    icon: Users,
    title: "Follow-up Consistente",
    description: "Nunca mais perca uma oportunidade por falta de acompanhamento sistemático.",
  },
  {
    icon: Bot,
    title: "IA Conversacional",
    description: "Chatbots inteligentes que entendem contexto e conduzem conversas humanizadas.",
  },
];

const segments = [
  { icon: Building2, name: "Imobiliárias" },
  { icon: Scale, name: "Advocacia" },
  { icon: Heart, name: "Saúde e Estética" },
  { icon: Laptop, name: "Negócios Digitais" },
  { icon: Briefcase, name: "Empresas B2B" },
];

const howItWorks = [
  {
    step: "01",
    title: "Diagnóstico",
    description: "Mapeamos seus processos de vendas e atendimento para identificar gargalos e oportunidades.",
  },
  {
    step: "02",
    title: "Estratégia",
    description: "Desenhamos a orquestração ideal integrando IA, automação e seu método comercial.",
  },
  {
    step: "03",
    title: "Implementação",
    description: "Configuramos as ferramentas e integrações com WhatsApp, CRM, agenda e pagamentos.",
  },
  {
    step: "04",
    title: "Otimização",
    description: "Acompanhamos métricas e otimizamos continuamente para maximizar conversões.",
  },
];

const testimonials = [
  {
    quote: "Em 3 meses, dobramos nossa taxa de conversão. O atendimento automático captura leads que antes perdíamos.",
    author: "Carlos Eduardo",
    role: "Diretor Comercial",
    company: "Imobiliária Premium",
  },
  {
    quote: "A automação do follow-up transformou nosso processo. Fechamos mais contratos com menos esforço manual.",
    author: "Dra. Mariana Costa",
    role: "Sócia-fundadora",
    company: "Costa Advogados",
  },
  {
    quote: "Finalmente temos previsibilidade. Sabemos quantos agendamentos teremos por semana com 90% de precisão.",
    author: "Dr. Rafael Mendes",
    role: "Proprietário",
    company: "Clínica Estética Mendes",
  },
];

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-bg min-h-[90vh] flex items-center relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6"
            >
              Orquestração Digital Inteligente
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white mb-6 leading-tight"
            >
              Transformamos atendimento em vendas com{" "}
              <span className="text-gradient-cta">automação inteligente</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              IA, automação e estratégia trabalhando juntas para gerar previsibilidade 
              e escalar suas vendas sem aumentar sua equipe.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/contato" className="btn-cta text-lg">
                Fale com um especialista
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/solucoes" className="btn-secondary bg-white/10 text-white border-white/20 hover:bg-white/20 text-lg">
                Conheça as soluções
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cta/10 rounded-full blur-3xl" />
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background border-b border-border">
        <div className="container-custom">
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8" staggerDelay={0.1}>
            <StaggerItem>
              <StatCard value="+150" label="Empresas atendidas" />
            </StaggerItem>
            <StaggerItem>
              <StatCard value="98%" label="Satisfação dos clientes" />
            </StaggerItem>
            <StaggerItem>
              <StatCard value="+3M" label="Interações automatizadas" />
            </StaggerItem>
            <StaggerItem>
              <StatCard value="24/7" label="Atendimento ativo" />
            </StaggerItem>
          </StaggerContainer>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <ScrollReveal>
            <SectionHeader
              badge="Por que a Connect Labs"
              title="Orquestração que gera resultado real"
              subtitle="Não entregamos apenas automação. Entregamos um sistema integrado que transforma a forma como você vende e atende."
            />
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" staggerDelay={0.08}>
            {benefits.map((benefit, index) => (
              <StaggerItem key={index}>
                <FeatureCard
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <ScrollReveal>
            <SectionHeader
              badge="Método Connect Labs"
              title="Como funciona"
              subtitle="Um processo estruturado para implementar orquestração digital no seu negócio."
            />
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.15}>
            {howItWorks.map((item, index) => (
              <StaggerItem key={index}>
                <div className="relative">
                  <div className="text-6xl font-heading font-bold text-accent/20 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-2 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                  {index < howItWorks.length - 1 && (
                    <div className="hidden lg:block absolute top-8 right-0 w-1/2 h-0.5 bg-gradient-to-r from-accent/30 to-transparent" />
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Segments */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <ScrollReveal>
            <SectionHeader
              badge="Segmentos"
              title="Quem atendemos"
              subtitle="Soluções personalizadas para diferentes mercados e necessidades."
            />
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {segments.map((segment, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    to="/segmentos"
                    className="flex items-center gap-3 px-6 py-4 bg-card rounded-2xl border border-border hover:border-accent/30 hover:shadow-lg transition-all group"
                  >
                    <segment.icon className="w-6 h-6 text-accent" />
                    <span className="font-medium text-foreground group-hover:text-accent transition-colors">
                      {segment.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <ScrollReveal>
            <SectionHeader
              badge="Prova Social"
              title="O que nossos clientes dizem"
              subtitle="Resultados reais de empresas que transformaram suas operações com a Connect Labs."
            />
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-3 gap-6 md:gap-8" staggerDelay={0.12}>
            {testimonials.map((testimonial, index) => (
              <StaggerItem key={index}>
                <TestimonialCard
                  quote={testimonial.quote}
                  author={testimonial.author}
                  role={testimonial.role}
                  company={testimonial.company}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Features List */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal direction="left">
              <div>
                <SectionHeader
                  badge="Diferenciais"
                  title="Tecnologia a serviço da conversão"
                  subtitle="Integramos todas as pontas do seu funil para criar uma máquina de vendas previsível."
                  centered={false}
                />

                <ul className="space-y-4">
                  {[
                    "Integração nativa com WhatsApp Business",
                    "Conexão com os principais CRMs do mercado",
                    "Agendamento automático sincronizado",
                    "Gateway de pagamentos integrado",
                    "Dashboard de métricas em tempo real",
                    "Suporte consultivo dedicado",
                  ].map((item, index) => (
                    <motion.li 
                      key={index} 
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.4 }}
                    >
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            <StaggerContainer className="grid grid-cols-2 gap-4" staggerDelay={0.1}>
              <StaggerItem>
                <motion.div 
                  className="card-premium flex flex-col items-center text-center p-6"
                  whileHover={{ scale: 1.05, y: -4 }}
                >
                  <MessageSquare className="w-10 h-10 text-accent mb-3" />
                  <span className="font-semibold text-foreground">WhatsApp</span>
                </motion.div>
              </StaggerItem>
              <StaggerItem>
                <motion.div 
                  className="card-premium flex flex-col items-center text-center p-6"
                  whileHover={{ scale: 1.05, y: -4 }}
                >
                  <BarChart3 className="w-10 h-10 text-accent mb-3" />
                  <span className="font-semibold text-foreground">CRM</span>
                </motion.div>
              </StaggerItem>
              <StaggerItem>
                <motion.div 
                  className="card-premium flex flex-col items-center text-center p-6"
                  whileHover={{ scale: 1.05, y: -4 }}
                >
                  <Calendar className="w-10 h-10 text-accent mb-3" />
                  <span className="font-semibold text-foreground">Agenda</span>
                </motion.div>
              </StaggerItem>
              <StaggerItem>
                <motion.div 
                  className="card-premium flex flex-col items-center text-center p-6"
                  whileHover={{ scale: 1.05, y: -4 }}
                >
                  <CreditCard className="w-10 h-10 text-accent mb-3" />
                  <span className="font-semibold text-foreground">Pagamentos</span>
                </motion.div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ScrollReveal>
        <CTASection
          title="Pronto para escalar suas vendas?"
          subtitle="Agende uma conversa estratégica com nossos especialistas e descubra como a orquestração digital pode transformar seu negócio."
          buttonText="Agendar conversa estratégica"
          buttonLink="/contato"
        />
      </ScrollReveal>
    </Layout>
  );
}
