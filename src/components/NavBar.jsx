import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

import Footer from './Footer'
import IconHome from '../assets/img/ui/icon-home.svg'
import IconHomeActive from '../assets/img/ui/icon-home-active.svg'
import IconAbout from '../assets/img/ui/icon-about.svg'
import IconAboutActive from '../assets/img/ui/icon-about-active.svg'
import IconPortfolio from '../assets/img/ui/icon-portfolio.svg'
import IconPortfolioActive from '../assets/img/ui/icon-portfolio-active.svg'
import IconContact from '../assets/img/ui/icon-contact.svg'
import IconContactActive from '../assets/img/ui/icon-contact-active.svg'

class NavBar extends Component {
  render() {
    return (
      <aside>
        <article>
          <Link to="/">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 359.2 536.3">
              <g><g><polygon points="0 0 0 270.8 0 430.3 59.7 430.3 59.7 93.1 212.5 536.3 253.3 536.3 359.2 227.4 295.8 227.6 234 406.9 89.8 0 0 0"/></g></g>
            </svg>
          </Link>
        </article>
        <nav>
          <ul>
            <li>
              <NavLink to="/" exact activeClassName="active">
                <div className="nav--button"><img src={IconHome} alt="Miloš Zeković - Front-end developer / UX/UI designer" /></div>
                <div className="nav--button-active"><img src={IconHomeActive} alt="Miloš Zeković - Front-end developer / UX/UI designer" /></div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" exact activeClassName="active">
                <div className="nav--button"><img src={IconAbout} alt="Miloš Zeković - About me" /></div>
                <div className="nav--button-active"><img src={IconAboutActive} alt="Miloš Zeković - About me" /></div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio" exact activeClassName="active">
                <div className="nav--button"><img src={IconPortfolio} alt="Miloš Zeković - Portfolio" /></div>
                <div className="nav--button-active"><img src={IconPortfolioActive} alt="Miloš Zeković - Portfolio" /></div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" exact activeClassName="active">
                <div className="nav--button"><img src={IconContact} alt="Miloš Zeković - Contact" /></div>
                <div className="nav--button-active"><img src={IconContactActive} alt="Miloš Zeković - Contact" /></div>
              </NavLink>
            </li>
          </ul>
        </nav>
        <Footer />
      </aside>
    )
  }
}

export default NavBar