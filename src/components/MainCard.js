import React,{useState,useEffect} from 'react';
import Input from './Input';
import SelectDay from './SelectDay';
import Styles from './css/MainCard.module.css';
import QuickInfoBoxOne from './QuickInfoBoxOne';
import QuickInfoBoxtwo from './QuickInfoBoxtwo';
import UpdateTime from './UpdateTime';

function MainCard({hourlyForcast,setlocationInfo,locationInfo,dateNow}) {
  const [selctedDay,setSelectedDay]=useState(0)
  return (
    <div className={Styles.mainCard}>
    <div className='user-inputs-container'>
        <SelectDay setSelectedDay={setSelectedDay}/>
        <Input locationInfoUpdater={setlocationInfo}/>
        {
            hourlyForcast&&<QuickInfoBoxOne data={hourlyForcast.list[selctedDay]} cityName={locationInfo.cityName}/>
        }
         {
            hourlyForcast&&<QuickInfoBoxtwo data={hourlyForcast} selctedDay={selctedDay} />
        }
        <UpdateTime dateNow={dateNow}/>
    </div>
    </div>
  );
}

export default MainCard;
