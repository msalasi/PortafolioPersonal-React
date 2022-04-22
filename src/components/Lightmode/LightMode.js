import React from 'react'
import './LightMode.css';

function LightMode() {
    const darkCheck = document.getElementById('flexSwitchCheckChecked');
    if (darkCheck.checked) {
        document.body.classList.add('light');
        localStorage.setItem('setTheme', 'light');
        console.log("Se cambio a ", localStorage.getItem('setTheme'));
    } else {
        document.body.classList.remove('light');
        console.log("Se cambio a modo dark");
        localStorage.removeItem('setTheme');
    }

    

    return (
        <div></div>
    )
}


export default LightMode


