import React from 'react'
import '../components/Contact.css';
function Contact() {
  return (
    <div className="bg-secondary pt-4 pb-4 text-light">
      <h2 className='text-center text-info'>Contact</h2>
      <div className="text-center fs-4">Email at : ayushmanchoudhary43@gmail.com<br/>
        <p>Contact no: 8421562098</p>
        <p>
            <a href="https://www.instagram.com/ayushmanchoudhary9/" rel="noreferrer" target='_blank'><i className="fa-brands instagram fs-3 ms-3 fa-square-instagram"></i></a>
            <a href="https://linkedin.com/in/ayushman-choudhary-97b5892a3" rel="noreferrer" target='_blank'><i className="fa-brands linkedin fs-3 ms-3  fa-linkedin"></i></a>
            <a href="http://www.youtube.com/%40Ayush-kq3cf" rel="noreferrer" target='_blank'><i className="fa-brands youtube fs-3 ms-3 fa-youtube"></i></a>
        </p>
      </div>
    </div>
  )
}

export default Contact
