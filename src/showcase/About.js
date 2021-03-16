import React from 'react'
import { dataAbout } from '../data/index';

const About = () => {
  return (
    <div className="about">
      <h1>{dataAbout.title}</h1>
      <p>{dataAbout.caption1}</p>
      <p>{dataAbout.caption2}</p>
    </div>
  )
}

export default About
