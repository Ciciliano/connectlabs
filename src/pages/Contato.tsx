import { useState } from "react";
import { 
  Mail, 
  Phone, 
  MapPin,
  Calendar,
  ArrowRight,
  CheckCircle2,
  Send
} from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { SectionHeader } from "@/components/ui/SectionComponents";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Mail,
    title: "E-mail",
    value: "contato@connectlabs.com.br",
    href: "mailto:contato@connectlabs.com.br",
  },
  {
    icon: Phone,
    title: "Telefone",
    value: "(11) 99999-9999",
    href: "tel:+5511999999999",
  },
  {
    icon: Calendar,
    title: "Agendamento",
    value: "Agende uma reunião online",
    href: "#agendar",
  },
];

const faqs = [
  {
    question: "Quanto tempo leva para implementar?",
    answer: "A implementação inicial leva de 2 a 4 semanas, dependendo da complexidade do projeto.",
  },
  {
    question: "Preciso ter conhecimento técnico?",
    answer: "Não. Cuidamos de toda a parte técnica e oferecemos treinamento completo para sua equipe.",
  },
  {
    question: "Funciona para empresas pequenas?",
    answer: "Sim! Temos soluções escaláveis que se adaptam a empresas de todos os tamanhos.",
  },
];

export default function Contato() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    segment: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });

    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      segment: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="hero-bg py-20 md:py-28 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-6">
              Contato
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              Vamos conversar sobre{" "}
              <span className="text-gradient-cta">seu projeto?</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Preencha o formulário abaixo ou agende uma conversa diretamente 
              com nossos especialistas.
            </p>
          </div>
        </div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cta/10 rounded-full blur-3xl" />
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="card-premium p-8 md:p-10">
                <h2 className="text-2xl font-heading font-bold mb-6 text-foreground">
                  Formulário de contato estratégico
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome completo *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Seu nome"
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="seu@email.com"
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">WhatsApp *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="(00) 00000-0000"
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Empresa</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Nome da empresa"
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="segment">Segmento de atuação *</Label>
                    <Select
                      value={formData.segment}
                      onValueChange={(value) =>
                        setFormData({ ...formData, segment: value })
                      }
                    >
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Selecione seu segmento" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="imobiliaria">Imobiliária / Construtora</SelectItem>
                        <SelectItem value="advocacia">Advocacia / Consultoria</SelectItem>
                        <SelectItem value="saude">Saúde / Estética</SelectItem>
                        <SelectItem value="digital">Negócio Digital / Infoprodutor</SelectItem>
                        <SelectItem value="b2b">Empresa B2B</SelectItem>
                        <SelectItem value="outro">Outro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Como podemos ajudar? *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Descreva brevemente seu desafio atual ou o que busca resolver..."
                      rows={5}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-cta w-full text-lg h-14"
                  >
                    {isSubmitting ? (
                      "Enviando..."
                    ) : (
                      <>
                        Enviar mensagem
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="card-premium p-6">
                <h3 className="text-lg font-heading font-semibold mb-4 text-foreground">
                  Outras formas de contato
                </h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-muted transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                        <info.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.title}</p>
                        <p className="font-medium text-foreground group-hover:text-accent transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Calendar Embed Placeholder */}
              <div id="agendar" className="card-premium p-6">
                <h3 className="text-lg font-heading font-semibold mb-4 text-foreground">
                  Agende uma reunião
                </h3>
                <p className="text-muted-foreground mb-4">
                  Prefere uma conversa ao vivo? Escolha o melhor horário para você.
                </p>
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center"
                >
                  <Calendar className="w-5 h-5" />
                  Abrir agenda
                </a>
              </div>

              {/* FAQs */}
              <div className="card-premium p-6">
                <h3 className="text-lg font-heading font-semibold mb-4 text-foreground">
                  Perguntas frequentes
                </h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index}>
                      <p className="font-medium text-foreground mb-1">{faq.question}</p>
                      <p className="text-sm text-muted-foreground">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-muted">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {[
              "Resposta em até 2h úteis",
              "Consultoria inicial gratuita",
              "Sem compromisso",
              "+150 empresas atendidas",
            ].map((badge, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span className="text-foreground font-medium">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
