import React from 'react'
import {upperCaseFirstLetter} from './functions/upperCaseFirstLetter'
import Styles from './css/QuickInfoBoxOne.module.css'

const QuickInfoBoxOne = ({data,cityName}) => {

  return (
    <div className={Styles.mainContainer}>
      <div>
        <h3>Meteo {cityName}</h3>
        <p>{upperCaseFirstLetter(data.weather[0].description)} {Math.ceil(data.main.feels_like) } °C </p>
      </div>
      <div>
        <img className={Styles.img} src={require(`./images/meteo/${data.weather[0].icon}.png`)} alt="wather icon" />
      </div>
    </div>
  )
}

export default QuickInfoBoxOne
