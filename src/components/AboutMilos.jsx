import React, { Component } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import 'react-lazy-load-image-component/src/effects/blur.css'
import PicAbout from '../assets/img/content/about-me.jpg'

class AboutMilos extends Component {
  render() {
    return (
        <div>
            <div className="img--wrapp">
                <LazyLoadImage effect="blur" alt="Miloš Zeković - Front-end developer / UX/UI designer" src={PicAbout} />
            </div>
            <div className="icon--wrapp">
                <a href="http://tiny.cc/efcluy" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in"></i></a>
                <a href="https://github.com/miloszekovic" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
            </div>
        </div>
    )
  }
}

export default AboutMilos