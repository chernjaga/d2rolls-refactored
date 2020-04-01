import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Home } from './pages/home.page';
import { WeaponsList } from './pages/weaponsList.page';
import { WeaponView } from './pages/weaponView.page';
import { FooterNavPanel } from './components/footerNavPanel.component';
import { Route,  BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import { createStore } from 'redux';

const rootElement = document.getElementById('rootElement');
// const store = createStore();

var MainView = () => (<Router>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/weapons" component={WeaponsList}/>
                            <Route path="/item" component={WeaponView}/>
                            <Redirect to="/"/>
                        </Switch>
                        <FooterNavPanel stateName="Test state!!!"/>
                    </Router>);


export function bootstrap() {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: 'React POST Request Example' })
    };
    fetch('/getWeaponList', requestOptions).then(response => {
        console.log(response);
    });

    ReactDOM.render(
        <MainView/>,
        rootElement
    );
}