import  { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSubscribe } from "../../../api/fetchSubscribe";
import "./Subscription.css";

export default function Subscription() {
    //const status = useSelector((store) => store.subscribe.status);
    //const dispatch = useDispatch();
    const [email, setEmail] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(email);
        const response = await fetchSubscribe(email);
        setEmail("");
    };

    const handleChange = (event) => {
        setEmail(event.target.value);
        console.log(event.target.value);
    }

    return (
        <div>
        <form className="footer__subscribe" onSubmit={handleSubmit}>
            <h3 className="footer__subscription__title">Подписка</h3>
            <label className="footer__subscription__label">Будьте в курсе событий</label>
            <input 
            className="footer__subscription__input"
            name="email"
            type="text"
            value={email}
            placeholder="e-mail"
            onChange={handleChange} />
        <button className="footer__subscribe__btn" type="submit">Отправить</button>
        </form>
        </div>
    )
}