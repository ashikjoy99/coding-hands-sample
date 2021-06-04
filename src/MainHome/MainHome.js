import React, {  useEffect,useState } from 'react'
import Stores from '../Stores/Stores'
import './MainHome.css'

const MainHome = () => {

    const [state, setState] = useState('')

    useEffect(() => {
        fetch(' http://54.253.29.55/api/stores')
        .then(response=> response.json())
        .then(names=>setState(names.data))
    })
    return (
        <div className='main-home'>
            <div className='searchbar'>
                <h2>Our Stores</h2>
                <input className='input' placeholder='Search Store'/>
            </div>
            <div>
            {
              state &&  state.slice(0,10).map((item,index)=>{
                  return  (<Stores key={index} name={item.name} address={item.address}/>)
                })
            }
            </div>
        </div>
    )
}

export default MainHome
