import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("Erro 404: Usuário tentou acessar rota inexistente:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center p-8">
        <div className="text-8xl mb-6">🔍</div>
        <h1 className="text-5xl font-bold text-foreground mb-3">404</h1>
        <p className="text-xl text-muted-foreground font-medium mb-6">Ops! Página não encontrada</p>
        <p className="text-muted-foreground mb-8 max-w-xs mx-auto">
          Parece que essa página foi para revelar. Que tal voltarmos ao início?
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-full bg-primary text-white px-8 py-3 text-sm font-bold shadow-md hover:bg-primary/90 transition-colors"
        >
          🏠 Voltar para o Início
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
