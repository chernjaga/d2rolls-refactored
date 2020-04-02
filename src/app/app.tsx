import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Home } from './pages/home.page';
import { WeaponsListPage } from './pages/weaponsList.page';
import { WeaponView } from './pages/weaponView.page';
import { FooterNavPanel } from './components/footerNavPanel.component';
import { Route,  BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';

const rootElement = document.getElementById('rootElement');
// const store = createStore();

var MainView = () => (<Router>
                        <Switch>
                            <Route exact path="/home" component={Home}/>
                            <Route path="/weapons" component={WeaponsListPage}/>
                            <Route path="/item" component={WeaponView}/>
                            <Redirect to="/home"/>
                        </Switch>
                        <FooterNavPanel stateName="Test state!!!"/>
                    </Router>);


export function bootstrap() {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ getLocal: true, lang: 'en' })
    };
    fetch('/getWeaponList', requestOptions).then(response => {
        console.log(response);
    });

    ReactDOM.render(
        <MainView/>,
        rootElement
    );
}