import Contacts from "./Contacts/Contacts";
import SocialMedia from "./SocialMedia/SocialMedia";
import Subscription from "./Subscription/Subscription";
import "./Footer.css";

export default function Footer() {
    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="footer">
            <div className="footer__main">
            <Contacts />
            <div className="footer__subscription-options">
                <Subscription />
                <SocialMedia />
            </div>
            </div>
            <div className="footer__bottom">
                <div className="footer__logo">Лого</div>
                <button className="footer__scrollup" onClick={handleClick}></button>
                <div className="footer__copyright">2018 Web</div>
            </div>
        </footer>
    );
}