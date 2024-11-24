import { HashLink as NavLink } from "react-router-hash-link";
import "./Menu.css";

export default function Menu() {
    return (
      <nav className="header__navbar">
      <ul className="header__navbar__list">
        <li className="header__nav-item active">
        <NavLink exact to="/#about" className="nav-link">
          О нас
        </NavLink>
        </li>
        <li className="header__nav-item">
        <NavLink to="/#description" className="nav-link">
          Как это работает
        </NavLink>
        </li>
        <li className="header__nav-item">
        <NavLink to="/#feedbacks" className="nav-link">
          Отзывы
        </NavLink>
        </li>
        <li className="header__nav-item">
        <NavLink to="/#contacts" className="nav-link" href="/contacts.html">
          Контакты
        </NavLink>
        </li>
      </ul>
      </nav>
    )
}