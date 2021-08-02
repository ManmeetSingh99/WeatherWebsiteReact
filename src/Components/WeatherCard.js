import React, { useState, useEffect } from 'react';

const WeatherCard = (props) => {
    const [weatherState, setweatherState] = useState();

    const {
        temp,
        pressure,
        humidity,
        weatherMood,
        country,
        sunset,
        speed,
        name
    } = props.weatherInfo;

    useEffect(() => {
        if (weatherMood) {
            switch (weatherMood) {
                case "Clouds":
                    setweatherState("wi-day-cloudy");
                    break;

                case "Haze":
                    setweatherState("wi-fog");
                    break;
                case "Clear":
                    setweatherState("wi-day-sunny");
                    break;
                case "Rain":
                    setweatherState("wi-day-rain");
                    break;
                case "Mist":
                    setweatherState("wi-smog");
                    break;
                case "Snow":
                    setweatherState("wi-snow");
                    break;
                default:
                    setweatherState("wi-day-sunny");
                    break;
            }
        }
    }, [weatherMood]);

    let sec = sunset;
    let sunsetTimeInMili = new Date(sec * 1000);
    let sunsetTimeStr = `${(sunsetTimeInMili).getHours()}:${sunsetTimeInMili.getMinutes()}`;
    return (

        <React.Fragment>
            <article className="widget">
                <div className="weatherIcon">
                    <i className={`wi ${weatherState}`}></i>
                </div>
                <div className="weatherInfo">
                    <div className="temperature">
                        <span>{temp}&deg;</span>
                    </div>
                    <div className="description">
                        <div className="weatherCondition">
                            {weatherMood}
                        </div>
                        <div className="place">{name}, {country}</div>
                    </div>
                </div>
                <div className="date">{new Date().toLocaleDateString()}</div>
                <div className="extra-temp">
                    <div className="temp-info-minmax">
                        <div className="two-sided-section">
                            <p><i className={"wi wi-sunset"}></i></p>
                            <p className="extra-info-leftside">
                                {sunsetTimeStr} PM <br />
                                Sunset
                            </p>
                        </div>

                        <div className="two-sided-section">
                            <p><i className={"wi wi-humidity"}></i></p>
                            <p className="extra-info-leftside">
                                {humidity} <br />
                                Humidity
                            </p>
                        </div>
                    </div>


                    <div className="weather-extra-info">

                        <div className="two-sided-section">
                            <p><i className={"wi wi-humidity"}></i></p>
                            <p className="extra-info-leftside">
                                {pressure} <br />
                                Pressure
                            </p>
                        </div>


                        <div className="two-sided-section">
                            <p><i className={"wi wi-humidity"}></i></p>
                            <p className="extra-info-leftside">
                                {speed} <br />
                                Speed
                            </p>
                        </div>

                    </div>

                </div>
            </article>
        </React.Fragment>
    )
}

export default WeatherCard
