import React,{useState} from 'react'
import Select from 'react-select'
import {daysList} from './functions/daysListGenerator'
import Styles from './css/Menu.module.css'

const Menu = ({menuSelect,setMenuSelect}) => {
    let whoIsActive =menuSelect['active'] 
    const handleSelect=(e)=>{
        if(e.target.attributes['value']){
            setMenuSelect({type : 'hourly',date : e.target.attributes['value'].value,active:e.target.innerText})
        }else if(e.target.attributes['daysnumber']){
            setMenuSelect({type : 'daily',daysNumber : e.target.attributes['daysnumber'].value , active:e.target.innerText})
        } 
    }
    const currentDate =new Date();
    const tommorowDate = new Date(currentDate.getTime()+24*60*60*1000)
    const options =daysList(tommorowDate,['','','',''],true)
    return (
    <div className={Styles.cont}>
        <a onClick={handleSelect} value={currentDate.getDate()} className={ `${Styles.a} ${whoIsActive==='Aujourd’hui'&&Styles.active}`}>Aujourd’hui</a>
        <Select className={Styles.select} options={options} 
        onChange={e=>setMenuSelect({type : 'hourly',date:e.value,active:'select'})}
        placeholder='4 jours heure par heure'
        styles={{
            indicatorSeparator : ()=>({
                display:'none',
            }),
            control:(baseStyle)=>({
                ...baseStyle,
                boxShadow: 'none',
                border:'none',
                cursor:'pointer'
            }),
            placeholder:(baseStyle)=>({
                ...baseStyle,
                display:'block',
                color:"black"
            }),
            singleValue:(baseStyle)=>({
                ...baseStyle,
                color : whoIsActive=='select'?"white":'black',
                backgroundColor : whoIsActive=='select'?"#47CD82":'white',
                padding : whoIsActive=='select'?"8px 12px":'0px',
                borderRadius : whoIsActive=='select'?"2px":'0px',
                fontWeight : whoIsActive=='select'?500:''
            }),
            dropdownIndicator:(baseStyle)=>({
                ...baseStyle,
                padding:0,
                color : whoIsActive=='select'?"#47CD82":'black',
            }),
            valueContainer:(baseStyle)=>({
                ...baseStyle,
                padding:0
            }),
            option:(baseStyle,state)=>({
                ...baseStyle,
                padding:'5px ',
                textAlign:'center',
                cursor:'pointer',
                backgroundColor: state.isFocused ? '#47CD82' : 'white',
                color:state.isFocused ? 'white':'#47CD82',
            }),
            menu:(baseStyle)=>({
                ...baseStyle,
                minWidth:100
            }),
        }}
        />
        <a onClick={handleSelect} daysnumber={7} className={`${Styles.a} ${whoIsActive==='7 jours'&&Styles.active}`}>7 jours </a>
        <a onClick={handleSelect} daysnumber={15} className={`${Styles.a} ${whoIsActive==='15 jours'&&Styles.active}`}>15 jours </a>
        <a onClick={handleSelect} daysnumber={30} className={`${Styles.a} ${whoIsActive==='30 jours'&&Styles.active}`}>30 jours </a>
    </div>
  )
}

export default Menu
