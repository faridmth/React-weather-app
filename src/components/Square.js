import React from 'react'
import Styles from './css/Square.module.css'

const Square = ({imageSource,text,imgRotation,isGreen}) => {
    const rotation1 ={
        transform :`rotate(${imgRotation}deg)`
    }
  return (
    <div className={isGreen?Styles.green:Styles.white}>
      <img className={Styles.img} src={imageSource} alt={text} style={rotation1}/>
      <p>{text}</p>
    </div>
  )
}

export default Square
