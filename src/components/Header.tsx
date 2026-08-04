import logo from "../assets/header/logo.png";

interface IProps {
  titulo: string;
}

function Header({ titulo }: IProps) {
  return (
    <header className="bg-[var(--cor-primaria)] text-white shadow-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo + Título */}
        <div className="flex items-center gap-4">
          <img src={logo} alt="Logo" className="h-12 w-12 object-contain rounded-2xl" />

          <h1 className="text-2xl font-bold">{titulo}</h1>
        </div>

        {/* Navegação */}
        <nav className="hidden items-center gap-8 md:flex">
          <a href="#" className="transition-colors hover:text-blue-400">
            Home
          </a>

          <a href="#" className="transition-colors hover:text-blue-400">
            Produtos
          </a>

          <a href="#" className="transition-colors hover:text-blue-400">
            Contato
          </a>
        </nav>

        {/* Botão Desktop */}
        <button className="hidden rounded-lg bg-blue-600 px-5 py-2 font-medium transition hover:bg-blue-700 md:block">
          Entrar
        </button>

        {/* Botão Mobile */}
        <button className="text-3xl md:hidden">☰</button>
      </div>
    </header>
  );
}

export default Header;
