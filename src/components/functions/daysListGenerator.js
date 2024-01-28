export function daysList(fromDate,values,isMenu){
    const days=["dim","lun","mar","mer","jeu","ven","sam"];
    const options = [];
    values.map((val,i)=>{
        i !==0 ? fromDate.setDate(fromDate.getDate()+1) : fromDate.setDate(fromDate.getDate())
        options.push({
          id:`option${i}`,
          key:{i}, 
          value:isMenu?fromDate.getDate():{val},
          label:i===0 && !isMenu?"Aujourd'hui" : `${fromDate.getDate()} ${days[fromDate.getDay()]}`,
         })
    })
    return options;
}