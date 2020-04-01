import {footerActiveState} from '../interfaces/footerNavPanel.interface'
import * as React from 'react';
import { Link } from 'react-router-dom'

export class FooterNavPanel extends React.Component<footerActiveState> {
    render() {
        return (
            <div>
                <div>LOST FORGE {this.props.stateName}</div>
                <ul>
                    <li>
                        <Link to="/">home</Link>
                    </li>
                    <li>
                        <Link to="/weapons">weapons list</Link>
                    </li>
                    <li>
                        <Link to="/item">weapon view</Link>
                    </li>
                </ul>
            </div>
        )
    }
}
