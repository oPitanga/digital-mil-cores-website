import { Link } from "react-router-dom";

const SiteFooter = () => (
  <footer className="border-t border-border/50 mt-24 bg-card">
    <div className="container py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <p className="font-display text-xl font-semibold text-primary mb-3">Digital Mil Cores</p>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
            Laboratório fotográfico online profissional especializado em impressão Giclée de alta fidelidade,
            restauração de fotos e produção com qualidade arquivística desde 2010.
          </p>
        </div>
        <nav aria-label="Navegação do rodapé">
          <p className="font-display text-sm font-semibold text-primary mb-4 uppercase tracking-wider">Páginas</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Início</Link></li>
            <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Serviços</Link></li>
            <li><Link to="/knowledge" className="text-muted-foreground hover:text-primary transition-colors">Base de Conhecimento</Link></li>
            <li><Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">Perguntas Frequentes</Link></li>
            <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contato</Link></li>
            <li><Link to="/llms.txt" className="text-muted-foreground hover:text-primary transition-colors">llms.txt</Link></li>
          </ul>
        </nav>
        <div>
          <p className="font-display text-sm font-semibold text-primary mb-4 uppercase tracking-wider">Contato</p>
          <address className="text-sm text-muted-foreground not-italic space-y-2 leading-relaxed">
            <p>E-mail: info@digitalmilcores.com</p>
            <p>Telefone: +55 11 9999-0000</p>
            <p>São Paulo, SP — Brasil</p>
          </address>
        </div>
      </div>
      <div className="border-t border-border/50 mt-12 pt-6">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Digital Mil Cores. Todos os direitos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
