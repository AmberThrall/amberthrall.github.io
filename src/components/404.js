import React from 'react';
import sadface from '../assets/sadface.png';

class NotFound extends React.Component {
    render() {
        return (
            <center>
                <img className="pure-img" src={sadface} alt="Sad Face" />
                <h1>404</h1>
                <h2>Page not found</h2>
            </center>
        );
    }
}

export default NotFound;


