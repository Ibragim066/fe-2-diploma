import { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../../../../AppContext';
import TrainsListItem from './TrainsListItem/TrainsListItem';
import shortid from 'shortid';
import "./TrainList.css";


export default function TrainsList(props) {
    const {loadSeats, reloadInfo } = props;
    const { trainsInfo } = useContext(AppContext);

    const [limit, setLimit] = useState(0);
    const [sort, setSort] = useState(0);
    const [showList, setShowList] = useState(false);

    useEffect(() => {
        switch (trainsInfo.params.sort) {
          case 'price_': 
            setSort(1);
            break;
          case 'duration':
            setSort(2);
            break;
          default:
            setSort(0);
        }
      }, [trainsInfo.params.sort]);
    
      useEffect(() => {
        switch (+trainsInfo.params.limit) {
          case 10: 
            setLimit(1);
            break;
          case 20:
            setLimit(2);
            break;
          default:
            setLimit(0);
        }
      }, [trainsInfo.params.limit]);

      const sortOptions = [
        { option: 'date', name: 'времени' },
        { option: 'price_', name: 'стоимости' },
        { option: 'duration', name: 'длительности' }
      ];    

      const limits = [5, 10, 20];

      const isForward = trainsInfo.params.direction === 'forward';
      console.log(trainsInfo)
      const trainsAmount = isForward ? `туда: ${trainsInfo.departureTrainInfo.total_count}` : `обратно: ${trainsInfo.arrivalTrainInfo.total_count}`;
      const trainsArray = isForward ? trainsInfo.departureTrainInfo.items : trainsInfo.arrivalTrainInfo.items;
      const mapp = trainsArray.map((item) => item.departure)
      //console.log(<TrainsListItem trainInfo={trainsArray[1].departure} />)

      const selectSort = (index) => {
        setShowList(false);
        setSort(index);
        reloadInfo({ sort: sortOptions[index].option });
      };

      const selectLimit = (index) => {
        setLimit(index);
        reloadInfo({ 
          limit: limits[index],
          offset: 0
        });
      };

      return (
          <div className='trains-list'>
              <div className='trains-list__menu'>
                  <p className='trains-list__total'>найдено {trainsAmount}</p>
                  <p className='trains-list__sort'>
                      сортировать по: 
                  </p>
                  <div className='trains-list__sort__options' onClick={() => setShowList(true)}><p className='trains-list__sort__name'>
                    {sortOptions[sort].name} </p>
                    {showList && 
                    <ul className='trains-list__sort__list'>
                        {sortOptions.map((item, index) =>
                <li className="trains-list__sort__item" key={index} onClick={() => selectSort(index)}>
                  {item.name}
                </li> 
              )}
              </ul>
              }
            </div>
            <p className='trains-list__limit'>показывать по:</p>
            {limits.map((item, index) => 
          <p className={'trains-list__limit__option' + (index === limit? ' trains-list____option_active' : '')} key={index} onClick={() => selectLimit(index)}>
            {item}
          </p>
            )}
              </div>
            <div className='trains-list__list'>
                { !!trainsArray.length &&
                   trainsArray.map((el) => 
                       <TrainsListItem 
                       trainInfo={el.departure}
                       isForward={isForward} 
                       reloadInfo={reloadInfo} 
                       loadSeats={loadSeats}
                       key={shortid.generate()} />
                   )
                }
            </div>
          </div>
      );
}

TrainsList.propTypes = {
    reloadInfo: PropTypes.func.isRequired,
    loadSeats: PropTypes.func.isRequired
  };
