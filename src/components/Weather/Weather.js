import React from 'react';
import '../../css/weather-icons.min.css';

const weather = (props) => {
    return (
        <div>
            <div className="cards pt-4 text-light shadow-none p-3 mb-5 rounded">
                <h1>{props.city}</h1>
                <h5 className="py-4" >
                    <i className={`wi ${props.weatherIcon} display-1`} ></i>.
                    </h5>
                {props.temp_celsius ? (
                    <h1 className="py-2"><strong> {props.temp_celsius} &deg;</strong> </h1>
                ) : null}
                {/* calling the minAndMAx function */}
                {minAndMax_Temp(props.temp_min, props.temp_max)}
                {humidityAndPressure(props.humidity, props.pressure)}

                <h3 className="py-3">{props.description}</h3>
            </div>
        </div>
    );
}


const minAndMax_Temp = (min, max) => {
    if (min && max) {
        return (
            <h3 >
                <strong className="px-4">  <sub>min</sub> {min}&deg;</strong>
                <strong className="px-4"><sub>min</sub> {max}&deg;</strong>
            </h3>
        );
    }
}

const humidityAndPressure = (hum, pre) => {
    if (hum && pre) {
        return (
            <h3 >
                <strong className="px-4">{hum}gm<sup>-3</sup> </strong>
                <strong className="px-4"> {pre}Pa;</strong>
            </h3>
        );
    }
}
export default weather;