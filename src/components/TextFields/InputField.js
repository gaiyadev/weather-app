import React from 'react';
import '../../components/TextFields/InputField.css';


const textField = props => {
    return (
        <div className="container mt-5">
            <div>{props.error ? error() : null}</div>
            <form onSubmit={props.onSubmitDetails} autoComplete="off" className="Form">
                <div className="row">
                    <div className="col-md-3 offset-md-2">
                        <div className="form-group input-group-lg">
                            <input type="text"
                                placeholder="City (E.g Lagos)"
                                className="form-control"
                                id="city_name"
                                name="city" />
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="form-group input-group-lg">
                            <input type="text"
                                placeholder="Country (Eg Nigeria)"
                                className="form-control"
                                id="country_name"
                                name="country"
                            />
                        </div>
                    </div>
                    <div className="col-md-3 mt-md-0 text-md-left">
                        <button type="submit" className="btn btn-warning btn-lg btn-block">Search</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

const error = () => {
    return (
        <div className="alert alert-danger mx-5" role="alert">
            Please provide a valid city and country name
        </div>
    );
}
export default textField;