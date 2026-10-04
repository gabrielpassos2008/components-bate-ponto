import Menu from "../Menu/Menu";
import "./Sidebar.css";

function Sidebar({ itens, children }) {
  return (
    <aside className="sidebar">
      {itens && <Menu itens={itens} />}
      {children}
    </aside>
  );
}

export default Sidebar;
