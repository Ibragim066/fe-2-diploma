import { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from "../../../../AppContext";
import { dayInFirstPosition, dayInLastPosition } from "../../../../utils/formatting";
import TrainOptions from './TrainOptions/TrainOptions';
import PriceFilters from './PriceFilters/PriceFilters';
import TimeFilters from './TimeFilters/TimeFilters';
import DatePicker from "react-datepicker";
import { registerLocale } from  "react-datepicker";
import ru from 'date-fns/locale/ru';
import "react-datepicker/dist/react-datepicker.css";
import "./TrainsFilters.css";
import wifi_icon from "../../../../img/wifi_icon.png";
import express_icon from '../../../../img/express_icon.png';
import first_class_icon from '../../../../img/first_class_icon.png';
import second_class_icon from '../../../../img/second_class_icon.png';
import third_class_icon from '../../../../img/third_class_icon.png';
import fourth_class_icon from '../../../../img/fourth_class_icon.png';

export default function TrainsFilters(props) {
    const { reloadInfo } = props;
  
    const [dateStart, setDateStart] = useState('');
    const [dateEnd, setDateEnd] = useState('');
  
    const [haveFirstClass, setHaveFirstClass] = useState(false);
    const [haveSecondClass, setHaveSecondClass] = useState(false);
    const [haveThirdClass, setHaveThirdClass] = useState(false);
    const [haveFourthClass, setHaveFourthClass] = useState(false);
    const [haveWifi, setHaveWifi] = useState(false);
    const [isExpress, setIsExpress] = useState(false);
  
    const [priceFrom, setPriceFrom] = useState(0);
    const [priceTo, setPriceTo] = useState(0);
  
    const [startDepartureHourFrom, setStartDepartureHourFrom] = useState(0);
    const [startDepartureHourTo, setStartDepartureHourTo] = useState(24);
    const [startArrivalHourFrom, setStartArrivalHourFrom] = useState(0);
    const [startArrivalHourTo, setStartArrivalHourTo] = useState(24);
    const [endDepartureHourFrom, setEndDepartureHourFrom] = useState(0);
    const [endDepartureHourTo, setEndDepartureHourTo] = useState(24);
    const [endArrivalHourFrom, setEndArrivalHourFrom] = useState(0);
    const [endArrivalHourTo, setEndArrivalHourTo] = useState(24);
  
    const { bookingStage, trainsInfo, seatsInfo } = useContext(AppContext);
  
    useEffect(() => {
      setDateStart(dayInFirstPosition(trainsInfo.params.startDate));
    }, [trainsInfo.params.startDate]);
  
    useEffect(() => {
      setDateEnd(dayInFirstPosition(trainsInfo.params.dateEnd));
    }, [trainsInfo.params.endDate]);
  
    useEffect(() => { 
      setHaveFirstClass(!!(bookingStage === 'trains' ? trainsInfo.params.haveFirstClass : seatsInfo.params.haveFirstClass));
    }, [bookingStage, trainsInfo.params.haveFirstClass, seatsInfo.params.haveFirstClass]);
  
    useEffect(() => {
      setHaveSecondClass(!!(bookingStage === 'trains' ? trainsInfo.params.haveSecondClass : seatsInfo.params.haveSecondClass));
    }, [bookingStage, trainsInfo.params.haveSecondClass, seatsInfo.params.haveSecondClass]);
  
    useEffect(() => {
      setHaveThirdClass(!!(bookingStage === 'trains' ? trainsInfo.params.haveThirdClass : seatsInfo.params.haveThirdClass));
    }, [bookingStage, trainsInfo.params.haveThirdClass, seatsInfo.params.haveThirdClass]);
  
    useEffect(() => {
      setHaveFourthClass(!!(bookingStage === 'trains' ? trainsInfo.params.haveFourthClass : seatsInfo.params.haveFourthClass));
    }, [bookingStage, trainsInfo.params.haveFourthClass, seatsInfo.params.haveFourthClass]);
  
    useEffect(() => {
      setHaveWifi(!!(bookingStage === 'trains' ? trainsInfo.params.haveWifi : seatsInfo.params.haveWifi));
    }, [bookingStage, trainsInfo.params.haveWifi, seatsInfo.params.haveWifi]);
  
    useEffect(() => {
      setIsExpress(!!(bookingStage === 'trains' ? trainsInfo.params.isExpress : seatsInfo.params.isExpress));
    }, [bookingStage, trainsInfo.params.isExpress, seatsInfo.params.isExpress]);
  
    useEffect(() => {
      if (trainsInfo.params.priceFrom !== undefined) {
        setPriceFrom(trainsInfo.params.priceFrom);
      }
    }, [trainsInfo.params.priceFrom]);
  
    useEffect(() => {
      if (trainsInfo.params.priceTo !== undefined) {
        setPriceTo(trainsInfo.params.priceTo);
      }
    }, [trainsInfo.params.priceTo]);
  
    useEffect(() => {
      if (trainsInfo.params.startDepartureHourFrom !== undefined) {
        setStartDepartureHourFrom(trainsInfo.params.startDepartureHourFrom);
      }
    }, [trainsInfo.params.startDepartureHourFrom]);
  
    useEffect(() => {
      if (trainsInfo.params.startDepartureHourTo !== undefined) {
        setStartDepartureHourTo(trainsInfo.params.startDepartureHourTo);
      }
    }, [trainsInfo.params.startDepartureHourTo]);
  
    useEffect(() => {
      if (trainsInfo.params.startArrivalHourFrom !== undefined) {
        setStartArrivalHourFrom(trainsInfo.params.startArrivalHourFrom);
      }
    }, [trainsInfo.params.startArrivalHourFrom]);
  
    useEffect(() => {
      if (trainsInfo.params.startArrivalHourTo !== undefined) {
        setStartArrivalHourTo(trainsInfo.params.startArrivalHourTo );
      }
    }, [trainsInfo.params.startArrivalHourTo]);
  
    useEffect(() => {
      if (trainsInfo.params.endDepartureHourFrom !== undefined) {
        setEndDepartureHourFrom(trainsInfo.params.endDepartureHourFrom);
      }
    }, [trainsInfo.params.endDepartureHourFrom]);
  
    useEffect(() => {
      if (trainsInfo.params.endDepartureHourTo !== undefined) {
        setEndDepartureHourTo(trainsInfo.params.endDepartureHourTo);
      }
    }, [trainsInfo.params.endDepartureHourTo]);
  
    useEffect(() => {
      if (trainsInfo.params.endArrivalHourFrom !== undefined) {
        setEndArrivalHourFrom(trainsInfo.params.endArrivalHourFrom);
      }
    }, [trainsInfo.params.endArrivalHourFrom]);
  
    useEffect(() => {
      if (trainsInfo.params.endArrivalHourTo !==undefined) {
        setEndArrivalHourTo(trainsInfo.params.endArrivalHourTo);
      }
    }, [trainsInfo.params.endArrivalHourTo]);
  
    const changeDateStart = (date) => {
      setDateStart(date);
      if(!date) {
        reloadInfo({
          dateStart: '',
          offset: 0
        });
      } else if (date.length === 10) {
        reloadInfo({
          dateStart: dayInLastPosition(date),
          offset: 0
        });
      }
    }
  
    const changeDateEnd = (date) => {
      setDateEnd(date);
      if(!date) {
        reloadInfo({
          dateEnd: '',
          offset: 0
        });
      } else if (date.length === 10) {
        reloadInfo({
          dateEnd: dayInLastPosition(date),
          offset: 0
        }); 
      }  
    }
  
    const changeHaveFirstClass = (value) => {
      setHaveFirstClass(value);
      reloadInfo({
        haveFirstClass: value,
        offset: 0
      });    
    }
  
    const changeHaveSecondClass = (value) => {
      setHaveSecondClass(value);
      reloadInfo({
        haveSecondClass: value,
        offset: 0
      });    
    }
  
    const changeHaveThirdClass = (value) => {
      setHaveThirdClass(value);
      reloadInfo({
        haveThirdClass: value,
        offset: 0
      });    
    }
  
    const changeHaveFourthClass = (value) => {
      setHaveFourthClass(value);
      reloadInfo({
        haveFourthClass: value,
        offset: 0
      });    
    }
  
    const changeHaveWifi = (value) => {
      setHaveWifi(value);
      reloadInfo({
        haveWifi: value,
        offset: 0
      });    
    }
  
    const changeIsExpress = (value) => {
      setIsExpress(value);
      reloadInfo({
        isExpress: value,
        offset: 0
      });    
    }
  
    const changePriceRange = (min, max) => {
      reloadInfo({
        priceFrom: min,
        priceTo: max,
        offset: 0
      });
    }
  
    const changeStartTimes = (times) => {
      reloadInfo({
        startDepartureHourFrom: times.departureHourFrom,
        startDepartureHourTo: times.departureHourTo,
        startArrivalHourFrom: times.arrivalHourFrom,
        startArrivalHourTo: times.arrivalHourTo,
        offset: 0
      });  
    }
  
    const changeEndTimes = (times) => {
      reloadInfo({
        endDepartureHourFrom: times.departureHourFrom,
        endDepartureHourTo: times.departureHourTo,
        endArrivalHourFrom: times.arrivalHourFrom,
        endArrivalHourTo: times.arrivalHourTo,
        offset: 0
      });  
    }
  
    const startTimes = {
      departureHourFrom: startDepartureHourFrom,
      departureHourTo: startDepartureHourTo,
      arrivalHourFrom: startArrivalHourFrom,
      arrivalHourTo: startArrivalHourTo
    };
  
    const endTimes = {
      departureHourFrom: endDepartureHourFrom,
      departureHourTo: endDepartureHourTo,
      arrivalHourFrom: endArrivalHourFrom,
      arrivalHourTo: endArrivalHourTo
    };
  
    const setStartTimes = {
      setDepartureHourFrom: setStartDepartureHourFrom,
      setDepartureHourTo: setStartDepartureHourTo,
      setArrivalHourFrom: setStartArrivalHourFrom,
      setArrivalHourTo: setStartArrivalHourTo
    };
  
    const setEndTimes = {
      setDepartureHourFrom: setEndDepartureHourFrom,
      setDepartureHourTo: setEndDepartureHourTo,
      setArrivalHourFrom: setEndArrivalHourFrom,
      setArrivalHourTo: setEndArrivalHourTo
    };
  
    return (
      <div className="trains-filters"> 
        <section className="trains-filters__dates">
          <label className="trains-filters__date-title">
            Дата поездки
            <div className="trains-filters__date-container">
            <DatePicker className='trains-filters__datepicker'
            locale="ru" 
            dateFormat="dd.MM.yyyy" 
            minDate={Date.now()} 
            selected={dateStart} 
            placeholderText="ДД.ММ.ГГ"
            onChange={changeDateStart} />
              {/* <DateInput 
                name='start-date' 
                value={dateStart}
                placeholder='ДД ММ ГГГГ' 
                setValue={changeDateStart} 
                isMini={true}
                isDisabled={!(bookingStage === 'trains' && trainsInfo.params.direction === 'forward')}
              /> */}
            </div>    
          </label>
          <label className="trains-filters__date-title">
            Дата возвращения
            <div className="trains-filters__date-container">
            <DatePicker  className='trains-filters__datepicker'
        locale="ru" 
        dateFormat="dd.MM.yyyy" 
        minDate={Date.now()} 
        selected={dateEnd}
        placeholderText="ДД.ММ.ГГ"
        onChange={changeDateEnd} />
              {/* <DateInput 
                name='end-date' 
                value={dateEnd} 
                placeholder='ДД ММ ГГГГ' 
                setValue={changeDateEnd} 
                isMini={true}
                isDisabled={!(bookingStage === 'trains' && trainsInfo.params.direction === 'backward')}
              /> */}
            </div>    
          </label>
        </section>
        <section className="trains-filters__options">
          <div className="trains-filters__option">
            <TrainOptions iconName={second_class_icon} iconWidth={17} iconHeight={17} name='Купе' value={haveSecondClass} setValue={changeHaveSecondClass} />
          </div>
          <div className="trains-filterss__option">
            <TrainOptions iconName={third_class_icon} iconWidth={17} iconHeight={17} name='Плацкарт' value={haveThirdClass} setValue={changeHaveThirdClass} />
          </div>
          <div className="trains-filters__option">
            <TrainOptions iconName={fourth_class_icon} iconWidth={14} iconHeight={23} name='Сидячий' value={haveFourthClass} setValue={changeHaveFourthClass} />
          </div>
          <div className="trains-filters__option">
            <TrainOptions iconName={first_class_icon} iconWidth={22} iconHeight={20} name='Люкс' value={haveFirstClass} setValue={changeHaveFirstClass} />
          </div>
          <div className="trains-filters__option">
            <TrainOptions iconName={wifi_icon} iconWidth={24} iconHeight={19} name='Wi-Fi' value={haveWifi} setValue={changeHaveWifi} />
          </div>
          <div className="trains-filters__option">
            <TrainOptions iconName={express_icon} iconWidth={20} iconHeight={20} name='Экспресс' value={isExpress} setValue={changeIsExpress} />
          </div>
        </section>
        <section className="trains-filters__price">
          <p className="trains-filters__price-title">
            Стоимость
          </p>
          <div className="trains-filters__price-range-bar">
            <PriceFilters 
              min={priceFrom} 
              max={priceTo} 
              setMin={setPriceFrom} 
              setMax={setPriceTo} 
              changeRange={changePriceRange} 
              isDisabled={bookingStage !== 'trains'}
            />
          </div>
        </section>
        <section className="trains-filters__times">
          <TimeFilters
            times={startTimes}
            setTimes={setStartTimes}
            changeTimes={changeStartTimes}
            isStart={true}
            isDisabled={!(bookingStage === 'trains' && trainsInfo.params.direction === 'forward')}
          />
        </section>
        <section className="trains-filters__times">
          <TimeFilters 
            times={endTimes}
            setTimes={setEndTimes}
            changeTimes={changeEndTimes}
            isStart={false}
            isDisabled={!(bookingStage === 'trains' && trainsInfo.params.direction === 'backward')}
          />
        </section>
      </div>    
    )
  }
  
  TrainsFilters.propTypes = {
    reloadInfo: PropTypes.func.isRequired
  };
  

