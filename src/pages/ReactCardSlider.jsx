import React from 'react';
import './Slider.css';
import { MdChevronLeft,MdChevronRight } from 'react-icons/md';
/**
 * This function returns a div with an id of main-slider-container.
 * Inside of this div, there is an MdChevronLeft and MdChevronRight icon.
 * The MdChevronLeft and MdChevronRight icons are used to scroll the slider to the left and right.
 * Inside of the div with an id of slider, there is a div with a class of slider-card.
 * Inside of the div with a class of slider-card, there is an image with a background image of the
 * image property of the slide.
 * Inside of the div with a class of slider-card, there is a p tag with a class of slider-card-title
 * and the text of the title property of the slide.
 * Inside of the div with a class of slider-card, there is a p tag with a class of
 * slider-card-description and the text of the description property of the slide
 */
const ReactCardSlider =(props)=>{
    const slideLeft =()=>{

        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    const slideRight =()=>{
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    return(
        <div id="main-slider-container">
            <MdChevronLeft size={40} className="slider-icon left" onClick={slideLeft}/>
            <div id="slider">
               { 
                props.slides.map((slide,index)=>{
                        return(
                            <div className="slider-card" key={index} onClick={()=>slide.clickEvent()}>
                                <div className="slider-card-image" style={{backgroundImage:`url(${slide.image})`,backgroundSize:'cover'}}></div>
                                <p className="slider-card-title">{slide.title}</p>
                                <p className="slider-card-description">{slide.description}</p>
                            </div>
                        )
                    })
                }
            </div>
            <MdChevronRight size={40} className="slider-icon right" onClick={slideRight}/>
        </div>
    )
}
export default ReactCardSlider;