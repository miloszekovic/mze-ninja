import React, { Component } from 'react'
import ScrollArea from 'react-scrollbar'
import Helmet from 'react-helmet'
import PortfolioData from './PortfolioData/PortfolioData'

class Portfolio extends Component {
  render() {
    return (
      <section className="portfolio--wrapper">
        <section>
          <Helmet>
            <title>Portfolio | Miloš Zeković - Front-end UI developer / UX/UI designer - Belgrade, Serbia</title>
          </Helmet>

          <ScrollArea
            speed={0.5}
            className="area"
            contentClassName="content"
            horizontal={false}
            smoothScrolling={true}
            >

            <div className="container">
              <h1><strong>Portfolio</strong></h1>

              <PortfolioData />
            </div>

          </ScrollArea>

        </section>
      </section>
    )
  }
}

export default Portfolio