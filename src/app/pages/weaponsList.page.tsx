import * as React from 'react';

export class WeaponsList extends React.Component {
    componentDidMount() {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'React POST Request Example' })
        };
        fetch('/getWeaponList', requestOptions).then(response => {
            console.log(response);
        })
    }
    render() {
        return (
            <div>Weapon List</div>
        )
    }
}