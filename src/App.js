import React from 'react';
import './App.css';
import Weather from './components/Weather/Weather';
import Form from './components/TextFields/InputField';

//api key
const API_Key = '7d1d5e1b3e6ff7d9cbac6936b2f277e5';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      main: undefined,
      celsius: undefined,
      temp_max: undefined,
      temp_min: undefined,
      humidity: undefined,
      pressure: undefined,
      description: '',
      error: false
    };

    this.weatherIcons = {
      ThunderStorm: 'wi-thunderstorm',
      Drizzle: 'wi-sleet',
      Rain: 'wi-storm-showers',
      Snow: 'wi-snow',
      Atmosphere: 'wi-fog',
      Clear: 'wi-day-sunny',
      Cloud: 'wi-day-fog',
    }
  }

  //Conveting temperature to celsius
  calCelsius = (temp) => {
    let cell = Math.floor(temp - 273.15);
    return cell;
  }
  //converting the first character of the desscription to uppercase
  charToUppercase = (char) => {
    let findChar = char.charAt(0);
    let sliceChar = char.slice(1, 313)
    return findChar.toUpperCase() + sliceChar;
  }

  //condintion to render weather icons correctly
  get_WeatherIcon(rangeId) {
    switch (true) {
      case rangeId >= 200 && rangeId <= 232:
        this.setState({
          icon: this.weatherIcons.ThunderStorm
        });
        break;

      case rangeId >= 300 && rangeId <= 321:
        this.setState({
          icon: this.weatherIcons.Drizzle
        });
        break;

      case rangeId >= 500 && rangeId <= 531:
        this.setState({
          icon: this.weatherIcons.Rain
        });
        break;

      case rangeId >= 600 && rangeId <= 622:
        this.setState({
          icon: this.weatherIcons.Snow
        });
        break;

      case rangeId >= 701 && rangeId <= 781:
        this.setState({
          icon: this.weatherIcons.Atmosphere
        });
        break;

      case rangeId = 800:
        this.setState({
          icon: this.weatherIcons.Clear
        });
        break;
      case rangeId >= 801 && rangeId <= 804:
        this.setState({
          icon: this.weatherIcons.Cloud
        });
        break;

      default:
        this.setState({
          icon: this.weatherIcons.Cloud
        });
        break;
    }
  }

  //making the api call
  getWeather = async (event) => {
    try {
      event.preventDefault();
      const city = event.target.elements.city.value;
      const country = event.target.elements.country.value;
      if (city && country) {
        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_Key}`);
        const response = await api_call.json();
        // console.log(response);
        this.setState({
          city: `${response.name}, ${response.sys.country}`,
          // country: response.sys.country,
          celsius: this.calCelsius(response.main.temp),
          temp_max: this.calCelsius(response.main.temp_max),
          temp_min: this.calCelsius(response.main.temp_min),
          description: this.charToUppercase(response.weather[0].description),
          humidity: response.main.humidity,
          pressure: response.main.pressure,
          icon: this.weatherIcons.ThunderStorm,
          error: false
        });
        this.get_WeatherIcon(this.weatherIcons, response.weather[0].id);
      } else {
        this.setState({
          error: true
        });
      }
    } catch (err) {
      this.setState({
        error: err.message
      });
    }
  }


  render() {
    return (
      <div className="App">
        <Form onSubmitDetails={this.getWeather}
          error={this.state.error} />

        <Weather
          city={this.state.city}
          country={this.state.country}
          description={this.state.description}
          temp_celsius={this.state.celsius}
          temp_max={this.state.temp_max}
          temp_min={this.state.temp_min}
          weatherIcon={this.state.icon}
          humidity={this.state.humidity}
          pressure={this.state.pressure}
        />
      </div>
    );
  }
}

export default App;
