import "./Menu.css";

function Menu({ itens = [] }) {
  return (
    <nav className="menu">
      <ul className="menu__lista">
        {itens.map((item) => (
          <li key={item.chave} className="menu__item">
            <a
              href={item.href || "#"}
              onClick={item.onClick}
              className={`menu__link ${
                item.ativo ? "menu__link--ativo" : ""
              }`}
            >
              {item.texto}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
