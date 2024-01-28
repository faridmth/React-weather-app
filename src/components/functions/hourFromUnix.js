export const hourFromUnix=(time)=>{
    let dateNow = new Date(time*1000)
    let hours = dateNow.getHours().toString().padStart(2,'0')
    let minutes = dateNow.getMinutes().toString().padStart(2,'0')
    return `${hours}:${minutes}`
}
