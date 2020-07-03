import React from 'react';
import InputField from '../../components/TextFields/InputField';

const API_Key = '7d1d5e1b3e6ff7d9cbac6936b2f277e5';
class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="container">
                <InputField />
            </div>
        );
    }
}

export default Weather;