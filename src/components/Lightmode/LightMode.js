

import React from 'react'

function LightMode() {
        const darkCheck = document.getElementById('flexSwitchCheckChecked');
            if (darkCheck.checked) {
                document.body.classList.add('light');
                localStorage.setItem('setTheme', 'light');
                console.log(localStorage.getItem('setTheme'));
                
            } else {
                document.body.classList.remove('light');
                localStorage.removeItem('setTheme');
                console.log("eliminado del localStorage");
            }
    
            if (localStorage.getItem('setTheme')) {
                document.body.className = 'light';
                darkCheck.checked = true;
            }
    return (
        <div>LightMode</div>
    )
}

export default LightMode