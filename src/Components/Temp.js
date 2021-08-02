import React,{useState,useEffect} from 'react';
import './style.css';
import WeatherCard from './WeatherCard';

const Temp = () => {
    const [searchValue, setSearchValue] = useState("korba");
    const[tempInfo, setTempInfo] = useState({});
    
    const getWeatherInfo = async ()=>{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=f50888ba966f0b93d0e732ece6f5bbb0`
            let res = await fetch(url);
            let data = await res.json();
           

            const {temp , pressure, humidity} = data.main;
            const{main : weatherMood} = data.weather[0];
            const{name} = data;
            const{country, sunset } = data.sys;
            const{speed} = data.wind;
            

            const weatherCompleteInfo = {
                temp , 
                pressure, 
                humidity,
                weatherMood,
                country, 
                sunset,
                speed,
                name
            };
            setTempInfo(weatherCompleteInfo);
        
        }
        catch(error){
            console.log(error);
        }
    };
   
    useEffect(() => {
        getWeatherInfo();
    },);
    return (
        <React.Fragment>
            <div className="wrap">
                <div className="search">
                    <input type="search" placeholder="search...." id="search" className="searchTerm" value={searchValue} onChange={(event)=>{setSearchValue(event.target.value)}}/>
                    <button className="searchButton" type="button" onClick={getWeatherInfo}>Search</button>
                </div>
            </div>

            <WeatherCard weatherInfo={tempInfo}/>
        </React.Fragment>
    )
}

export default Temp
