import React from 'react'
import perfiltest from '../../assets/perfiltest.jpeg';
import './PerfilPhoto.css';
function PerfilPhoto() {
  return (
    <div className='container-principal-section'>
        <img className='img-principal-section' src={perfiltest} alt='Foto personal'></img>
        <h3 className='h3-principal-section'>Hi I’m Mike! </h3>
        <div className='container-h2-principal-section'>
          <h2 className='h2-principal-section'>I’m Front-End Developer</h2>
        </div>
        
    </div>
  )
}

export default PerfilPhoto