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
        localStorage.removeItem('setTheme');
        console.log("Se cambio a ", localStorage.getItem('setTheme'));
    }


    if (localStorage.getItem('setTheme')) {
        console.log("existe el local");
        document.body.className = 'light';
        darkCheck.checked = true;
    }else{
        console.log("no existe el local");
    }

    return (
        <div></div>
    )
}


export default LightMode


