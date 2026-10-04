import "./Footer.css";

function Footer({ texto = "© Sistema de Bate-Ponto" }) {
  return (
    <footer className="footer">
      <span>{texto}</span>
    </footer>
  );
}

export default Footer;
