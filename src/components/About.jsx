import React, { Component } from 'react'
import ScrollArea from 'react-scrollbar'
import Helmet from 'react-helmet'

import AboutSidebar from './AboutSidebar'
import AboutMilos from './AboutMilos'

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
                <AboutMilos />
                <p>I have dealt with the <strong>web and app design</strong>, with the focus on web standards and <strong>UX</strong>, since <i>2005</i>. I created or helped with the creation of hundreds different web sites, portals and applications as a ui designer, frond-end developer or web consultant. I create modern, and yet simple and most of all effective web sites and apps with semantic, valid and SEO friendly code. Lately, I have been focused on <strong>UI design and HTML5 / CSS3 / JS coding and responsive pages</strong>.</p>
                <p>Also, I have a lot of experience in designing and coding <a href="https://github.com/miloszekovic/email-template" rel="noopener noreferrer" target="_blank">email templates</a> for digital marketing campaigns, newsletters and similar things.</p>
                <p>My work was presented by many relevant CSS design galleries such as the famous <a href="http://www.cssmania.com/" target="_blank" rel="noopener noreferrer">CssMania</a>, and it was reviewed positively on many relevant blogs. In my present career I worked with many important individuals and web design studios and companies from Belgrade and World Wide. Also, I worked for Serbian Government some time.</p>
                <p>I can work closely with Designers and Back-end engineers, as a sole Front-end / UI or in <strong>Agile</strong> teams.</p>
                <h3>So, are you some perfectionist?</h3>
                <p><strong>Right!</strong> The design I make, together with HTML / CSS / JS code, is one “pixel precise” unit. In my opinion, if there is no perfectionism, there is no quality.</p>
                <p>In short, here are some of my most relevant qualifications and accomplishments:</p>
                <ul>
                  <li><span>7+ years of experience as a Front-end/UI Developer</span></li>
                  <li><span>Crafted various website and web apps features using HTML5, CSS3 and JS</span></li>
                  <li><span>Developed and implemented project scope and timelines based on the design-develop-deploy process</span></li>
                  <li><span>Collaborated with UX/UI Designers and Back-end Developers (PHP, C#, Python...) and ensured coherence between all parties</span></li>
                  <li><span>Cross browser compatibility, tested feature prototypes for bugs and user experience</span></li>
                  <li><span>Pixel perfect approach</span></li>
                </ul>
                <p>When I do not play in the code, then I certainly play old arcade video games, or I'm on tatami where I practice moves from my favorite martial arts <strong>Krav Maga</strong> and <strong>BJJ</strong>.</p>
              </article>
              <AboutSidebar />
              <article className="about--site--wraper">
                <div className="about--site">
                  <h4>About this Website</h4>
                  <p>This site has been designed and built by hand from the ground up as a SPA. It's handled through <strong>ReactJS</strong> with <strong>React Router</strong>, the <strong>CSS</strong> is written in <strong>Sass</strong> with <strong>CSS Grid</strong>, with a <strong>mobile first</strong> approach. Everything is optimised for speed, browser compatibility and SEO.</p>
                </div>
              </article>
            
            </div>
    
          </ScrollArea>
    
        </section>
      </section>
    )
  }
}

export default About