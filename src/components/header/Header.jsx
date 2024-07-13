import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpg'
import HeaderSocial from './HeaderSocials'

const Header = ({ switchTheme }) => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Mohamed El-Shahat</h1>
        <h5 className="text-light">Full-stack Developer | Angular | ASP.NET</h5>
        <CTA></CTA>
        <HeaderSocial />

        <button className="me" onClick={switchTheme}>
          <img className='avatar' src={ME} alt="me" />
        </button>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  )
}

export default Header
