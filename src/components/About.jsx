import React, { Component } from 'react'
import ScrollArea from 'react-scrollbar'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Helmet from 'react-helmet'

import AboutSidebar from './AboutSidebar'
import 'react-lazy-load-image-component/src/effects/blur.css'
import PicAbout from '../assets/img/content/about-me-v2.jpg'

class About extends Component {
  render() {
    return (
      <section className="about--wrapper">
        <section>
          <Helmet>
            <title>About | Miloš Zeković - Front-end UI developer / UX/UI designer - Belgrade, Serbia</title>
          </Helmet>

          <ScrollArea
            speed={0.5}
            className="area"
            contentClassName="content"
            horizontal={false}
            smoothScrolling={true}
            >

            <div className="container">

              <h1><strong>About</strong></h1>

              <article className="content">
                <p>My name is <strong>Miloš Zeković</strong>, and I'm an IT engineer, creative <strong>UI designer</strong> and <strong>Front-end</strong> / <strong>UI developer</strong> with <i>7+</i> years of professional experience, based in <a href="https://goo.gl/maps/q91qjK4JUBP2" rel="noopener noreferrer" target="_blank">Belgrade RS</a>.</p>
                <div className="img--wrapp">
                  <LazyLoadImage effect="blur" alt="Miloš Zeković - Front-end developer / UX/UI designer" src={PicAbout} />
                </div>
                <div className="icon--wrapp">
                  <a href="http://tiny.cc/efcluy" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in"></i></a>
                  <a href="https://github.com/miloszekovic" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
                </div>
                <p>I have dealt with the <strong>web design</strong>, with the focus on web standards and <strong>UX</strong>, since <i>2004</i>. I created or helped with the creation of hundreds different web sites, portals and applications as a web designer, developer or web consultant. I create modern, and yet simple and most of all effective web sites with semantic, valid and SEO friendly code. Lately, I have been focused on <strong>UI design and HTML5 / CSS3 / JS coding and responsive pages</strong>. I became interested in <strong>web design</strong> in 2002 when I made the first <i>HTML page</i>.</p>
                <p>My work was presented by many relevant CSS design galleries such as the famous <a href="http://www.cssmania.com/" target="_blank" rel="noopener noreferrer">CssMania</a>, and it was reviewed positively on many relevant blogs. In my present career I worked with many important individuals and web design studios form Belgrade (also for Serbian Government) and World Wide.</p>
                <p>I can work closely with Designers and Back-end engineers, as a sole Front-end / UI or in <strong>Agile</strong> teams.</p>
                <h3>So, are you some perfectionist?</h3>
                <p><strong>Right!</strong> The design I make, together with HTML / CSS / JS code, is one “pixel precise” unit. In my opinion, if there is no perfectionism, there is no quality.</p>
                <p>When I do not play in the code then I certainly play old arcade video games or I'm on tatami where I practice moves from my favorite martial arts <strong>Krav Maga</strong> and <strong>BJJ</strong>.</p>
              </article>
              <AboutSidebar />
              <article className="about--site--wraper">
                <div className="about--site">
                  <h4>About this Website</h4>
                  <p>This site has been designed and built by hand from the ground up. It's handled through <strong>React</strong>, the <strong>CSS</strong> is written in <strong>Sass</strong>, with a <strong>mobile first</strong> approach and this <strong>modular scale</strong> for a more meaningful typography. Everything is optimised for speed, browser compatibility and SEO.</p>
                </div>
              </article>
            
            </div>
    
          </ScrollArea>
    
        </section>
      </section>
    );
  }
}

export default About