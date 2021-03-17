import React from 'react'
import { dataAbout, dataCard } from '../data/index';

const About = () => {
  return (
    <div className="about">
      <h1>{dataAbout.title}</h1>
      <p className="paragraf1">{dataAbout.caption1}</p>
      <p>{dataAbout.caption2}</p>
      {
        dataCard.map(el => (
          <div key={Math.random()} className="card non-active">
            <div className="text-wrap">
              <h2>{el.title}</h2>
              <h4>{el.title2}</h4>
            </div>
            <p>{el.caption}</p>
            <div className="btn-wrap">
              <h2 className="num">{el.number}<span>left</span></h2>
              <button className="btn">Select Reward</button>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default About
