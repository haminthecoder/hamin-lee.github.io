
import React from 'react'

const Intro = () => {
    return (
        <div className="ui text container">
          <div className="ui hidden divider"></div>
          <h1 className="ui center aligned header">
            Hamin Lee
          </h1>
          <center>
            <i className="ca flag"></i>
            <i className="kr flag"></i>
          </center>
          <span role="img">
              Hey there, thanks for taking the time to learn more about me. I am a software/web developer 
              who wants to make this world a better place. I finished my Bachelors of
              Computer Science and Statistics at University of Toronto. My passions include learning 📖 and balling 🏀.
          </span>
          <div className="ui hidden divider"></div>
          <center>
            <a href="https://linkedin.com/in/hamin-lee/" class="ui circular linkedin icon button">
              <i class="linkedin icon"></i>
            </a>
            <a href="https://github.com/haminthecoder/" class="ui circular github icon button">
              <i class="github icon"></i>
            </a>
          </center>
        </div>
    )
}

export default Intro;
