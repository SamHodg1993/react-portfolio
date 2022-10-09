import React from 'react'
import SeanTrussHighlands from '../images/SeanTrussHighlands.jpg'
import PortfolioScreenshot from '../images/PortfolioScreenshot.png'

function Portfolio() {
  return (
    <div className='portfolio-container' id="portfolio">
        <h2 className='portfolio-title'>Portfolio</h2>
        <div className='portfolio-card-container'>
            <div className='portfolio-card'>
            <a href="https://github.com/SamHodg1993/rst-mobile" target="_blank" rel="noreferrer"><img src={SeanTrussHighlands} alt="RST pic" className='rst-image'/></a>
                { window.innerWidth > 1200 && <p className='portfolio-card-details'>Robert Summers Transport</p>}
                { window.innerWidth > 1200 && <p className='portfolio-card-details'>React | TailwindCSS | React-Scroll</p>}
            </div>
            <div className='portfolio-card'>
                <a href="https://github.com/SamHodg1993/react-portfolio" target="_blank" rel="noreferrer"><img src={PortfolioScreenshot} alt="Pic of portfolio" className='portfolio-screenshot' /></a>
                { window.innerWidth > 1200 && <p className='portfolio-card-details'>The source code for this website</p>}
                { window.innerWidth > 1200 && <p className='portfolio-card-details'>React | TailwindCSS | React-Scroll</p>}
            </div>
            <div className='portfolio-card'>
                <div className='to-be-image'>To be image</div>
                { window.innerWidth > 1200 && <p className='portfolio-card-details'>Lord of The Rings App</p>}
                { window.innerWidth > 1200 && <p className='portfolio-card-details'>React | TailwindCSS | React-Scroll | REST API</p>}
            </div>
        </div>
    </div>
    
  )
}

export default Portfolio