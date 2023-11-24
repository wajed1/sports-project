import React from 'react'
import './Header2.css'

const Header2 = ({title, image, children}) => {
  return (
    <header className="header">
        <div className="header__container">
            <div className="header__container-bg">
                <img src={image} alt="Header Background Image"/>
                </div>
                <div className="header__content">
                 <h1><span style={{ color: 'black' }}> {title}</span></h1>
                    <h2><p> <span style={{ color: 'LimeGreen' }}>{children}</span></p></h2>

            </div>
        </div>

    </header>
  )
}

export default Header2