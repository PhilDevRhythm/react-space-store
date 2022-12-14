import React from 'react'
import '../main.css';

function Navbar() {

    let cartlist = []
    const cartLenght = cartlist.length

    let cartPrice = 0


    return (

        <div className=''>
            <div className="navbar bg-stone-900">
                <div className="flex-wrap flex-1 p-3 justify-start">
                    <a className="normal-case text-5xl m-1 text-white font-serif">Space Store</a>
                    </div>
                <div>
                    <button className="btn  btn-md m-1 justify-self-end">Home</button>
                    <button className="btn  btn-md m-1 justify-self-end">Store</button>
                    <button className="btn  btn-md m-1 justify-self-end">Help</button>
                </div>
                <div className="flex-none bg-transparent">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">{cartLenght}</span>
                            </div>
                        </label>
                        <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg">{cartLenght} Items</span>
                                <span className="text-info">Subtotal:{cartPrice}</span>
                                <div className="card-actions">
                                    <button className="normal-case text-xl btn btn-outline">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="https://placeimg.com/80/80/tech" alt='any' />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div></div>
    )
}

export default Navbar