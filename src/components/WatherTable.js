import React,{useState} from 'react'
import Menu from './Menu'
import TableBody from './TableBody'
import Styles from './css/WatherTable.module.css'

const WatherTable = ({hourlyForcast,dailyForcast}) => {
  let currentDate=new Date()
  const[menuSelect,setMenuSelect]=useState({ type: "daily", daysNumber: "30", active: "30 jour" })

  return (
    <div className={Styles.cont}>
      <Menu menuSelect={menuSelect} setMenuSelect={setMenuSelect} /> 
      <TableBody menuSelect={menuSelect} hourlyForcast={hourlyForcast} dailyForcast={dailyForcast}/>
    </div>
  )
}

export default WatherTable
