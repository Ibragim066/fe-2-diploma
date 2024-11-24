import PropTypes from 'prop-types';
import { priceFormatting } from '../../../../utils/formatting';
import wifi_icon from "../../../../img/wifi_icon.png";
import express_icon from '../../../../img/express_icon.png';
import "./LastRoutesItem.css";


export default function LastRoutesItem(props) {
    const { route } = props;
    const { 
      from,
      to,
      have_wifi,
      is_express,
      min_price
    } = route.departure;
  
    return (
      <div className="last-routes-item">
        <div className="last-routes-item__city">
          <p className="last-routes-item__city-from">
            {from.city.name}
          </p>
          <p className="last-routes-item__city-to">
            {to.city.name}
          </p>
        </div>
        <div className="last-routes-item__station">
          <p className="last-routes-item__station-from">
            {from.railway_station_name}
          </p>
          <p className="last-routes-item__station-to">
            {to.railway_station_name}
          </p>
        </div>
        <div className="last-routes-item__min-price">
         {have_wifi && 
         <img src={wifi_icon} />}
         {is_express && 
         <img src={express_icon} />}
          <p className="last-routes-item__before-price">
            от
          </p>
          <p className="last-routes-item__price">
            {priceFormatting(min_price)}
          </p>
          <p className="last-routes-item__after-price">
            &#8381;
          </p>
        </div>
      </div>    
    )
  }
  
  LastRoutesItem.propTypes = {
    route: PropTypes.object.isRequired
  };
  