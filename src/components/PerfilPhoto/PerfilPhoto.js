import React from 'react'
import perfilPhoto from '../../assets/Img/perfilPhoto.jpg';
import './PerfilPhoto.css';
import '../Lightmode/LightMode.css';

function PerfilPhoto() {
  return (
    <>

      <div className='container-principal-section'>
        <img className='img-principal-section' src={perfilPhoto} alt='Foto personal'></img>
        <h3 className='h3-principal-section'>Hi I'm Mike! .</h3>
        <div className='container-h2-principal-section'>
          <h2 className='h2-principal-section'>I'm Front-End Developer</h2>
        </div>

      </div>
    </>

  )
}

export default PerfilPhoto