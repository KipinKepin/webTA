import React from 'react'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom'

const DataDiri = () => {
    return (
        <div>
            <Navbar />
            <div className="card w-96 bg-base-content bg-opacity-50 shadow-xl text-black" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                <div className="card-body">
                    <h2 className="card-title flex justify-center text-black text-2xl font-bold mb-2">Introduce Your Self</h2>
                    <label className="form-control w-full max-w-xs text-black">
                        <div className="label">
                            <span className="label-text text-black">What is your name?</span>
                        </div>
                        <input type="text" placeholder="Input your name here" className="input input-bordered w-full max-w-xs text-white" />
                    </label>
                    <div className="flex gap-3 flex-col w-full lg:flex-row">
                        <div className="grid flex-grow h-25 card rounded-box place-items-center text-white">
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text text-black">Age</span>
                                </div>
                                <select className="select select-bordered">
                                    <option disabled selected>Choose one</option>
                                    <option>15 to 18</option>
                                    <option>19 to 25</option>
                                    <option>26 to 39</option>
                                    <option>40 or above</option>
                                </select>
                            </label>
                        </div>
                        <div className="grid flex-grow h-25 card rounded-box place-items-center">
                            <label className="form-control w-full max-w-xs text-white">
                                <div className="label">
                                    <span className="label-text text-black">Gender</span>
                                </div>
                                <select className="select select-bordered">
                                    <option disabled selected>Choose one</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    <div className="flex gap-3 flex-col w-full lg:flex-row">
                        <div className="grid flex-grow h-25 card rounded-box place-items-center">
                            <label className="form-control w-full max-w-xs text-black">
                                <div className="label">
                                    <span className="label-text text-black">Height (cm)</span>
                                </div>
                                <input type="text" placeholder="Input height" className="input input-bordered w-full max-w-xs text-white" />
                            </label>
                        </div>
                        <div className="grid flex-grow h-25 card rounded-box place-items-center">
                            <label className="form-control w-full max-w-xs text-black">
                                <div className="label">
                                    <span className="label-text text-black">Weight (kg)</span>
                                </div>
                                <input type="text" placeholder="Input weight" className="input input-bordered w-full max-w-xs text-white" />
                            </label>
                        </div>
                    </div>
                    <div className="flex gap-3 flex-col w-full lg:flex-row">
                        <div className="grid flex-grow h-25 card rounded-box place-items-center text-white">
                            <label className="form-control w-full max-w-xs">
                                <div className="label">
                                    <span className="label-text text-black">Fitness Level</span>
                                </div>
                                <select className="select select-bordered">
                                    <option disabled selected>Choose one</option>
                                    <option>Unfit</option>
                                    <option>Average</option>
                                    <option>Good</option>
                                    <option>Very Good</option>
                                </select>
                            </label>
                        </div>
                        <div className="grid flex-grow h-25 card rounded-box place-items-center">
                            <label className="form-control w-full max-w-xs text-white">
                                <div className="label">
                                    <span className="label-text text-black">Diet</span>
                                </div>
                                <select className="select select-bordered">
                                    <option disabled selected>Choose one</option>
                                    <option>No</option>
                                    <option>Not always</option>
                                    <option>Yes</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text text-black">Frequency (a week)</span>
                        </div>
                        <select className="select select-bordered text-white">
                            <option disabled selected>Choose one</option>
                            <option>Never</option>
                            <option>1 to 2 times</option>
                            <option>3 to 4 times</option>
                            <option>Everyday</option>
                        </select>
                    </label>
                    <label className="form-control w-full max-w-xs text-white">
                        <div className="label">
                            <span className="label-text text-black">Motivation</span>
                        </div>
                        <select className="select select-bordered">
                            <option disabled selected>Choose one</option>
                            <option>I want to be fit</option>
                            <option>I want to lose weight</option>
                            <option>I want to relieve stress</option>
                            <option>I want to be flexible</option>
                            <option>I want to increase muscle mass and strength</option>
                            <option>I want to achieve a sporting goal</option>
                            <option>Doing exercises prevents many diseases</option>
                        </select>
                    </label>

                    <div className="card-actions justify-center mt-4">
                        <NavLink to={'/recommendations'} className="btn btn-accent">Give me my recommendations</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DataDiri