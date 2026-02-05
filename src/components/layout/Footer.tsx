import { Link } from "react-router-dom";
import { Mail, Phone, Linkedin, Instagram } from "lucide-react";
import logoConnectLabs from "@/assets/logo-connect-labs.png";

const footerLinks = {
  empresa: [
    { name: "Sobre", href: "/sobre" },
    { name: "Cases", href: "/cases" },
    { name: "Contato", href: "/contato" },
  ],
  solucoes: [
    { name: "Orquestração Digital", href: "/solucoes" },
    { name: "Automação com IA", href: "/solucoes" },
    { name: "Integração CRM", href: "/solucoes" },
  ],
  segmentos: [
    { name: "Imobiliárias", href: "/segmentos" },
    { name: "Advocacia", href: "/segmentos" },
    { name: "Saúde e Estética", href: "/segmentos" },
    { name: "Negócios Digitais", href: "/segmentos" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img 
                src={logoConnectLabs} 
                alt="Connect Labs" 
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-primary-foreground/80 mb-6 max-w-sm leading-relaxed">
              Orquestração digital inteligente para empresas que precisam de previsibilidade, 
              escala e eficiência real em vendas e atendimento.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Soluções</h4>
            <ul className="space-y-3">
              {footerLinks.solucoes.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4">Segmentos</h4>
            <ul className="space-y-3">
              {footerLinks.segmentos.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row gap-6 text-sm text-primary-foreground/70">
              <a href="mailto:contato@connectlabs.com.br" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Mail className="w-4 h-4" />
                contato@connectlabs.com.br
              </a>
              <a href="tel:+5516997532209" className="flex items-center gap-2 hover:text-accent transition-colors">
                <Phone className="w-4 h-4" />
                (16) 99753-2209
              </a>
            </div>
            <p className="text-sm text-primary-foreground/50">
              © {new Date().getFullYear()} Connect Labs. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
