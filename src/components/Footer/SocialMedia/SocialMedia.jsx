/* eslint-disable jsx-a11y/anchor-is-valid */
import youtube from "../../../img/youtube_icon.svg";
import linkedin from "../../../img/linkedin_icon.svg";
import google from "../../../img/google_icon.svg";
import facebook from "../../../img/fb_icon.svg";
import twitter from "../../../img/twitter_icon.svg";
import "./SocialMedia.css";

export default function SocialMedia() {
    return (
        <div className="footer__socials">
            <h3 className="footer__socials__title">Подписывайтесь на нас</h3>
            <ul className="footer__socials__list">
                <li className="footer__socials__item">
                    <a className="footer__socials__link" href="#">
                        <img className="footer__socials__icon" src={youtube} alt="youtube" />
                    </a>
                </li>
                <li className="footer__socials__item">
                    <a className="footer__socials__link" href="#">
                        <img className="footer__socials__icon" src={linkedin} alt="linkedin" />
                    </a>
                </li>
                <li className="footer__socials__item">
                    <a className="footer__socials__link" href="#">
                        <img className="footer__socials__icon" src={google} alt="google" />
                    </a>
                </li>
                <li className="footer__socials__item">
                    <a className="footer__socials__link" href="#">
                        <img className="footer__socials__icon" src={facebook} alt="facebook" />
                    </a>
                </li>
                <li className="footer__socials__item">
                    <a className="footer__socials__link" href="#">
                        <img className="footer__socials__icon" src={twitter} alt="twitter" />
                    </a>
                </li>
            </ul>
        </div>
    )
}