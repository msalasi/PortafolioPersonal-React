import React from 'react'
import TodoAppImg from '../../assets/Img/TodoApp.png';
import './Works.css';
import '../../components/Lightmode/LightMode.css';

const Works = () => {
  return (
  <>
    <article className='article-projects'>
      <div className='main-container-projects'>
        <h3 className='h3-projects'>My Works</h3>
        <div className='row-1-works'>
          <div className='work'>
            <img className='img-todo-app' src={TodoAppImg} alt='Todo App'></img>
            <a className='work-h2' href="https://todoaplication.netlify.app/" target="_blank" rel="noreferrer">Todo App</a>
            <p className='work-p'>Gestionador de tareas basico hecho con React js</p>
          </div>
          <div className='work'>
            <img className='img-todo-app' src={TodoAppImg} alt='Todo App'></img>
            <a className='work-h2' href="https://todoaplication.netlify.app/" target="_blank" rel="noreferrer">Todo App</a>
            <p className='work-p'>Aplication for add or remove works</p>
          </div>
        </div>
      </div>
    </article>
  </>
    
  )
}

export default Works