import React from 'react'
import Styles from './css/MoreInfoRow.module.css'
const MoreInfoRow = ({data,backGround}) => {
  return (
    <div className={Styles.cont} >
        <p className={Styles.p} style={{backgroundColor:backGround}}>{data[0][0]}: {data[0][1]}</p>
        <p className={Styles.p} style={{backgroundColor:backGround}}>{data[1][0]}: {data[1][1]}</p>
    </div>
  )
}

export default MoreInfoRow
