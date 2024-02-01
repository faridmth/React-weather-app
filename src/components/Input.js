import React from 'react';
import Styles from './css/Input.module.css'
import searchIcon from './images/search-icon.png'
import placesIcon from './images/places_icon.png'
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
    getDetails
  } from "use-places-autocomplete";

const Input = ({locationInfoUpdater}) => {
  
    const {
      ready,
      value,
      suggestions: { status, data },
      setValue,
      clearSuggestions
    }=usePlacesAutocomplete()
    const handleChange =(val)=>{
        setValue(val)
    }
    const handleSelect = (e)=>{
      setValue('')
      clearSuggestions()
      getGeocode({address: e.target.innerText}).then((results) => {
        
        getDetails({placeId :results[0].place_id}).then(res=>
          locationInfoUpdater({cityName:res.name,coords:getLatLng(results[0])})
       )
       
      }); 
    }
  return (
    <div className={Styles.container}>
      <div className={Styles.inpCont}>
        <input 
        className={Styles.input}
          type="text"
          placeholder='Localité, Code postale...'
          value={value} 
          onChange={e=>handleChange(e.target.value)}

        />
        <img src={searchIcon} alt="search icon" className={Styles.img}/>
      </div>
      <ul className={Styles.listCont}>
        {   status==='OK' &&
            data.map(suggestion=>{
                return <li className={Styles.listElment} key={suggestion.place_id} onClick={handleSelect}>
                  <img src={placesIcon} alt="places icon"/>
                  {suggestion.description}
                  </li>
            })
        }
      </ul>
    </div>
  )
}

export default Input
