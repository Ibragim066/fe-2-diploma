import phone from "../../../img/phone_icon.png";
import mail from "../../../img/mail_icon.png";
import skype from "../../../img/skype_icon.png";
import geo from "../../../img/geo_icon.png";
import "./Contacts.css";


export default function Contacts() {
    return (
        <div className="footer__contacts" id="contacts">
            <h3 className="footer__contacts__title">Свяжитесь с нами</h3>
            <ul className="footer__contacts__list">
                <li className="footer__contacts__item">
                    <img className="footer__contacts__icon" src={phone} alt="phone"/>
                    <a className="footer__contacts__link" href="tel:+78000000000">8 (800) 000 00 00</a>
                </li>
                <li className="footer__contacts__item">
                    <img className="footer__contacts__icon" src={mail} alt="mail"/>
                    <a className="footer__contacts__link" href="mailtto:inbox@mail.ru">inbox@mail.ru</a>
                </li>
                <li className="footer__contacts__item">
                    <img className="footer__contacts__icon" src={skype} alt="skype"/>
                    <a className="footer__contacts__link" href="skype:tu.train.tickets?call">tu.train.tickets</a>  
                </li>
                <li className="footer__contacts__item">
                    <img className="footer__contacts__icon" src={geo} alt="geo"/>
                    <a className="footer__contacts__link" href="https://yandex.ru/maps/213/moscow/?ll=37.622504%2C55.753215&z=10">г. Москва <br /> ул. Московская 27-35 <br /> 555 555</a>  
                </li>
            </ul>
        </div>
    )
}