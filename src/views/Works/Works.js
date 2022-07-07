import React from "react";
import TodoAppImg from "../../assets/Img/TodoApp.png";
import CovidTracker from "../../assets/Img/covidtracker-modded.png";
import LinkInBio from "../../assets/Img/Linkinbiomodded.png";
import "./Works.css";
import "../../components/Lightmode/LightMode.css";

const Works = () => {
  return (
    <>
      <article className="article-projects">
        <div className="main-container-projects">
          <h3 className="h3-projects">My Works</h3>
          <div className="row-1-works">
            <div className="work">
              <img
                className="img-todo-app"
                src={TodoAppImg}
                alt="Todo App"
              ></img>
              <a
                className="work-h2"
                href="https://todoaplication.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Todo App
              </a>
              <p className="work-p">Aplication for add or remove works</p>
            </div>
            <div className="work">
              <img
                className="img-todo-app"
                src={CovidTracker}
                alt="Covid Tracker"
              ></img>
              <a
                className="work-h2"
                href="https://covidtracker-g.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Covid Tracker
              </a>
              <p className="work-p">Covid tracker aplication</p>
            </div>
            <div className="work">
              <img
                className="img-todo-app"
                src={LinkInBio}
                alt="Covid Tracker"
              ></img>
              <a
                className="work-h2"
                href="https://personal-link-in-bio.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Link in bio
              </a>
              <p className="work-p">Personal link in bio for Instagram</p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Works;
