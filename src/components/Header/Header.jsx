import { useContext } from 'react';
import AppContext from "../../AppContext";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
import "./Header.css";
import TicketSearch from "./TicketSearch/TicketSearch";

export default function Header() {
    const { bookingStage } = useContext(AppContext);
    let classToggle = "";

    switch (bookingStage) {
        case 'trainsSelection':
        case 'seatsSelection':
        case 'passengersInfo':
        case 'payment':
        case 'orderConfirmation':
          classToggle = '_trains';
          break;
        case 'completion':
          classToggle = '_completion';
          break;
        default:
      }

      const headerClassName = 'header' + (classToggle ? ` header${classToggle}` : '');
      const headerTopClassName = 'header__top' + (classToggle ? ` header__top${classToggle}` : '');

    return (
        <header className={headerClassName}>
            <div className={headerTopClassName}>
            <Logo />
            </div>
            <Menu />
            {classToggle !== "_completion" && 
            <div className='header__main'>
                {!classToggle &&
                   <p className='header__main__slogan'>
                       Вся жизнь - 
                       <br />
                       <span className="header__main__slogan-bold">путешествие!</span> 
                   </p>
                }
                <TicketSearch classToggle={classToggle}/>
                </div>
                }
        </header>
    );
}