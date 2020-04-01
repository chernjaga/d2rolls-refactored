import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Home } from './pages/home.page';
import { WeaponsList } from './pages/weaponsList.page';
import { WeaponView } from './pages/weaponView.page';
import { FooterNavPanel } from './components/footerNavPanel.component';
import { Route,  BrowserRouter as Router, Switch } from 'react-router-dom';

const mainView = (
    <Router>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/weapons" component={WeaponsList}/>
            <Route path="/item" component={WeaponView}/>
        </Switch>
        <FooterNavPanel stateName="Test state!!!"/>
    </Router>
);
const rootElement = document.getElementById('rootElement');

export function bootstrap() {
    ReactDOM.render(
        mainView,
        rootElement
    );
}