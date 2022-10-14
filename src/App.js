import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


const Clock = () => {
  let time = new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState();

  const updateTime = () => {
    let time = new Date().toLocaleTimeString();
    setCurrentTime(time);
  }

  setInterval(updateTime, 1000);
  return (
    <div className='clock'>
      <h1>{time}</h1>
    </div>
  )
}




export default Clock; 
