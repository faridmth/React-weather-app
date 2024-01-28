import React from 'react'
import Styles from './css/UpdateTime.module.css'

const UpdateTime = ({dateNow}) => {
    const hours = dateNow.getHours().toString().padStart(2,'0')
    const minutes = dateNow.getMinutes().toString().padStart(2,'0')
  return (
    <div className={Styles.cont}>
      {`Prévision actualisée à ${hours}h${minutes}`}
    </div>
  )
}

export default UpdateTime
