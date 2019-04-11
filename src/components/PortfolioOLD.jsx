import React, { Component } from 'react'
import ScrollArea from 'react-scrollbar'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import Helmet from 'react-helmet'

import 'react-lazy-load-image-component/src/effects/blur.css'
import OliveBoxWeb from '../assets/img/content/portfolio/olive-box-web.jpg'
import OliveBoxApp from '../assets/img/content/portfolio/olive-box-app.jpg'
import SvetaSrbija from '../assets/img/content/portfolio/sveta-srbija.jpg'
import StaraPazova from '../assets/img/content/portfolio/stara-pazova.jpg'
import Zonaii from '../assets/img/content/portfolio/zonaii.jpg'
import BeYou from '../assets/img/content/portfolio/be-you.jpg'
import MoldovaBridge from '../assets/img/content/portfolio/moldovabridge.jpg'
import VpBg from '../assets/img/content/portfolio/vpbg.jpg'
import ZlaZla from '../assets/img/content/portfolio/zla-zla.jpg'
import Pausal from '../assets/img/content/portfolio/pausal.jpg'
import AtosVrata from '../assets/img/content/portfolio/atos-vrata.jpg'
import Evitbe from '../assets/img/content/portfolio/evitbe.jpg'

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

              <ul>

                <li className="even">
                  <article>
                    <div>
                      <span>
                        <h2><strong>Atos Vrata</strong> site</h2>
                        <h3>UX/UI<i></i>Front-end<i></i>WordPress</h3>
                        <p>2018<i></i><a href="http://www.atos-vrata.rs/" target="_blank" rel="noopener noreferrer nofollow">Atos-vrata.rs</a></p>
                      </span>
                    </div>
                    <LazyLoadImage effect="blur" alt="" src={AtosVrata} />
                  </article>
                </li>

                <li>
                  <article>
                    <div>
                      <span>
                        <h2><strong>Evitbe</strong> site</h2>
                        <h3>UX/UI<i></i>Front-end<i></i>WordPress</h3>
                        <p>2018<i></i>by: Evitbe<i></i><a href="http://www.evitbe.com/" target="_blank" rel="noopener noreferrer nofollow">Evitbe.com</a></p>
                      </span>
                    </div>
                    <LazyLoadImage effect="blur" alt="" src={Evitbe} />
                  </article>
                </li>

                <li>
                  <article>
                    <div>
                      <span>
                        <h2><strong>VPBG</strong> site</h2>
                        <h3>UX/UI<i></i>Front-end<i></i>WordPress</h3>
                        <p>2017<i></i><a href="http://www.vpbg.rs/" target="_blank" rel="noopener noreferrer nofollow">Vpbg.rs</a></p>
                      </span>
                    </div>
                    <LazyLoadImage effect="blur" alt="" src={VpBg} />
                  </article>
                </li>

                <li>
                  <article>
                    <div>
                      <span>
                        <h2><strong>Moldova bridge</strong> site</h2>
                        <h3>UX/UI<i></i>Front-end<i></i>WordPress</h3>
                        <p>2017<i></i><a href="http://www.moldovabridge.com/" target="_blank" rel="noopener noreferrer nofollow">Moldovabridge.com</a></p>
                      </span>
                    </div>
                    <LazyLoadImage effect="blur" alt="" src={MoldovaBridge} />
                  </article>
                </li>

                <li>
                  <article>
                    <div>
                      <span>
                        <h2><strong>Pausal</strong> app</h2>
                        <h3>UI development</h3>
                        <p>2016<i></i><a href="https://moj.pausal.rs/#/login/" target="_blank" rel="noopener noreferrer nofollow">moj.Pausal.rs</a></p>
                      </span>
                    </div>
                    <LazyLoadImage effect="blur" alt="" src={Pausal} />
                  </article>
                </li>

                <li>
                  <article>
                    <div>
                      <span>
                        <h2><strong>BeYou</strong> site</h2>
                        <h3>UX/UI<i></i>Front-end<i></i>WordPress</h3>
                        <p>2016<i></i><a href="http://www.beyoubefree.rs/" target="_blank" rel="noopener noreferrer nofollow">Beyoubefree.rs</a></p>
                      </span>
                    </div>
                    <LazyLoadImage effect="blur" alt="" src={BeYou} />
                  </article>
                </li>

                <li>
                  <article>
                    <div>
                      <span>
                        <h2><strong>Zla Zla Shop</strong> ecommerce</h2>
                        <h3>Front-end / UI</h3>
                        <p>2016<i></i><a href="http://www.zla-zla.com/zlashtek/" target="_blank" rel="noopener noreferrer nofollow">Zla-zla.com</a></p>
                      </span>
                    </div>
                    <LazyLoadImage effect="blur" alt="" src={ZlaZla} />
                  </article>
                </li>

                <li>
                  <article>
                    <div>
                      <span>
                        <h2><strong>Municipality Stara Pazova</strong> official site</h2>
                        <h3>UX/UI<i></i>Front-end<i></i>Drupal</h3>
                        <p>2015<i></i><a href="http://www.starapazova.rs/" target="_blank" rel="noopener noreferrer nofollow">Starapazova.rs</a></p>
                      </span>
                    </div>
                    <LazyLoadImage effect="blur" alt="" src={StaraPazova} />
                  </article>
                </li>
                
                <li>
                  <article>
                    <div>
                      <span>
                        <h2><strong>Olivebox</strong> site</h2>
                        <h3>UX/UI<i></i>Front-end</h3>
                        <p>2012<i></i>by: OliveBox Inc.<i></i><a href="https://www.olivebox.net/" target="_blank" rel="noopener noreferrer nofollow">Olivebox.net</a></p>
                      </span>
                    </div>
                    <LazyLoadImage effect="blur" alt="" src={OliveBoxWeb} />
                  </article>
                </li>
                
                <li className="even">
                  <article>
                    <div>
                      <span>
                        <h2><strong>Olivebox</strong> app</h2>
                        <h3>UX/UI<i></i>Front-end</h3>
                        <p>2013<i></i>by: OliveBox Inc.<i></i><a href="https://www.olivebox.net/pricing-signup/" target="_blank" rel="noopener noreferrer nofollow">Olivebox.net</a></p>
                      </span>
                    </div>
                    <LazyLoadImage effect="blur" alt="" src={OliveBoxApp} />
                  </article>
                </li>

                <li>
                  <article>
                    <div>
                      <span>
                        <h2><strong>Saint Serbia Org.</strong> site</h2>
                        <h3>UX/UI<i></i>Front-end<i></i>Drupal</h3>
                        <p>2014<i></i><a href="http://www.svetasrbija.org.rs/" target="_blank" rel="noopener noreferrer nofollow">Svetasrbija.org.rs</a></p>
                      </span>
                    </div>
                    <LazyLoadImage effect="blur" alt="" src={SvetaSrbija} />
                  </article>
                </li>

                <li>
                  <article>
                    <div>
                      <span>
                        <h2><strong>Zonaii Italia</strong> site</h2>
                        <h3>UX/UI<i></i>Front-end</h3>
                        <p>2010<i></i><a href="http://www.zonaii.com/" target="_blank" rel="noopener noreferrer nofollow">Zonaii.com</a></p>
                      </span>
                    </div>
                    <LazyLoadImage effect="blur" alt="" src={Zonaii} />
                  </article>
                </li>

              </ul>
            </div>

          </ScrollArea>

        </section>
      </section>
    );
  }
}

export default Portfolio