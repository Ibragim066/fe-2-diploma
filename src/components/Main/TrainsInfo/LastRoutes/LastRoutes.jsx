import { useContext } from 'react';
import AppContext from "../../../../AppContext";
import LastRoutesItem from './LastRoutesItem';
import "./LastRoutes.css";
import shortid from 'shortid';

export default function LastRoutes() {
    const { trainsInfo } = useContext(AppContext);
  
    return (
      <div className="last-routes"> 
        <h3 className="last-routes__title">
          Последние билеты
        </h3>
        <div className="last-routes__list">
          {trainsInfo.lastRoutes.map((item) => <LastRoutesItem route={item} key={shortid.generate()} />)}
        </div>
      </div>    
    )
  }
