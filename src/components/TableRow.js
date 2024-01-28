import React,{useState} from 'react'
import Styles from './css/TableRow.module.css'
import MoreInfoRow from './MoreInfoRow'
const TableRow = ({data}) => {
  const [displayMoreInfo,setdisplayMoreInfo]=useState(false)
    const moreInfoObject = Object.entries(data.moreInfo)
    let switcher =true;

  return (
    <div className={Styles.mainCont}>
      <div className={Styles.rowCont} onClick={()=>setdisplayMoreInfo(pre=>!pre)} style={{backgroundColor:`${displayMoreInfo?'#47CD82':'#E3E4E5'}`}}>
        <p className={Styles.time}>{data['time']}</p>
        <p className={Styles.temp}>{data['temp']}</p>
        <div className={Styles.desCont}>
          <img src={require(`./images/meteo/${data['iconId']}.png`)} alt="wather icon" />
          <p>{data['des']}</p>
        </div>
        <p className={Styles.temMaxP}>{data['tempMax']}</p>
        <img className={Styles.windDirArrow} src={require(`./images/wind-direction.png`)} alt="wather icon" style={{transform:`rotate(${data['windDeg']}deg)`}}/>
        <p className={Styles.windSpeedP}>{data['windSpeed']}</p>
        <img className={Styles.arrowDown} src={require('./images/arrow-down.png')} alt="arow down" style={{transform:`rotate(${displayMoreInfo?'180':'0'}deg)`}}/>
      </div>


      <div className={`${Styles.moreInfoCont} ${displayMoreInfo?Styles.isOpen:Styles.isClosed}`} style={{maxHeight:displayMoreInfo?'1000px':'0px'}} >
        {
          moreInfoObject.map((info,i)=>{
            i%2==0?switcher=!switcher:switcher=switcher
            return i%2==0&& <MoreInfoRow key={i} data={[moreInfoObject[i],moreInfoObject[i+1]]} backGround={switcher?'#85DDAC':'#47CD82'}/>
          })
        }

      </div>
    </div>
  )
}

export default TableRow
