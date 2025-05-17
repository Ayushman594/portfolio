import React from 'react';
import './Main.css';
import img from '../photo.JPG'
function Main() {
  return (
    <div className=" main d-flex align-items-center pt-6 justify-content-around">
      <img src={img} className=" rounded-circle" alt="personalphoto" />
      <div className="intro">
        <h3>Hi, My Name is Ayushman  Choudhary.</h3>
        <p>I am a Front end developer</p>
      </div>
    </div>
  )
}

export default Main


