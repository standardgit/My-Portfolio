import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='wrapper'>
            <div className="left">
                <div className="name">Standard</div>
            </div>
            <div className="right">
                <div className="list">
                    <ul>
                        <li>Home</li>
                        <li>services</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar