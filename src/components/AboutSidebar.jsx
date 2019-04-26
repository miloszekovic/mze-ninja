import React, { Component } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import 'react-lazy-load-image-component/src/effects/blur.css'
import PicAbout from '../assets/img/content/about-me.jpg'

class AboutSidebar extends Component {
  render() {
    return (
        <article className="sidebar">
            <div className="img--wrapp">
                <LazyLoadImage effect="blur" alt="Miloš Zeković - Front-end developer / UX/UI designer" src={PicAbout} />
            </div>
            <div className="icon--wrapp">
                <a href="http://tiny.cc/efcluy" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in"></i></a>
                <a href="https://github.com/miloszekovic" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
            </div>
            <h4>Skills and services</h4>
            <p>HTML5 - CSS / SASS - BEM<br />JavaScript - jQuery - jQuery Mobile<br />ReactJS - VueJS - Gulp<br />GIT / SVN - UX / UI<br />Web Design - Responsive Design<br />Atomic Design Methodology<br />Material Design<br />Progressive Enhancement<br />Pixel Perfect Layouts<br />From PSD to HTML - SEO<br />WordPress - Joomla - Magento</p>
            <h4>Dev and design tools</h4>
            <p>Visual Studio / VS Code<br />Sketch<br />Adobe CC<br />Adobe XD</p>
        </article>
    );
  }
}

export default AboutSidebar