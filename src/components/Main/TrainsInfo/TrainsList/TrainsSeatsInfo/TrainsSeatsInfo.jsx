import PropTypes from 'prop-types';
import { priceFormatting } from '../../../../../utils/formatting';
import "./TrainsSeatsInfo.css";

export default function TrainsSeatsInfo(props) {
    const {trainClass, seatsAmount, price } = props;
    const {
        top_price = Infinity,
        bottom_price = Infinity,
        side_price = Infinity,
    } = price;

    const trainClassNames = ["Купе", "Плацкарт", "Сидячий", "Люкс"];

    return (
        <div className='train-class-seats'>
            <ul className='train-class-seats__list'>
                <li className='train-class-seats__item'>
                    <p className='train-class-seats__name'>{trainClassNames[trainClass - 1]}</p>
                    <p className='train-class-seats__amount'>{seatsAmount}</p>
                    <p className='train-class-seats__price-from'>от</p>
                    <p className='train-class-seats__price-value'> {priceFormatting(Math.min(top_price, bottom_price, side_price))} </p>
                    <p className='train-class-seats__price-currency'>
                    &#8381;
                    </p>
                    </li>
            </ul>
        </div>
    );
}

TrainsSeatsInfo.propTypes = {
    trainClass: PropTypes.number.isRequired,
    seatsAmount: PropTypes.number.isRequired,
    price: PropTypes.object.isRequired,
};