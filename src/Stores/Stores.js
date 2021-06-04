import React from 'react'
import './Stores.css'

const Stores = ({name,address}) => {
    return (
        <div className='wrapper'>
        <div className='stores'>
            <h2>{name}</h2>
            <p>{address}</p>
            <p>OPEN 7 DAYS | 4AM - 8PM</p>
            <div className='btn'>
                <button className='button'> <img src='' alt='logo'/> BANJO'S MENU</button>
                <button className='button'><img src='' alt='logo'/> PLATERS MENU</button>
            </div>
        </div>
        <img src='' alt='logo'/>
        </div>
    )
}

export default Stores;
