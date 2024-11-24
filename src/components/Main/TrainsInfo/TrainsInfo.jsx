import { useContext, useEffect } from 'react';
import AppContext from '../../../AppContext';
import TrainsList from './TrainsList/TrainsList';
import { fetchRoutes } from '../../../api/fetchRoutes';
import { fetchSeats } from '../../../api/fetchSeats';
import TimeFilters from './TrainsFilters/TimeFilters/TimeFiltersItem';
import TrainsFilters from './TrainsFilters/TrainsFilters';
import LastRoutes from './LastRoutes/LastRoutes';
import ProgressBar from '../ProgressBar/ProgressBar';
import "./TrainsInfo.css";

export default function TrainsInfo() {
    const { setBookingStage, trainsInfo, setTrainsInfo, setSeatsInfo } = useContext(AppContext);

    useEffect(() => {
        setBookingStage('trains');
      }, [setBookingStage]);

    const reloadInfo = async (params) => {
        return await fetchRoutes(setTrainsInfo, { ...trainsInfo.params, ...params });
    };

    const loadSeats = async (departureTrainId, arrivalTrainId) => {
        return await fetchSeats(setSeatsInfo, {departureTrainId, arrivalTrainId});
    };

    return (
        <main className='trains'>
            <ProgressBar stepNumber={1} />
            <div className='trains-wrapper'>
                <section className='trains__side'>
                    <div className='trains__filters'>
                        <TrainsFilters reloadInfo={reloadInfo} />
                    </div>
                    <div className='trains__last'>
                        <LastRoutes />
                    </div>
                </section>
                <section className='trains__main'>
                    <TrainsList reloadInfo={reloadInfo} loadSeats={loadSeats} />
                </section>
                <TimeFilters />
            </div>
        </main>
    )
}