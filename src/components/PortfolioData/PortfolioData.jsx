import React from 'react'
import { useFetch } from './hooks'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'

function PortfolioData() {
  const [ data, loading ] = useFetch(
    "https://raw.githubusercontent.com/miloszekovic/mzeninja-jsons/master/portfolio.json"
  )
  
  return (
    <div>
      { 
        loading ? (
        /* 'Loading ...' */
        <div class="sk-three-bounce">
          <div class="sk-child sk-bounce1"></div>
          <div class="sk-child sk-bounce2"></div>
          <div class="sk-child sk-bounce3"></div>
        </div>
        ) : (
        <ul>
          {
            data.map(({ id, name, type, desc, year, url, urlName, img }) => (
              <li key={`portfolio-${id}`}>
                <article>
                  <div>
                    <span>
                      <h2><strong>{name}</strong> {type}</h2>
                      <h3 dangerouslySetInnerHTML={ {__html: desc} }></h3>
                      <p>{year}<i></i><a href={url} target="_blank" rel="noopener noreferrer nofollow">{urlName}</a></p>
                    </span>
                  </div>
                  <LazyLoadImage effect="blur" alt={name} src={img} />
                </article>
              </li>
            ))
          }
        </ul>
        )
      }
    </div>
  );

}

export default PortfolioData
