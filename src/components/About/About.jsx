import "./About.css";

export default function About() {
    return (
        <section className="about" name="about" id="about">
            <h2 className="about__title">О нас</h2>
            <div className="about__content">
                <p className="about__text">
                Мы рады видеть вас! Мы работаем для Вас с 2003 года. 14 лет мы наблюдаем, как с каждым днем все больше людей заказывают жд билеты через интернет.
                </p>
                <p className="about__text">
                Сегодня можно заказать железнодорожные билеты онлайн всего в 2 клика, но стоит ли это делать? 
                <br/>
                Мы расскажем о преимуществах заказа через интернет.
                </p>
                <p className="about__text">
                Покупать жд билеты дешево можно за 90 суток до отправления поезда. 
                <br/>
                Благодаря динамическому ценообразованию цена на билеты в это время самая низкая.
                </p>
            </div>
        </section>
    )
}