import { useState } from 'react';
import PropTypes from 'prop-types';
import "./PriceFilters.css";

export default function PriceFilters(props) {
    const { min, max, setMin, setMax, changeRange, isDisabled } = props;

    const [curX, setCurX] = useState(0);

  const minLimit = 500;
  const maxLimit = 5000;
  const step = 100;
  const minDiff = 1000;

  let curMinValue = min >= minLimit ? min : minLimit;
  let curMaxValue = max <= maxLimit ? max : maxLimit;
  if (curMinValue + minDiff > curMaxValue) {
    curMinValue = minLimit;
    curMaxValue = maxLimit;
  }

  const curMinPos = Math.round((curMinValue - minLimit) / (maxLimit - minLimit) * 100);
  const curMaxPos = 100 - Math.round((curMaxValue - minLimit) / (maxLimit - minLimit) * 100);

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
    const deltaX = evt.target.parentElement.parentElement.clientWidth * step / (maxLimit - minLimit);

    if (evt.clientX > curX + deltaX) {
      setCurX(evt.clientX);
      if (curMinValue + minDiff < curMaxValue) {
        curMinValue += step;
        setMin(curMinValue);
      }
    }

    if (evt.clientX < curX - deltaX) {
      setCurX(evt.clientX);
      if (curMinValue > minLimit) {
        curMinValue -= step;
        setMin(curMinValue > minLimit ? curMinValue : minLimit);
      }
    }
  }

  const onPointerMoveMax = (evt) => {
    if (evt.buttons !== 1 || isDisabled) {
      return;
    }
  
    const deltaX = evt.target.parentElement.parentElement.clientWidth * step / (maxLimit - minLimit);

    if (evt.clientX < curX - deltaX) {
      setCurX(evt.clientX);
      if (curMinValue + minDiff < curMaxValue) {
        curMaxValue -= step;
        setMax(curMaxValue);
      }
    }

    if (evt.clientX > curX + deltaX) {
      setCurX(evt.clientX);
      if (curMaxValue < maxLimit) {
        curMaxValue += step;
        setMax(curMaxValue < maxLimit ? curMaxValue : maxLimit);
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
    <div className="price-filters-block"> 
      <div className={'price-filters-block__range' + (isDisabled ? ' price-filters-block__range_disabled' : '')} style={{ left: `${curMinPos}%`, right: `${curMaxPos}%` }}>
        <div className="price-filters-block_handle price-filters-block__handle-min" onPointerDown={onPointerMinDown} onPointerMove={onPointerMoveMin} onPointerUp={onPointerMinUp}>
          <p className="price-filters-block__handle-title">
            от
          </p>
          <p className="price-filters-block__handle-value">
            {curMinValue > minLimit ? curMinValue : 'min'}
          </p>
        </div>
        <div className="price-filters-block__handle price-filters-block__handle-max" onPointerDown={onPointerMaxDown} onPointerMove={onPointerMoveMax} onPointerUp={onPointerMaxUp}>
          <p className="price-filters-block__handle-title">
            до
          </p>
          <p className="price-filters-block__handle-value">
            {curMaxValue < maxLimit ? curMaxValue : 'max'}
          </p>
        </div>
      </div>
    </div>    
  )
}

PriceFilters.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    setMin: PropTypes.func.isRequired,
    setMax: PropTypes.func.isRequired,
    changeRange: PropTypes.func.isRequired,
    isDisabled: PropTypes.bool.isRequired
};
  

