import React from 'react';
import { numData } from '../data/index';

const Backed = () => {
  return (

    <div className="backed">
      <div className="flex">
        {
          numData.map(el => (
            <div key={Math.random()} className="backed__card">
              <h1>{el.number}</h1>
              <p>{el.caption}</p>
            </div>
          ))
        }
      </div>
      <div className="progres-bar">
        <div className="level"></div>
      </div>

    </div>
  )
}

export default Backed
