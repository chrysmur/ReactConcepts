import React from 'react';
import './App.css';
import {Hour,MinSec,Ampm} from './components/time'
import Multi from './components/time'

class Timer extends React.Component{
  constructor (props){
    super(props)
    this.state = {date:new Date()}
  }
  fetchTime=()=>{
    this.setState({date:new Date()})
  }
  
  componentWillMount(){
    this.timerid=setInterval(()=>this.setState({date:new Date()}),1000)
  }

  componentWillUnmount(){
      if(this.timerid){
        clearInterval(this.timerid)
      }
  }
  render(){
    const vals = {val1:10,val2:100}
    const {date} = this.state
    const hour = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
     return (
      <div>
       Time <Hour hours={hour}/>:<MinSec minutes={minutes} seconds = {seconds}/> <Ampm hours={hour}/>
      <div>
        <Multi a={vals}/>
      </div>
      </div>
    )
  }
}
export default Timer;
