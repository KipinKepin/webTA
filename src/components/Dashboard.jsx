import React from 'react'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom'

const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <NavLink
                to={'/data-diri'}
                className='btn btn-active btn-accent text-2xl font-bold mb-2'
                style={{ position: 'absolute', bottom: '0', left: '50%', transform: 'translate(-50%, 0)' }}
            >
                Choose My Exercise
            </NavLink>
        </div>
    )
}

export default Dashboard