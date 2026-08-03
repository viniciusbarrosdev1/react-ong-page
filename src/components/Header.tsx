import logo from "../assets/header/logo.png";

interface IProps {
    titulo: string
}

function Header({ titulo }: IProps) {
  return (
    <header>
      <img src={logo} alt="Logo" /> 
      <h1>{ titulo }</h1>
    </header>
  );
}

export default Header
