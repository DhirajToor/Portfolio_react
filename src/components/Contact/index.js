import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker  } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'  
import { useNavigate } from 'react-router-dom'

const service = process.env.REACT_APP_SERVICE;
const template = process.env.REACT_APP_TEMPLATE;
const API_KEY = process.env.REACT_APP_API_KEY;


const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refform = useRef()
  const Navigate = useNavigate();

  useEffect(() => {
      setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
         service, 
         template, 
        refform.current, 
        API_KEY)
      .then(
        () => {
          alert('Message successfully sent!')
          // window.location.reload(false)
            Navigate('/');
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      ) 
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone left-side">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in Web Developer opportunities. However, if you have any other requests or
             questions, don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={refform} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Dhiraj Toor,
          <br />
          Scarborough,
          <br />
          MorningSide & Ellesmere <br /> 
          <br />
          <span>dheerajtoor75@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer   center={ [43.7851142, -799.1933729]} zoom={13}>
            <TileLayer   
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
 
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={ [43.7851142, -799.1933729]}>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
