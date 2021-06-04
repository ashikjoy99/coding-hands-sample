import React from 'react'
import MainHome from '../MainHome/MainHome'
import SideBar from '../SideBar/SideBar'
import './Home.css'

const Home = () => {
    return (
        <div className='home'>
            <SideBar/>
            <MainHome/>
        </div>
    )
}

export default Home;
