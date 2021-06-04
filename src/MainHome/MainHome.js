import React, {  useEffect,useState } from 'react'
import Stores from '../Stores/Stores'
import './MainHome.css'

const MainHome = () => {

    const [state, setState] = useState('');
    const [search, setSearch] = useState('')
    useEffect(() => {
        fetch(' http://54.253.29.55/api/stores')
        .then(response=> response.json())
        .then(names=>setState(names.data))
    })

    const filtered = state && state.filter(item=>{
        return item.name.toLowerCase().includes(search.toLowerCase());
    })

    

    return (
        <div className='main-home'>
            <div className='searchbar'>
                <h2>Our Stores</h2>
                <input onChange={(event) => setSearch(event.target.value)} className='input' placeholder='Search Store'/>
            </div>
            <div>
            {
              state &&  filtered.map((item,index)=>{
                  return  (<Stores key={index} name={item.name} address={item.address}/>)
                })
            }
            </div>
        </div>
    )
}

export default MainHome
