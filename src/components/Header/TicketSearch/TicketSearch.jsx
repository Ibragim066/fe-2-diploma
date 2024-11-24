import React, { useState, useContext } from "react";
import AppContext from "../../../AppContext";
// import { useDispatch, useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import { registerLocale } from  "react-datepicker";
import ru from 'date-fns/locale/ru';
import "react-datepicker/dist/react-datepicker.css";
import DestinationInput from "./DestinationInput";
import { useHistory } from 'react-router-dom';
import {fetchCities} from "../../../api/fetchCities";
import { fetchRoutes } from "../../../api/fetchRoutes";
import PropTypes from 'prop-types';
import "./TicketSearch.css";



registerLocale('ru', ru);

export default function TicketSearch(props) {
    const { setTrainsInfo, setDepartureTrain, setArrivalTrain } = useContext(AppContext);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    
    const {classToggle} = props;
    const formClassName = 'header__search-form' + (classToggle ? ` header__search-form${classToggle}` : '');
    const labelClassName = 'header__search__label' + (classToggle ? ` header__search__label${classToggle}` : '');
    const buttonClassName = 'header__search__btn' + (classToggle ? ` header__search__btn${classToggle}` : '');
    
   

    const initialFormState = {
        from: '',
        to: '', 
      };
    
      const [formState, setFormState] = useState(initialFormState);
      
      const history = useHistory();

      const fromHandleChange = (value) => {
        setFormState({ ...formState, from: value });
      }; 
    
      const toHandleChange = (value) => {
        setFormState({ ...formState, to: value });
      };

      const swapDestination = () => {
        const from = formState.to;
        const to = formState.from;
        setFormState({ ...formState, from, to });
      }

    const getCityId = async (name) => {
        const cities = await fetchCities(name);
        const cityId = cities.find((el) => el.name === name)._id;
        return cityId;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const fromCityId = await getCityId(formState.from);
        const toCityId = await getCityId(formState.to);
        //console.log(fromCityId, toCityId);
        
        const searchResult = await fetchRoutes(setTrainsInfo, {
            fromCityId,
            toCityId,
            startDate,
            endDate,
            limit: 5,
            offset: 0,
            sort: "date",
            direction: "forward",
        });

        //console.log(searchResult);
        history.push("trains");
        setFormState(initialFormState);
        setDepartureTrain(null);
        setArrivalTrain(null);
        localStorage.setItem('departureTrain', null);
        localStorage.setItem('arrivalTrain', null);
    }
    
    
    return (
        <div className="header__search">
            <form className={formClassName} onSubmit={handleSubmit}>
                
                    <label className={labelClassName}>Направление</label>
                    <div className="header__search__destination">
                    <div className="input-container">
                    <DestinationInput name='from' value={formState.from} placeholder='Откуда' setValue={fromHandleChange} />
                    </div>
                    <button className="header__search__swap-btn" onClick={swapDestination} type="button"></button>
                    <div className="input-container">
                    <DestinationInput name='to' value={formState.to} placeholder='Куда' setValue={toHandleChange} />
                    </div>
                </div>
                
                <label className={labelClassName}>Дата</label>
                <div className="header__search__date">
                <DatePicker className="header__search__datepicker"
            locale="ru" 
            dateFormat="dd/MM/yyyy" 
            minDate={Date.now()} 
            selected={startDate} 
            placeholderText="ДД/ММ/ГГ"
            onChange={(date) => setStartDate(date)} />
            <DatePicker className="header__search__datepicker"
        locale="ru" 
        dateFormat="dd/MM/yyyy" 
        minDate={Date.now()} 
        selected={endDate}
        placeholderText="ДД/ММ/ГГ"
        onChange={(date) => setEndDate(date)} />
                </div>
                <button className={buttonClassName} type="submit">Найти билеты</button>
            </form>
        </div>
    )
}

TicketSearch.propTypes = {
    classTogle: PropTypes.string.isRequired,
}