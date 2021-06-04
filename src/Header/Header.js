import React from 'react'
import './Header.css';
import Capture from './Capture.JPG'

const Header = () => {
    return (
        <div className='header'>
            <ul className="main-nav">
            <li>
  				<img  src={Capture} alt='logo'/>
  			</li>
  			<li>
  				<h2>Store locations</h2>
  			</li>
            <div className='push'>
            <li>
              <h3>Sujith</h3>
  			</li>
  			<li>
  				<h3>Cart</h3>
  			</li>
            </div>
  		</ul>
          <div className='second-head'>
            <h5>Home/Store Locations</h5>
          </div>
        </div>
    )
}

export default Header;
