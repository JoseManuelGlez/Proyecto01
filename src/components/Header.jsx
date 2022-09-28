import "../assets/styles/header.css";
import logoApp from "../assets/img/logo.png";


function Header() {
  return (
    <header>
      <div className="divIcono">
      <img className="icono" src={logoApp} alt="" />
      <h1 className="oeh">OEH</h1>
      </div>
    </header>
  );
}

export default Header;
/*<ul><u>Ayuda</u></ul>
      <ul><u>Soporte</u></ul>
      <ul><u>Creditos</u></ul>
      <ul><u>Perfil</u></ul>
      <ul><u>Donaciones</u></ul>
      <ul><u>Autor</u></ul>
      <ul className="referencia"><u>Referencia</u></ul> */