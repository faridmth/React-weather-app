import React from 'react'
import Styles from './css/QuickInfoBoxtwo.module.css'
import Square from './Square'
import { hourFromUnix } from './functions/hourFromUnix'
import { getDirection } from './functions/getDirection'

const QuickInfoBoxtwo = ({data,selctedDay}) => {
    const Squares=[
        {
            text:`${hourFromUnix(data.city.sunrise)}` ,
            imgSource : require('./images/sunrise-icon.png'),
            isGreen :false
        },
        {
            text: data.list[selctedDay].rain!==undefined?`${data.list[selctedDay].rain['1h']} mm `:'0 mm',
            imgSource : require('./images/raining-icon.png'),
            isGreen :true
        },
        {
            text:` ${Math.ceil(data.list[selctedDay].main.temp_min)}°C / ${Math.ceil(data.list[selctedDay].main.temp_max)}°C ` ,
            imgSource : require('./images/celsius-icon.png'),
            isGreen :true
        },
        {
            text:`${Math.ceil(data.list[selctedDay].wind.speed*3.6)} Km/h` ,
            imgSource : require('./images/wind-speed-icon.png'),
            isGreen :true
        },
        {
            text: `${data.list[selctedDay].main.humidity}%` ,
            imgSource : require('./images/humidity-icon.png'),
            isGreen :false
        },
        {
            text:getDirection(data.list[selctedDay].wind.deg) , 
            imgSource : require('./images/compass-icon.png'),
            isGreen :false
        },
        {
            text:`${hourFromUnix(data.city.sunset)}` ,
            imgSource : require('./images/sunset-icon.png'),
            isGreen :false
        }
    ]
  return (
    <div className={Styles.cont}>
        <p className={Styles.title}>Météo aujourd’hui</p>
        <div>
            <div className={Styles.greenSquaresCont}>
            {
                Squares.map((sqr,i)=>{
                    return sqr.isGreen && <Square key={i} isGreen={sqr.isGreen} imageSource={sqr.imgSource} text={sqr.text} imgRotation={i==5?data.list[selctedDay].wind.deg:0}/>
                })
            }
            </div>
            <div className={Styles.whiteSquaresCont}>
            {
                Squares.map((sqr,i)=>{
                    return !sqr.isGreen && <Square key={i} isGreen={sqr.isGreen} imageSource={sqr.imgSource} text={sqr.text} imgRotation={i==5?data.list[selctedDay].wind.deg:0}/>
                })
            }
            </div>
        </div>
    </div>
  )
}

export default QuickInfoBoxtwo
