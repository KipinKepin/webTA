import React from 'react'
import { NavLink } from 'react-router-dom'

const Welcome = () => {
    return (
        <div>
            <p className='text-3xl font-bold text-error mb-5 text-center'>Welcome</p>
            <div className='flex justify-center gap-6'>
                <NavLink to={'./login'} className="btn btn-outline btn-primary">Login</NavLink>
                <NavLink to={'/register'} className="btn btn-outline btn-accent">Register</NavLink>
            </div>
        </div>
    )
}

export default Welcome