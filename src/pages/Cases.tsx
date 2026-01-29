import { 
  Building2, 
  Scale, 
  Heart, 
  Laptop,
  TrendingUp,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionComponents";
import { CTASection } from "@/components/CTASection";

const cases = [
  {
    icon: Building2,
    segment: "Imobiliária Regional",
    title: "Vendas e locações automatizadas",
    scenario: "Imobiliária com 15 corretores que recebia mais de 500 leads/mês de portais, mas convertia menos de 3% por demora no atendimento e falta de follow-up estruturado.",
    strategy: "Implementamos atendimento automático 24/7 no WhatsApp com qualificação por interesse (compra/locação), valor e região. Leads qualificados são distribuídos automaticamente para corretores com agendamento de visitas integrado ao Google Calendar.",
    results: [
      "Tempo de resposta: de 4h para 30 segundos",
      "Taxa de conversão: de 3% para 8.5%",
      "Agendamentos de visita: +180% em 90 dias",
      "Leads perdidos por falta de retorno: redução de 85%",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Scale,
    segment: "Escritório de Advocacia",
    title: "Captação e qualificação de casos",
    scenario: "Escritório especializado em direito empresarial que recebia muitas consultas, mas gastava tempo excessivo com casos que não se encaixavam no perfil do escritório.",
    strategy: "Criamos um sistema de triagem automática que qualifica casos por área, valor estimado e urgência. Apenas casos compatíveis são encaminhados para os sócios, com toda a documentação básica já coletada.",
    results: [
      "Tempo de triagem: de 2h para 5 minutos",
      "Casos qualificados: +65% de assertividade",
      "Reuniões agendadas: +40% com prospects qualificados",
      "Produtividade dos sócios: +50% em atividades estratégicas",
    ],
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: Heart,
    segment: "Clínica de Estética",
    title: "Redução de no-show e reativação",
    scenario: "Clínica com alta taxa de faltas em procedimentos agendados e dificuldade em reativar clientes que não retornavam há mais de 6 meses.",
    strategy: "Implementamos confirmação automática 48h e 2h antes dos procedimentos, com opção de reagendamento fácil. Para clientes inativos, criamos campanha de reativação com ofertas personalizadas baseadas no histórico.",
    results: [
      "Taxa de no-show: de 28% para 8%",
      "Clientes reativados: 120 em 60 dias",
      "Ocupação da agenda: de 65% para 89%",
      "Faturamento mensal: +35%",
    ],
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Laptop,
    segment: "Infoprodutor",
    title: "Escala de vendas high-ticket",
    scenario: "Mentor com mentoria de R$ 12.000 que recebia centenas de interessados no Direct, mas não conseguia qualificar e converter em escala sem uma equipe comercial grande.",
    strategy: "Automatizamos o fluxo de qualificação com perguntas estratégicas, validação de perfil e agendamento de calls de venda apenas com leads que atendiam aos critérios do programa.",
    results: [
      "Leads qualificados/semana: de 15 para 65",
      "Calls de venda/semana: de 8 para 25",
      "Taxa de fechamento: mantida em 35%",
      "Vendas mensais: de 3 para 9 mentorias",
    ],
    color: "from-orange-500 to-amber-500",
  },
];

export default function Cases() {
  return (
    <Layout>
      {/* Hero */}
      <section className="hero-bg py-20 md:py-32 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6">
              Cases de Sucesso
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Resultados reais de{" "}
              <span className="text-gradient-cta">clientes reais</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Conheça histórias de empresas que transformaram suas operações 
              com orquestração digital da Connect Labs.
            </p>
          </div>
        </div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cta/10 rounded-full blur-3xl" />
      </section>

      {/* Cases */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="space-y-16">
            {cases.map((caseItem, index) => (
              <div key={index} className="card-premium overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${caseItem.color}`} />
                <div className="p-8 md:p-12">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <caseItem.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <span className="text-sm text-accent font-medium">{caseItem.segment}</span>
                      <h2 className="text-2xl font-heading font-bold text-foreground">
                        {caseItem.title}
                      </h2>
                    </div>
                  </div>

                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Cenário */}
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-3 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-xs font-bold">1</span>
                        Cenário
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {caseItem.scenario}
                      </p>
                    </div>

                    {/* Estratégia */}
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-3 flex items-center gap-2">
                        <span className="w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center text-xs font-bold">2</span>
                        Estratégia
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {caseItem.strategy}
                      </p>
                    </div>

                    {/* Resultados */}
                    <div>
                      <h3 className="font-heading font-semibold text-foreground mb-3 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-cta" />
                        Impacto
                      </h3>
                      <ul className="space-y-2">
                        {caseItem.results.map((result, rIndex) => (
                          <li key={rIndex} className="text-sm text-foreground flex items-start gap-2">
                            <span className="text-cta">✓</span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Quer resultados assim para seu negócio?"
        subtitle="Converse com nossos especialistas e descubra como podemos transformar sua operação."
        buttonText="Quero resultados como esses"
        buttonLink="/contato"
      />
    </Layout>
  );
}
