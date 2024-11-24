import PropTypes from 'prop-types';
import "./TrainOptions.css";


export default function TrainOptions(props) {
    const { iconName, iconWidth, iconHeight, name, value, setValue } = props;
  
    return (
      <div className="train-options-checkbox"> 
        <img className="train-options-checkbox__icon" src={iconName} width={iconWidth} height={iconHeight} />
        <p className="train-options-checkbox__title">
          {name}
        </p>
        <div className={'train-options-checkbox__selector ' + (value ? 'train-options-checkbox__selector_on' : 'train-options-checkbox__selector_off')} onClick={() => setValue(!value)}>
          <div className={'train-options-checkbox__handle ' + (value ? 'train-options-checkbox__handle_on' : 'train-options-checkbox__handle_off')}>
          </div>
        </div>
      </div>    
    )
  }
  
  TrainOptions.propTypes = {
    iconName: PropTypes.string.isRequired,
    iconWidth: PropTypes.number.isRequired,
    iconHeight: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.bool.isRequired,
    setValue: PropTypes.func.isRequired
  };