import { useState } from 'react';
import PropTypes from 'prop-types';
import "./TimeFiltersItem.css";
// import { Collapse, Slider } from "antd";

export default function TimeFiltersItem(props) {
    // const [isCollapsed, setIsCollapsed] = useState(true);
    // const { time, setTime, selectTime, isDeparture, isDisabled } = props;
    // const { departureHourFrom, departureHourTo, arrivalHourFrom, arrivalHourTo } = time;
    // const { setDepartureHourFrom, setDepartureHourTo, setArrivalHourFrom, setArrivalHourTo } = setTime;
    
    // const selectDepartureTime = (min, max) => {
    //     const time = {
    //         departureHourFrom: min,
    //         departureHourTo: max,
    //         arrivalHourFrom,
    //         arrivalHourTo,
    //     };
    //     selectTime(time);
    // }

    // const selectArrivalTime = (min, max) => {
    //     const time = {
    //         departureHourFrom,
    //         departureHourTo,
    //         arrivalHourFrom: min,
    //         arrivalHourTo: max,
    //     };
    //     selectTime(time);
    // }

    // return (
    //     <div className='time-filters-block'>
    //         <Slider 
    //         min={departureHourFrom}
    //         max={departureHourTo}
    //         range
    //           step={30}
    //         //   defaultValue={range}
    //           tooltipVisible
    //           tooltipPlacement="bottom"
    //           onChange={selectDepartureTime}
    //           />
    //     </div>
    // )
    
    const { min, max, setMin, setMax, changeRange, isDisabled } = props;

  const [curX, setCurX] = useState(0);

  const minDiff = 4;

  let curMinValue = min >= 0 ? min : 0;
  let curMaxValue = max <= 24 ? max : 24;
  if (curMinValue + minDiff > curMaxValue) {
    curMinValue = 0;
    curMaxValue = 24;
  }

  const curMinPos = Math.round(curMinValue / 24 * 100);
  const curMaxPos = 100 - Math.round(curMaxValue / 24 * 100);

  const onPointerMinDown = (evt) => {
    evt.target.setPointerCapture(evt.pointerId);
    setCurX(evt.clientX);
  }

  const onPointerMaxDown = (evt) => {
    evt.target.setPointerCapture(evt.pointerId); 
    setCurX(evt.clientX); 
  }

  const onPointerMoveMin = (evt) => {
    if (evt.buttons !== 1 || isDisabled) {
      return;
    }

    const deltaX = evt.target.parentElement.parentElement.clientWidth / 24;

    if (evt.clientX > curX + deltaX) {
      setCurX(evt.clientX);
      if (curMinValue + minDiff < curMaxValue) {
        setMin(curMinValue + 1);
      }
    }

    if (evt.clientX < curX - deltaX) {
      setCurX(evt.clientX);
      if (curMinValue > 0) {
        setMin(curMinValue - 1);
      }
    }
  }

  const onPointerMoveMax = (evt) => {
    if (evt.buttons !== 1 || isDisabled) {
      return;
    }
  
    const deltaX = evt.target.parentElement.parentElement.clientWidth / 24;

    if (evt.clientX < curX - deltaX) {
      setCurX(evt.clientX);
      if (curMinValue + minDiff < curMaxValue) {
        setMax(curMaxValue - 1);
      }
    }

    if (evt.clientX > curX + deltaX) {
      setCurX(evt.clientX);
      if (curMaxValue < 24) {
        setMax(curMaxValue + 1);
      }
    }
  }  

  const onPointerMinUp = () => {
    if (isDisabled) {
      return;
    }
    changeRange(min, max);
  }

  const onPointerMaxUp = () => {
    if (isDisabled) {
      return;
    }
    changeRange(min, max);
  }  

  return (
    <div className="time-filters-block"> 
      <div className={'time-filters-block__range' + (isDisabled ? ' time-filters-block__range_disabled' : '')} style={{ left: `${curMinPos}%`, right: `${curMaxPos}%` }}>
        <div className="time-filters-block__handle time-filters-block__handle-min" onPointerDown={onPointerMinDown} onPointerMove={onPointerMoveMin} onPointerUp={onPointerMinUp}>
          <p className="time-filters-block__handle-value">
            {curMinValue}:00
          </p>
        </div>
        <div className="time-filters-block__handle time-filters-block__handle-max" onPointerDown={onPointerMaxDown} onPointerMove={onPointerMoveMax} onPointerUp={onPointerMaxUp}>
          <p className="time-filters-block__handle-value">
            {curMaxValue}:00
          </p>
        </div>
      </div>
    </div>    
  )
}

TimeFiltersItem.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    setMin: PropTypes.func.isRequired,
    setMax: PropTypes.func.isRequired,
    changeRange: PropTypes.func.isRequired,
    isDisabled: PropTypes.bool.isRequired,
  };