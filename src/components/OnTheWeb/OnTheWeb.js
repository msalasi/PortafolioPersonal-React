import React from 'react'
import './OnTheWeb.css';
import github from '../../assets/icons/github.png';
import instagram from '../../assets/icons/instagram.png';
import linkedin from '../../assets/icons/linkedin.png';

const OnTheWeb = ({title}) => {
  return (
    <div className='container-ontheweb'>
        <h2 className='h2-ontheweb'>{title}</h2>
        <div className='container-img-ontheweb'>
          <img className='img-ontheweb' src={instagram} alt='Instagram'></img>
          <a className='a-ontheweb' href='https://www.instagram.com/msalasi.dev/' target="_blank" rel="noreferrer">@msalasi.dev</a>
        </div>
        <div className='container-img-ontheweb'>
          <img className='img-ontheweb' src={linkedin} alt='Linkedin'></img>
          <a className='a-ontheweb' href='https://www.linkedin.com/in/misaindev/' target="_blank" rel="noreferrer">@misaindev</a>
        </div>
        <div className='container-img-ontheweb'>
          <img className='img-ontheweb' src={github} alt='Github'></img>
          <a className='a-ontheweb' href='https://github.com/msalasi' target="_blank" rel="noreferrer">@msalasi</a>
        </div>
    </div>
  )
}

export default OnTheWeb