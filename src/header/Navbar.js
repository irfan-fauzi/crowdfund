import React, { useEffect, useState } from 'react';
import logo from '../image/logo.svg';
import { FaBars } from 'react-icons/fa';
import { listNav } from '../data/index';

const Navbar = () => {
  const [showLink, setShow] = useState(true);
  //console.log(showLink)

  return (
    <header>
      <div className="container-nav">
        <div className="nav-header">
          <img src={logo} alt="" />
          <button className="nav-toggle"
            onClick={() => setShow(!showLink)} >
            <FaBars />
          </button>
        </div>

        <div className="links-container">
          <ul className={showLink ? `links` : `links show`}>
            {
              listNav.map(el => (
                <li key={Math.random()}>
                  <a href={el.url}>{el.text}</a>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Navbar
