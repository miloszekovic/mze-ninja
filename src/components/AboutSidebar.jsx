import React, { Component } from 'react'
import AboutMilos from './AboutMilos'

class AboutSidebar extends Component {
  render() {
    return (
        <article className="sidebar">
            <AboutMilos />
            <h4>Skills and services</h4>
            <p>HTML5 - CSS / SASS - BEM<br />JavaScript - jQuery - jQuery Mobile<br />ReactJS - VueJS - Gulp<br />GIT / SVN - UX / UI<br />Web Design - Responsive Design<br />Atomic Design Methodology<br />Material Design<br />Progressive Enhancement<br />Pixel Perfect Layouts<br />From PSD to HTML - SEO<br />WordPress - Joomla - Magento</p>
            <h4>Dev and design tools</h4>
            <p>Visual Studio / VS Code<br />Sketch<br />Adobe CC<br />Adobe XD</p>
        </article>
    )
  }
}

export default AboutSidebar