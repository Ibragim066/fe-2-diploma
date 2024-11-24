import { useContext, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import TrainsInfo from '../components/Main/TrainsInfo/TrainsInfo';

export default function MainPage() {
    return (
        <Fragment>
            <Switch>
                <Route path='/trains' component={TrainsInfo} />
                <Route path="/" component={HomePage} />
            </Switch>
        </Fragment>
    )
}