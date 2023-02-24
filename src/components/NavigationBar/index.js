import React from 'react'
import './index.css'

function NaviationBar() {
    return (
        <div className="navigation-container">
            <div className="navigation-left">
                <div className="logo">
                    <span>Estatery</span>
                </div>
                <span>Rent</span>
                <span>Buy</span>
                <div className="manage-prop">
                    <span>Mangae Property</span>
                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L7 7L13 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <div className="resources">
                    <span>Resources</span>
                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L7 7L13 1" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
            <div className="navigation-right">
                <button className="login">Login</button>
                <button className="signup">Sign up</button>
            </div>
        </div>
    )
}

export default NaviationBar