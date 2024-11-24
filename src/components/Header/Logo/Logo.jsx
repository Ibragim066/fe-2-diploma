import { Link } from "react-router-dom";
import "./Logo.css";


export default function Logo() {
  return (
    <div className="header__logo">
       <Link to="/" className="header__logo__link">
      Лого
    </Link> 
    </div>
  );
}