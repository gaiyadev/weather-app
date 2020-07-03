import React from 'react';
import '../../css/weather-icons.min.css';

const API_Key = '7d1d5e1b3e6ff7d9cbac6936b2f277e5';
class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="container">
                <div className="cards">
                    <h3>London</h3>
                    <h5 className="py-4" >
                        <i class="wi wi-day-sunny display-1" ></i>.
                    </h5>
                    <h1 className="py-2">25&deg; </h1>
                    {/* calling the minAndMAx function */}
                    {minAndMax_Temp(24, 19)}
                </div>
            </div>
        );
    }
}


const minAndMax_Temp = (min, max) => {
    return (
        <h3 >
            <span className="px-4">{min}&deg;</span>
            <span className="px-4">{max}&deg;</span>
        </h3>
    );
}
export default Weather;