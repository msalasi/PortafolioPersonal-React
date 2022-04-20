import React from 'react'
import './PrincipalText.css';
import '../Lightmode/LightMode.css';

const PrincipalText = ({title, content}) => {
  return (
    <div className='container-principal-text'>
        <h2 className='h2-principal-text'>{title}</h2>
        <p className='p-principal-text'>{content}</p>
    </div>
  )
}

export default PrincipalText