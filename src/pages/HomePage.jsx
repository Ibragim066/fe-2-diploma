import { useContext, useEffect } from 'react';
import AppContext from '../AppContext';
import About from "../components/About/About";
import Description from "../components/Description/Description";
import Feedbacks from "../components/Feedbacks/Feedbacks";


export default function HomePage() {
    const { setBookingStage } = useContext(AppContext);

    useEffect(() => {
        setBookingStage(null);
      }, [setBookingStage]);
    
    return (
        <div className="homepage">
        <About />
        <Description />
        <Feedbacks />
        </div>
    );
}