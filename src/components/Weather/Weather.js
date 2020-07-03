import React from 'react';
import '../../css/weather-icons.min.css';

const weather = (props) => {
    return (
        <div>
            <div className="cards pt-4 text-light">
                <h1>{props.city}</h1>
                <h5 className="py-4" >
                    <i className={`wi ${props.weatherIcon} display-1`} ></i>.
                    </h5>
                {props.temp_celsius ? (
                    <h1 className="py-2"> {props.temp_celsius} &deg; </h1>
                ) : null}
                {/* calling the minAndMAx function */}
                {minAndMax_Temp(props.temp_min, props.temp_max)}

                <h3 className="py-3">{props.description}</h3>
            </div>
        </div>
    );
}


const minAndMax_Temp = (min, max) => {
    if (min && max) {
        return (
            <h3 >
                <span className="px-4"> <sub>min</sub> {min}&deg;</span>
                <span className="px-4"><sub>min</sub> {max}&deg;</span>
            </h3>
        );
    }
}
export default weather;