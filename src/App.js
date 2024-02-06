import React,{useState,useEffect} from 'react';
import './App.css';
import MainCard from './components/MainCard';
import WatherTable from './components/WatherTable';
import WatherMap from './components/WatherMap';


function App() {
    // openweathermap API_KEY
    const apiKey='1e5bce2d478d1f387c305d287d5ac18a';
    // input place value : Default is paris
    const [locationInfo,setlocationInfo]=useState({cityName: "Paris",coords: { lat: 48.856614, lng: 2.3522219 } });
    // Data from wather api storage
    ////data for table and main card
    const [hourlyForcast,setHourlyForcast]=useState(null)
    const [dailyForcast,setDailyForcast]=useState(null)
    ////data for the map
    const cityIds = '3006787,2994160,2998324,3037854,2984114,2973783,3025892,3033791,3035843,2982652,6614508,3038230,2983990,3030300,2990969,6454979,2972191,3030949,2988507,2996944';
    const cityIds2 = '2969392,2998286,3031582,3036016,2992703,3016702,6454924,2995469,2992166,2972315,2973385,3032797,2987914,6452235';
    const[citiesMapData,setCitiesMapData]=useState(null)
    const[citiesMapData2,setCitiesMapData2]=useState(null)

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
    useEffect(()=>{
      fetch(`https://api.openweathermap.org/data/2.5/group?id=${cityIds}&appid=${apiKey}&units=metric&lang=fr`).then(data=>data.json()).then(res=>{
        setCitiesMapData(res.list)
      })
      fetch(`https://api.openweathermap.org/data/2.5/group?id=${cityIds2}&appid=${apiKey}&units=metric&lang=fr`).then(data=>data.json()).then(res=>{
        setCitiesMapData2(res.list)
      })
      },[])
  return (
    <div className="App">
      <div className='mainCard-map-container'>
      <MainCard hourlyForcast={hourlyForcast} setlocationInfo={setlocationInfo} locationInfo={locationInfo} dateNow={dateNow}/> 
      <WatherMap data={citiesMapData2===null||citiesMapData===null?null:[...citiesMapData2,...citiesMapData]}/>
      </div>
    <div className='table-container'>
    {true &&<WatherTable  hourlyForcast={hourlyForcast===null?null:hourlyForcast.list} dailyForcast={dailyForcast===null?null:dailyForcast.list}/>
 }
    </div>

    </div>
  );
}

export default App;
