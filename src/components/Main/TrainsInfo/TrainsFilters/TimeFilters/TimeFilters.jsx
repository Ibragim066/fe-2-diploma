import { useState } from 'react';
import PropTypes from 'prop-types';
import TimeFiltersItem from './TimeFiltersItem';
import "./TimeFilters.css";
import arrow_to_icon from "../../../../../img/arrow_to_icon.png";
import arrow_from_icon from "../../../../../img/arrow_from_icon.png";

export default function TimeFilters(props) {
    const { times, setTimes, changeTimes, isStart, isDisabled } = props;
    const { departureHourFrom, departureHourTo, arrivalHourFrom, arrivalHourTo } = times;
    const { setDepartureHourFrom, setDepartureHourTo, setArrivalHourFrom, setArrivalHourTo } = setTimes;
  
    const [isCollapsed, setIsCollapsed] = useState(true);
  
    const changeDepartureTimes = (min, max) => {
      const times = {
        departureHourFrom: min, 
        departureHourTo: max, 
        arrivalHourFrom, 
        arrivalHourTo
      }
      changeTimes(times);
    }
  
    const changeArrivalTimes = (min, max) => {
      const times = {
        departureHourFrom, 
        departureHourTo, 
        arrivalHourFrom: min, 
        arrivalHourTo: max
      }
      changeTimes(times);
    }
  
    return (
      <div className="trains-time-filter"> 
        <div className={'trains-time-filter__collapsed' + (isCollapsed ? '' : ' trains-time-filter__collapsed_exp')}>
            {isStart ? <img className='trains-time-filter__arrow' src={arrow_to_icon} /> : <img className='trains-time-filter__arrow' src={arrow_from_icon} />}
          <p className="trains-time-filter__title">
            {isStart ? 'Туда' : 'Обратно'}
          </p>
          <button className={'trains-time-filter__button' + (isCollapsed ? '' : ' trains-time-filter__button_minus')} type="button" onClick={() => setIsCollapsed(!isCollapsed)}>      
          </button>
        </div>
        {!isCollapsed &&
          <div className="trains-time-filter__full">
            <p className="trains-time-filter__bar-title trains-time-filter__bar-title_departure">
              Время отбытия
            </p>
            <div className="trains-time-filter__bar">
              <TimeFiltersItem 
                min={departureHourFrom}
                max={departureHourTo}
                setMin={setDepartureHourFrom}
                setMax={setDepartureHourTo}
                changeRange={changeDepartureTimes}
                isDisabled={isDisabled}
              />
            </div>
            <p className="trains-time-filter__bar-title trains-time-filter__bar-title_arrival">
              Время прибытия
            </p>
            <div className="trains-time-filter__bar">
              <TimeFiltersItem 
                min={arrivalHourFrom}
                max={arrivalHourTo}
                setMin={setArrivalHourFrom}
                setMax={setArrivalHourTo}
                changeRange={changeArrivalTimes}
                isDisabled={isDisabled}
              />
            </div>
          </div> 
        }
      </div>    
    )
  }
  
  TimeFilters.propTypes = {
    times: PropTypes.objectOf(PropTypes.number),
    setTimes: PropTypes.objectOf(PropTypes.func),
    changeTimes: PropTypes.func.isRequired,
    isStart: PropTypes.bool.isRequired,
    isDisabled: PropTypes.bool.isRequired
  };
  