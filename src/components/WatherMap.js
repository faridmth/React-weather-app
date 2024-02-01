import React, {useEffect,useState} from 'react'
import { MapContainer,GeoJSON,Popup,Marker  } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import './css/WatherMap.css'
import countries from './data/countries.json'
import franceRegions from './data/franceRegions.json'
import MapElement from './MapElement';
const countryStyles={
  fillColor:'#F5F5F5',
  fillOpacity:1,
  color:'black',
  weight:1
}
const regionsStyles={
  fillColor:'#85DDAC',
  fillOpacity:1,
  color:'black',
  weight:1,
  zIndex:2000
}
const regionsEventsHandler=(region,layer)=>{
  //console.log(region.properties.nom)
  layer.on({
    mouseover:(e)=>{
      e.target.setStyle({  fillColor:'#47CD82'})
    },
    mouseout:(e)=>{
      e.target.setStyle({  fillColor:'#85DDAC'})
    }
    
  })
}
const WatherMap = ({data}) => {
  const [dor,setDo]=useState(1)
  useEffect(() => {
    const handleResize = () => {
      setDo(prev => prev + 1);
    }; 
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  const citiesDataFormated=[];
  data&&data.map((cityData,index)=>{
    citiesDataFormated.push({
      position:[cityData.coord.lat, cityData.coord.lon],
      name: cityData.name,
      temp: `${Math.ceil(cityData.main.temp)}°`,
      tempMax: `${Math.ceil(cityData.main.temp_max)}°`,
      tempMin: `${Math.ceil(cityData.main.temp_min)}°`,
      icon :cityData.weather[0].icon,
      des :cityData.weather[0].description,
    })
  })
  const cityCoordinates = [	46.3576, 2.2137];
  const bounds = [
    [40.7, 9.88888777],
    [51.1, -4.88888777]
  ];
  return (
    <div className='map-reset-container'>
      <MapContainer key={dor} center={cityCoordinates} bounds={bounds}  zoomControl={false} dragging={true} doubleClickZoom={false} boxZoom={false} keyboard={false} scrollWheelZoom={false} zoomSnap={0.1} >
      <GeoJSON data={countries.features} style={countryStyles}/>
      <GeoJSON data={franceRegions.features} style={regionsStyles} onEachFeature={regionsEventsHandler}/>

      {
        citiesDataFormated.length!==0&&citiesDataFormated.map((citydata,index)=>{
          return <MapElement key={index} data={citydata}/>
        })
      }
    </MapContainer>

    </div>
    )
}

export default WatherMap
