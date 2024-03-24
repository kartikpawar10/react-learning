import React, { useState, useEffect } from "react";

const MyComponent = () => {

    const [time,setTime] = useState(new Date());
    // useEffect(function,[dep]);
    useEffect(()=>{
        const interval = setInterval(()=>{
            setTime(new Date());
        },1000);

        // cleanUp func
        return ()=>{
            clearInterval(interval)
        }
    },[]);

    function formatTime(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >=12 ? "PM" : "AM";
        hours = hours%12 || 12;

        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}:${meridiem}`
    }

    function padZero(number){
        return (number < 10 ? "0":"")+number 
    }
  return (
    <div className="clock-container">
      <div className="clock">
        <span>{formatTime()}</span>
      </div>
    </div>
  );
};

export default MyComponent;