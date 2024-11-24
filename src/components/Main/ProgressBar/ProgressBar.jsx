import PropTypes from 'prop-types';
import './ProgressBar.css';
import progress_bar_icon from "../../../img/progress_bar_icon.png";

export default function ProgressBar(props) {
  const { stepNumber } = props;

  const steps = [
    'Билеты',
    'Пассажиры',
    'Оплата',
    'Проверка'
  ];

  return (
    <div className="progress-bar"> 
      {steps.map((item, i, array) => {
        let stepClassName = `progress-bar__step progress-bar__step_${i + 1}`;
        if (i < stepNumber) {
          stepClassName += ' progress-bar__step_highlighted';
        }
        const stepNameClassName = `progress-bar__step-name progress-bar__step-name_${i + 1}`;

        return (
          <div className={stepClassName} key={i}>
            <p className="progress-bar__step-number">
              {i + 1}
            </p>
            <p className={stepNameClassName}>
              {item}
            </p>
            {(i < array.length - 1) && 
              <img className="progress-bar__triangle" src={progress_bar_icon} width="37" height="98" alt="triangle" />
            }
          </div>
        )
      })}
    </div>   
  )
}

ProgressBar.propTypes = {
  stepNumber: PropTypes.number.isRequired,
};
