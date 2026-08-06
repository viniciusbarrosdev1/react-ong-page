import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/header/logo.png";

interface IProps {
  titulo: string;
}

const menuItems = [
  { label: "Início", to: "/" },
  { label: "Animais", to: "/animais" },
  { label: "Voluntariado", to: "/voluntariado" },
  { label: "Achados e Perdidos", to: "/perdidos-encontrados" },
];

function Header({ titulo }: IProps) {
  const [menuAberto, setMenuAberto] = useState(false);

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `transition-colors hover:text-blue-400 ${isActive ? "text-blue-400 font-semibold" : ""}`;

  return (
    <header className="bg-[var(--cor-primaria)] text-white shadow-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo + Título */}
        <Link to="/" className="flex items-center gap-4">
          <img src={logo} alt="Logo" className="h-12 w-12 object-contain rounded-2xl" />

          <h1 className="text-2xl font-bold">ONG Adote um Amigo</h1>
        </Link>

        {/* Navegação */}
        <nav className="hidden items-center gap-8 md:flex">
          {menuItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClasses}>
              {item.label}
            </NavLink>
          ))}
        </nav>


        {/* Botão Mobile */}
        <button
          className="text-3xl md:hidden"
          onClick={() => setMenuAberto((aberto) => !aberto)}
          aria-label="Abrir menu"
          aria-expanded={menuAberto}
        >
          {menuAberto ? "✕" : "☰"}
        </button>
      </div>

      {/* Navegação Mobile */}
      {menuAberto && (
        <nav className="flex flex-col gap-4 border-t border-white/20 px-6 py-4 md:hidden">
          {menuItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={linkClasses}
              onClick={() => setMenuAberto(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Header;
