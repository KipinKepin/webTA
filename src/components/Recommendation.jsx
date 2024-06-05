import React from 'react'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom'

const Recommendation = () => {
    return (
        <div>
            <Navbar />
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                <div className="hero bg-base-content bg-opacity-50 rounded-box text-black">
                    <div className="hero-content">
                        <div className="max-w-md">
                            <h1 className="text-5xl font-bold text-center mb-3">Your Exercises Recommendations</h1>
                            <div className="join join-vertical w-full">
                                <div className="collapse collapse-arrow join-item border border-base-300">
                                    <input type="radio" name="my-accordion-4" />
                                    <div className="collapse-title font-medium">
                                        1. Walking or jogging
                                    </div>
                                    <div className="collapse-content bg-base-100 text-white">
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere quidem quisquam a et temporibus voluptatibus eos optio nesciunt consequuntur quae.</p>
                                        <a href="https://scholar.google.com" className='text-primary'>scholar.google.com</a>
                                    </div>
                                </div>
                                <div className="collapse collapse-arrow join-item border border-base-300">
                                    <input type="radio" name="my-accordion-4" />
                                    <div className="collapse-title font-medium">
                                        2. Football/Soccer
                                    </div>
                                    <div className="collapse-content bg-base-100 text-white">
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere quidem quisquam a et temporibus voluptatibus eos optio nesciunt consequuntur quae.</p>
                                        <a href="https://scholar.google.com" className='text-primary'>scholar.google.com</a>
                                    </div>
                                </div>
                                <div className="collapse collapse-arrow join-item border border-base-300">
                                    <input type="radio" name="my-accordion-4" />
                                    <div className="collapse-title font-medium">
                                        3. Calisthenics
                                    </div>
                                    <div className="collapse-content bg-base-100 text-white">
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere quidem quisquam a et temporibus voluptatibus eos optio nesciunt consequuntur quae.</p>
                                        <a href="https://scholar.google.com" className='text-primary'>scholar.google.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recommendation