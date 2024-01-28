import React,{useState,useEffect} from 'react'
import Select from 'react-select';
import Styles from './css/SelectDay.module.css'
import {daysList} from './functions/daysListGenerator'

const SelectDay = ({setSelectedDay}) => {
    const values = [0,24,48,72]
    const currentDate = new Date();
    const [selectedOption, setSelectedOption] = useState(null);
    const options =daysList(currentDate,values,false)
    useEffect(()=>{
      selectedOption?setSelectedDay(selectedOption.value.val):setSelectedDay(0)
    },[selectedOption])
  return (
    <div className={Styles.cont}>
      <Select 
        options={options}
        onChange={setSelectedOption}
        defaultValue={options[0]}
        styles={{
          option : (baseStyle,{isFocused})=>({
            ...baseStyle,
            backgroundColor:isFocused ? '#47CD82' : 'white'
          }),
          menu: (baseStyle)=>({
            ...baseStyle,
            margin:2
          }),
          control :(baseStyle)=>({
            ...baseStyle,
            backgroundColor:'#47CD82',
            width:'110px',
            boxShadow: 'none',
            border:'none',
            height: 25,
            minHeight: 25,
          }),
          dropdownIndicator:(baseStyle)=>({
            ...baseStyle,
            color:'white',
            width:'100%',
            padding:'0px',
            marginTop:2,
            paddingRight:1

          }),
          indicatorSeparator:(baseStyle)=>({
            ...baseStyle,
            display:'none',
          }),
          singleValue:(baseStyle)=>({
            ...baseStyle,
            fontSize:'14px',
            margin:0,
            padding:0,
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            color:'white',
            fontWeight:500,
          }),
          valueContainer:(baseStyle)=>({
            ...baseStyle,
            height:'100%',
            padding:0,
          })
        }}
        />
      
    </div>
  )
}

export default SelectDay
