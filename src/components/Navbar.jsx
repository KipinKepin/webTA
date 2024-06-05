import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex justify-center items-center' style={{ width: '100vw', position: 'absolute', left: 0, top: 0 }}>
            <div className="navbar bg-base-100 bg-opacity-0">
                <div className="flex-1">
                    <NavLink to={'/dashboard'} className="btn btn-ghost text-black font-bold text-2xl">FUN WORKOUT DEL</NavLink>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-2 text-black font-bold flex gap-3" style={{ fontSize: 'large' }}>
                        <li><NavLink to={'/recommendations'} className='bg-neutral-content'>Recommendation</NavLink></li>
                        <li><NavLink to={'/history'} className='bg-neutral-content'>History</NavLink></li>
                        <li><NavLink to={'/about'} className='bg-neutral-content'>About Us</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar