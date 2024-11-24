import { useContext } from 'react'; 
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import AppContext from '../../../../../AppContext';
import { fetchRoutes } from '../../../../../api/fetchRoutes';
import { secToHourMin, durationToHourMin } from '../../../../../utils/formatting';
import TrainsSeatsInfo from '../TrainsSeatsInfo/TrainsSeatsInfo';
import train_icon from "../../../../../img/train_icon.png";
import forward_arrow_icon from '../../../../../img/forward_arrow_icon.png';
import backward_arrow_icon from '../../../../../img/backward_arrow_icon.png';
import wifi_icon from '../../../../../img/wifi_icon.png';
import express_icon from '../../../../../img/express_icon.png';
import "./TrainsListItem.css";


export default function TrainsListItem(props) {
    const {trainInfo, loadSeats, isForward, reloadInfo } = props;
    const { 
        from,
        to,
        train,
        duration,
        have_first_class,
        have_second_class,
        have_third_class,
        have_fourth_class,
        available_seats_info,
        price_info,
        have_wifi,
        is_express,
        _id
      } = trainInfo;
    
    const {trainsInfo, setTrainsInfo, departureTrain, setDepartureTrain, arrivalTrain, setArrivalTrain } = useContext(AppContext);
      
    const history = useHistory();
    
    const loadTrainsInfo = async () => {
        const result = await fetchRoutes(setTrainsInfo, {...trainsInfo.params,
        offset: 0,
        direction: isForward ? "forward" : "backward"
    });
    if (result) {
        history.push(process.env.REACT_APP_SERVER_URL + 'trains');
    }
    }

    const goToSeatsSelection = async () => {
        const train = JSON.stringify(trainInfo);
        if (isForward) {
            setDepartureTrain(JSON.parse(train));
            localStorage.setItem("departureTrain", train);
        } else {
            setArrivalTrain(JSON.parse(train));
            localStorage.setItem("arrivalTrain", train);
        }

        if (isForward && !arrivalTrain) {
            reloadInfo({ 
              direction: 'backward',
              offset: 0
            });    
          } else {
            const result = isForward ? await loadSeats( _id, arrivalTrain._id) : await loadSeats(departureTrain._id, _id );
            if (result) {
              history.push("seats");
            }
          }
    }


    return (
        <div className='trains-list__item'>
            <div className='trains-list__item__description'>
                <img className='trains-list__item__icon' src={train_icon} alt="train icon"/>
                {/* <p className='trains-list__item__number'>
                {train._id}
            </p> */}
            <div className='trains-list__item__route'>
                <p className='trains-list__item__route-text'>
                {from.city.name} &#8594;
            </p>
            <p className='trains-list__item__route-text'>
                {to.city.name}
            </p>
            <p className='trains-list__item__route-text'>
               "{train.name}"
            </p>
            </div>
  
            </div>
            <div className='trains-list__item__options-block'>
                <div className='trains-list__item__options'>
                <p className='trains-list__item__time'>
                    {isForward ? secToHourMin(from.datetime) : secToHourMin(to.datetime)}
                </p>
                <p className='trains-list__item__city'>
                {isForward ? from.city.name : to.city.name}
                </p>
                <p className='trains-list__item__station'>
                {isForward ? from.railway_station_name : to.railway_station_name}
                </p>
            </div>
            <div className='trains-list__item__duration'>
                <p className='trains-list__item__duration-time'>
                {durationToHourMin(duration)}
                </p>
                <div className='trains-list__item__arrow'>
                   {isForward && 
                <img className='trains-list__item__arrow-icon' src={forward_arrow_icon} alt="arrow_icon"/>
                } 
                {!isForward && 
                <img className='trains-list__item__arrow-icon' src={backward_arrow_icon} alt="arrow_icon"/>
                } 
                </div>
                
                
            </div>
            <div className='trains-list__item__options'>
                <p className='trains-list__item__time'>
                    {isForward ? secToHourMin(to.datetime) : secToHourMin(from.datetime)}
                </p>
                <p className='trains-list__item__city'>
                {isForward ? to.city.name : from.city.name}
                </p>
                <p className='trains-list__item__station'>
                {isForward ? to.railway_station_name : from.railway_station_name}
                </p>
            </div>
            </div>          
            <div className='trains-list__item__seats-block'>
                <div className='trains-list__item__seats-class-info'>
               {have_first_class && 
                   <TrainsSeatsInfo trainClass={1} seatsAmount={available_seats_info.first} price={price_info.first} />
               }
               {have_second_class && 
                   <TrainsSeatsInfo trainClass={2} seatsAmount={available_seats_info.second} price={price_info.second} />
                }
                {have_third_class && 
                   <TrainsSeatsInfo trainClass={3} seatsAmount={available_seats_info.third} price={price_info.third} />
                }
                {have_fourth_class && 
                   <TrainsSeatsInfo trainClass={4} seatsAmount={available_seats_info.fourth} price={price_info.fourth} />
                }
               </div>
               <div className='trains-list__item__seats-class__bottom'>
                 <div className='trains-list__item__filter-icons'>
                   {have_wifi && 
                <img className='trains-list__item__filter-icon' src={wifi_icon} alt="wifi"/>
                }
                {is_express &&
                   <img className='trains-list__item__filter-icon' src={express_icon} alt="express"/>
                } 
                </div>
                <button className='trains-list__item__btn' type="button" onClick={goToSeatsSelection}>Выбрать места</button>  
               </div>   
            </div>    
        </div>
    )

}

TrainsListItem.propTypes = {
  trainInfo: PropTypes.object.isRequired,
  isForward: PropTypes.bool.isRequired,
  reloadInfo: PropTypes.func.isRequired,
  loadSeats: PropTypes.func.isRequired,
}