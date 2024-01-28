import React,{useState,useEffect} from 'react';
import './App.css';
import MainCard from './components/MainCard';
import WatherTable from './components/WatherTable';


function App() {
    // openweathermap API_KEY
    const apiKey='1e5bce2d478d1f387c305d287d5ac18a';
    // input place value : Default is paris
    const [locationInfo,setlocationInfo]=useState({cityName: "Paris",coords: { lat: 48.856614, lng: 2.3522219 } });
    // Data from wather api storage
    const [hourlyForcast,setHourlyForcast]=useState(null)
    const [dailyForcast,setDailyForcast]=useState(null)
    // update time on evrey fetch 
    const [dateNow,seDateNow]=useState(new Date())
    useEffect(()=>{
      fetch(`https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${locationInfo.coords.lat}&lon=${locationInfo.coords.lng}&lang=fr&units=metric&appid=${apiKey}`).then(res=>res.json()).then(data=>{
          setHourlyForcast(data)
      })
      fetch(`https://pro.openweathermap.org/data/2.5/forecast/climate?lat=${locationInfo.coords.lat}&lon=${locationInfo.coords.lng}&lang=fr&units=metric&appid=${apiKey}`).then(res=>res.json()).then(data=>{
        setDailyForcast(data)
    })
      seDateNow(new Date())
    },[locationInfo])
  console.log(dailyForcast)

  return (
    <div className="App">
     {true &&  <MainCard hourlyForcast={hourlyForcast} setlocationInfo={setlocationInfo} locationInfo={locationInfo} dateNow={dateNow}/> }
    <div className='table-container'>
      <WatherTable  hourlyForcast={hourlyForcast===null ?null :hourlyForcast.list} dailyForcast={dailyForcast===null ?null :dailyForcast.list}/>
    </div>

    </div>
  );
}

export default App;
