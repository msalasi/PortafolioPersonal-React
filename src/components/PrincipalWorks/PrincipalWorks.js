import React from 'react';
import {Link} from 'react-router-dom';


function PrincipalWorks({title}) {
  return (
    <div>
        <Link to="/works">{title}</Link>
    </div>
  )
}

export default PrincipalWorks