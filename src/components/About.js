import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
  <h2>About Me</h2>
  <p>
    I am a passionate web developer with a love for building interactive web applications.
    I specialize in front-end technologies like React and JavaScript.
  </p>
  <img src={image} alt="I made this" />
    </div>;
}

export default About;
