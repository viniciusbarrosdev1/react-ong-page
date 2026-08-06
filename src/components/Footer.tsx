import { Link } from "react-router-dom";
import { SiInstagram } from "@icons-pack/react-simple-icons";

const menuItems = [
  { label: "Início", to: "/" },
  { label: "Animais", to: "/animais" },
  { label: "Voluntariado", to: "/voluntariado" },
  { label: "Achados e Perdidos", to: "/perdidos-encontrados" },
];

function Footer() {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className="w-full bg-[var(--cor-primaria)] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="">
            <h3 className="mb-3 text-lg font-bold">Sobre Nós</h3>
            <p className="text-sm leading-relaxed text-white/80">
              Somos uma ONG dedicada ao resgate, cuidado e adoção responsável de
              animais em situação de vulnerabilidade.
            </p>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-bold">Navegação</h3>
            <ul className="flex flex-col gap-2 text-sm">
              {menuItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-white/80 transition-colors hover:text-blue-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-bold">Contato</h3>
            <ul className="flex flex-col gap-2 text-sm text-white/80">
              <li>contato@adoteumamigo.org</li>
              <li>(44) 99999-9999</li>
              <li>Umuarama, PR</li>
            </ul>

            <div className="mt-4">
              <a href="https://instagram.com/versiteaaredirecionar" target="_blank">
                <SiInstagram className="h-5 w-5" />{" "}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/20 pt-6 text-xs text-white/60 md:flex-row">
          <p>© {anoAtual} Todos os direitos reservados.</p>
          <p>Desenvolvido por Vinicius Barros — Dev</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
