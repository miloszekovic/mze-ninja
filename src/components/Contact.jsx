import React, { Component } from 'react'
import ScrollArea from 'react-scrollbar'
import Helmet from 'react-helmet'

class Contact extends Component {
  render() {
    return (
      <section className="contact--wrapper">
        <section>
          <Helmet>
            <title>Contact | Miloš Zeković - Front-end UI developer / UX/UI designer - Belgrade, Serbia</title>
          </Helmet>

          <ScrollArea
            speed={0.5}
            className="area"
            contentClassName="content"
            horizontal={false}
            smoothScrolling={true}
            >

            <div className="container">

              <h1><strong>Contact</strong></h1>
              <p className="big"><strong>Have a cool project in mind, and think I can help you with it?</strong> Or even a beer?<br />Feel free to email me at <a href="mailto:milos@mze.ninja" className="fancy">milos@mze.ninja</a> or from contact form.</p>

              <form id="contact" name="contact" action="https://formspree.io/milos@mze.ninja" method="POST">
                <ul>
                  <li><input name="name" placeholder="Name" type="text" required pattern=".{3,}" /></li>
                  <li><input name="_replyto" placeholder="Email" type="email" required pattern="[^@\s]+@[^@\s]+\.[^@\s]+" /></li>
                  <li><textarea name="message" placeholder="Message ..." /></li>
                  <li><button type="submit" value="Send" className="fancy">Send</button></li>
                </ul>
                <input type="hidden" name="_next" value="/message" />
                <input type="hidden" name="_subject" value="Contact from MZE.NINJA site" />
                <input type="hidden" name="_format" value="plain" />
              </form>

            </div>

          </ScrollArea>

        </section>
      </section>
    );
  }
}

export default Contact