import React, { Component } from 'react'
import ScrollArea from 'react-scrollbar'
import Helmet from 'react-helmet'

class Message extends Component {
  render() {
    return (
      <section className="contact--wrapper">
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

              <h1><strong>THX!</strong></h1>
              <p><strong>Thank you 4 your message.</strong> I'll answer you soon ...</p>

            </div>

          </ScrollArea>

        </section>
      </section>
    )
  }
}

export default Message