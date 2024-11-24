import React, { useState, Fragment } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { fetchCities } from "../../../api/fetchCities";
import {AutoComplete} from "antd";


export default function DestinationInput(props) {
  const { name, value, placeholder, setValue } = props;
// const {items} = useSelector((state) => state.cities);
// // console.log(items, status);
  const [timerId, setTimerId] = useState(null);
  const [citiesList, setCitiesList] = useState([]);
  const [showList, setShowList] = useState(false);
  // const dispatch = useDispatch();

  const getCitiesList = async (name) => {
    
    const list = await fetchCities(name);
    setCitiesList(list);
    setShowList(!!list.length);
    
};

const timeout = 1000;

  const timer = (text) => {
    getCitiesList(text);
  }

  const changeText = (evt) => {

    clearTimeout(timerId);
    const text = evt.target.value.trimLeft();
    setValue(text);

    if (text.length) {
      setTimerId(setTimeout(() => timer(text), timeout));
    } else {
      setShowList(false);
    }
  }

  const selectCity = (name) => {
    setValue(name);
    setShowList(false);
  }

  return (
    <Fragment>
  <input 
        className="header__search__destination__input"
        type="text" 
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={changeText}
      />
      {showList && 
        <ul className="header__search__destination__list" tabIndex="9999">
          {citiesList.map((item) =>
            <li className="header__search__destination_list-item" key={item._id} onClick={() => selectCity(item.name)}>
              {item.name}
            </li> 
          )}
        </ul>
      }
      </Fragment>
  )
}