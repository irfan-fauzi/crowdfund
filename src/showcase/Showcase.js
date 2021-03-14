import React from 'react'
import { heroData } from '../data/index'

const Showcase = () => {

  return (
    <div className="showcase">

      <div className="showcase__master-icon">
        <img src={heroData.logo} alt="" />
      </div>

      <div className="showcase__text-wrap">
        <h1>{heroData.mainCaption}</h1>
        <p>{heroData.secondCaption}</p>
      </div>

      <div className="btn-wrap">
        <button className="showcase__btn btn">{heroData.textBtn}</button>
        <button className="bookmark__btn btn">
          <img src={heroData.logo2} alt="" />
          <span>bookmarked</span>
        </button>
      </div>

    </div>
  )
}

export default Showcase
