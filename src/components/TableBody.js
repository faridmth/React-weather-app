import React, {useState} from 'react'
import TableRow from './TableRow'
import {hourFromUnix} from './functions/hourFromUnix'
import {getDirection} from './functions/getDirection'
import Styles from './css/TableBody.module.css'
const days=["dim","lun","mar","mer","jeu","ven","sam"];
const TableBody = ({menuSelect,hourlyForcast,dailyForcast}) => {
  const dataToDisplay=[]
  hourlyForcast&&menuSelect.type==="hourly"&&hourlyForcast.map((elm,i)=>{
    let dateVar =new Date(elm.dt*1000)
    if(dateVar.getDate()==menuSelect.date){
      dataToDisplay.push(
        {
          'time' : hourFromUnix(elm.dt),
          'temp' : `${Math.ceil(elm.main.feels_like)}°C`,
          'iconId' : `${elm.weather[0].icon}`,
          'des' : `${elm.weather[0].description}`,
          'tempMax' :`${Math.ceil(elm.main.temp_max)}°C max`,
          'windDeg':elm.wind.deg,
          'windSpeed':`${Math.ceil(elm.wind.speed*3.6)}Km/h`,
          moreInfo :{
          'Volume de  précipitations':`${elm.rain!==undefined?elm.rain['1h']:0}mm`,
          'Visibilité':`${elm.visibility}m`,
          'Probabilité de précipitations':`${elm.pop*100}%`,
          'Humidité':`${elm.main.humidity}%`,
          'Pression atmosphérique du sol':`${elm.main.grnd_level}hpa`,
          'Vitesse du vent':`${Math.ceil(elm.wind.speed*3.6)}Km/h`,
          'Pression':`${elm.main.pressure}hpa`,
          'Direction du vent':getDirection(elm.wind.deg),
          'Température minimale':`${Math.ceil(elm.main.temp_min)}°C`,
          'Rafale de vent':`${Math.ceil(elm.wind.gust*3.6)}Km/h`,
          'Température maximale':`${Math.ceil(elm.main.temp_max)}°C`,
          'Nébulosité':`${elm.clouds.all}%`,
          } 
      }
      )
    }
  })
  if(dailyForcast&&menuSelect.type==="daily"){
      for(let i=0;i<menuSelect.daysNumber;i++){
        let dateVar = new Date(dailyForcast[i].dt*1000)
        dataToDisplay.push(
          {
            'time' : `${days[dateVar.getDay()]} ${dateVar.getDate()}`,
            'temp' : `${Math.ceil(dailyForcast[i].feels_like.day)}°C`,
            'iconId' : `${dailyForcast[i].weather[0].icon}`,
            'des' : `${dailyForcast[i].weather[0].description}`,
            'tempMax' :`${Math.ceil(dailyForcast[i].temp.max)}°C max`,
            'windDeg':dailyForcast[i].deg,
            'windSpeed':`${Math.ceil(dailyForcast[i].speed*3.6)}km/h`,
            moreInfo :{
            'Volume de  précipitations':`${dailyForcast[i].rain!==undefined?dailyForcast[i].rain:0}mm`,
            'Pression':`${dailyForcast[i].pressure}hpa`,
            'température matinale' : `${Math.ceil(dailyForcast[i].feels_like.morn)}°C`,
            'Humidité':`${dailyForcast[i].humidity}%`,
            'Température du soir' : `${Math.ceil(dailyForcast[i].feels_like.eve)}°C`,
            'Vitesse du vent':`${Math.ceil(dailyForcast[i].speed*3.6)}km/h`,
            'Température nocturne' : `${Math.ceil(dailyForcast[i].feels_like.night)}°C`,
            'Direction du vent':getDirection(dailyForcast[i].deg),
            'Température minimale':`${Math.ceil(dailyForcast[i].temp.min)}°C`,
            'Volume de neige':`${dailyForcast[i].snow!==undefined?dailyForcast[i].snow:0}mm`,
            'Température maximale':`${Math.ceil(dailyForcast[i].temp.max)}°C`,
            'Nébulosité':`${dailyForcast[i].clouds}%`,
            } 
        })
    }
  }

  return (
    <div className={Styles.cont}>
      {
        dataToDisplay.map((element,i)=>{
          return <TableRow key={i} data={element}/>
        })
      }

    </div>
  )
}

export default TableBody
