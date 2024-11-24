import "./Description.css";
import description1 from "../../img/description1.png";
import description2 from "../../img/description2.png";
import description3 from "../../img/description3.png";

export default function Description() {
    return (
        <section className="description" name="description" id="description">
        <div className="description__container">
            <div className="description__header">
                <h2 className="description__title">Как это работает</h2>
                <button className="description__button">Узнать больше</button>
            </div>
            <div className="description__content">
                <div className="description__item">
                <img className="description__icon" src={description1} alt="удобный заказ на сайте"/>
                <div className="description__text">Удобный заказ на сайте</div>
            </div>
            <div className="description__item">
                <img className="description__icon" src={description2} alt="нет необходимости ехать в офис"/>
                <div className="description__text">Нет необходимости ехать в офис</div>
            </div>
            <div className="description__item">
                <img className="description__icon" src={description3} alt="огромный выбор направлений"/>
                <div className="description__text">Огромный выбор направлений</div>
            </div>
            </div>
        </div>
    </section>
    );
}
