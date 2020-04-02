import {footerActiveState} from '../interfaces/footerNavPanel.interface'
import * as React from 'react';
import { Link } from 'react-router-dom';

//text should be translated
export class FooterNavPanel extends React.Component<footerActiveState> {
    render() {
        return (
            <ul className="footerNavPanel">
                <li>
                    <Link to="/home">
                        <img className="footerNavLinks" src="./image/navigation_home.png" alt="home"/>
                    </Link>
                </li>
                <li>
                    <Link to="/weapons">
                        <img className="footerNavLinks" src="./image/navigation_weapons.png" alt="weapon list"/>
                    </Link>
                </li>
                <li>
                    <Link to="/item">
                        <img className="footerNavLinks" src="./image/navigation_settings.png" alt="setting"/>
                    </Link>
                </li>
            </ul>
        )
    }
}
