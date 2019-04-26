import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ScrollArea from 'react-scrollbar'
import Helmet from 'react-helmet'

const helloArray = ['amiko', 'friend', '友達', 'друже', 'prieten', 'freund', 'hoa', 'друг', 'venn', 'amigo', 'sõber', 'φίλος', 'vän', 'मित्र']

class Home extends Component {

  constructor() {
    super();
    this.state = { helloIndex: 0 }
  }

  componentDidMount() {
    this.timeout = setInterval(() => {
      let currentIndex = this.state.helloIndex;
      this.setState({ helloIndex: currentIndex + 1 })
    }, 500)
  }

  componentDidUnmount() {
    clearInterval(this.timeout)
  }

  render() {
    let textThatChanges = helloArray[this.state.helloIndex % helloArray.length]

    return (
      <section className="home--wrapper">
        <section>
          <Helmet>
            <title>Miloš Zeković - Front-end UI developer / UX/UI designer - Belgrade, Serbia</title>
          </Helmet>

          <ScrollArea
            speed={0.5}
            className="area"
            contentClassName="content"
            horizontal={false}
            smoothScrolling={true}
            >

            <div className="container">

              <h1>Web <strong>design</strong> and <strong>dev<i>elopment</i></strong></h1>
              <h2><strong>Hello</strong> <span>{textThatChanges}</span></h2>
              <p>My name is <strong>Miloš Zeković</strong>, and I'm an IT engineer, creative <strong>UI designer</strong> and <strong>Front-end</strong> / <strong>UI developer</strong> with <i>7+</i> years of professional experience, based in <a href="https://goo.gl/maps/q91qjK4JUBP2" rel="noopener noreferrer" target="_blank">Belgrade RS</a>. I like to resolve design problems, create smart user interface and imagine useful interaction, developing rich web experiences and web app's.</p>
              <p>When I do not play in the code then I certainly play old arcade video games or I'm on tatami where I practice moves from my favorite martial arts <strong>Krav Maga</strong> and <strong>BJJ</strong>.</p>
              <p>Find out more <Link className="fancy" to="/about">about me</Link>, look at my <Link className="fancy" to="/portfolio">portfolio</Link> and <Link className="fancy" to="/contact">contact me</Link> we can have a project, or beer, or both.</p>
              
              <ul className="tech--icon--list">
                <li><i className="icon-html5-alt"></i></li>
                <li><i className="icon-css3-alt"></i></li>
                <li><i className="icon-bootstrap"></i></li>
                <li><i className="icon-javascript-alt"></i></li>
                <li><i className="icon-jquery"></i></li>
                <li><i className="icon-svg"></i></li>
                <li><i className="icon-reactjs"></i></li>
                <li><i className="icon-magento"></i></li>
                <li><i className="icon-wordpress"></i></li>
                <li><i className="icon-php-alt"></i></li>
                <li><i className="icon-gulp"></i></li>
                <li><i className="fab fa-android"></i></li>
                <li><i className="fab fa-apple"></i></li>
              </ul>

            </div>

          </ScrollArea>

        </section>
      </section>
    );
  }
}

export default Home