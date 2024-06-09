import React from 'react'
// import './Hero.css';
import ima1 from '../images/nubik.jpg';
import ima2 from '../images/pexel.jpg';


const Hero = () => {
    return (
        <div className='Heroimage'>
            <img src={ima1} alt="" className='hero1' />
            
            <div className="overlay">
                
                <div className="lefty">
                    <h1>Your Best Trip</h1>
                   
                </div>
                <div className="lefta">
                    <h1>only with banjaara travels</h1>
                   
                </div>
                <div className="righty">
                    <img src={ima2} alt="Another Image" className="additional-image" />
                </div>
              
            </div>
        </div>
    )
}

export default Hero