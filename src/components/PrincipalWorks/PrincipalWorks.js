import React from 'react';
import {Link} from 'react-router-dom';
import './PrincipalWorks.css'
import '../Lightmode/LightMode.css';

function PrincipalWorks({title}) {
  return (
    <div className='container-principal-works'>
        <Link className='link-principal-works' to="/works">{title}</Link>
    </div>
  )
}

export default PrincipalWorks