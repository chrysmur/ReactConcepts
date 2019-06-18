import React from 'react'

const Hour = (props) =>{
    let {hours}= props
    if (hours===0){ hours=12}
    return (<span>{hours>9? hours : '0'+hours}</span>)
}

const MinSec = (props) =>{  
    const {minutes,seconds}=props
    return(<span> {minutes>9? minutes: '0'+minutes}:{seconds>9? seconds: '0'+seconds}</span>)
}

const Ampm = (props)=> {
    const {hours} = props 
    return (<span>{hours>11?"pm":"am"}</span>)
}
export {Hour,MinSec,Ampm}