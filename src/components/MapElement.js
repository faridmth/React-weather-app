import React from 'react'
import {Popup,Marker  } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import {Icon} from 'leaflet'

const MapElement = ({data}) => {
    const legalIcon = new Icon ({
        iconUrl : require(`./images/meteo/${data.icon}.png`),
        iconSize : [36,36],
        iconAnchor : [18,30], 
        className: 'map-icon',
        popupAnchor: [0, -30] 
      })

  return (
    <div>
        <Marker
            position={[data.position[0],data.position[1]]}
            
            icon={ legalIcon }
            eventHandlers={{
                mouseover: (e) => {
                e.target.openPopup()
                document.documentElement.style.setProperty('--bottom',data.position[0]>46?'-200px':'10px');
                document.documentElement.style.setProperty('--left',data.position[1]>2?'-190px':'-15px');

                console.log(data.position[1])
                },
                mouseout: (e) => {
                    e.target.closePopup()
                },
            }}
        >
            <Popup autoPan={false}>
                <div className='popup-info-conatiner'>
                    <p className='popup-city-name'>{data.name}</p>
                    <div className='img-temp-popup-cont'>
                        <img src={require(`./images/meteo/${data.icon}.png`)} alt="" />
                        <p>{data.temp}</p>
                    </div>
                    <p className='popup-wather-des'>{data.des}</p>
                    <div className='min-max-temp-popup-cont'>
                        <p><span style={{color:'green'}}>min:</span>{data.tempMin}</p>
                        <p><span style={{color:'red'}}>max:</span>{data.tempMax}</p>
                    </div>
                </div>
            </Popup>
        </Marker>


    </div>
  )
}

export default MapElement
