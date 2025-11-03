import "./../css/SlideShow.css";
import { useState } from "react";

const SlideShow = () => {
    
    let [slideIndex, setSlideIndex] = useState(0)
    let [slideIndexfoward, setSlideIndexForward] = useState(1);
    let [slideIndexBackwards, setSlideIndexBackwards] = useState(4);

    const importAll = (resource) => {
        return resource.keys().map(resource);
    };

    const images = importAll (
        require.context("../images/slideshow", false, /\.(png|jpe?g|svg$|webp)/)
    )

    const slideFoward = () => {
        setSlideIndex(slideIndex < images.length -1? slideIndex+1 : 0);
        setSlideIndexForward(slideIndexfoward < images.length -1? slideIndexfoward+1 : 0);
        setSlideIndexBackwards(slideIndexBackwards < images.length -1? slideIndexBackwards+1 : 0)
    };

    const slideBackward = () => {
        setSlideIndex(slideIndex >= 1? slideIndex-1:images.length-1);
        setSlideIndexForward(slideIndexfoward >=1? slideIndexfoward-1:images.length-1);
        setSlideIndexBackwards(slideIndexBackwards >=1? slideIndexBackwards-1:images.length-1);
    };

    return (
        <div id="slideshow" className="slideshow">
            <img id="hide-small" src={images[slideIndexBackwards]} />
            <img src={images[slideIndex]} />
            <img id="hide-small" src={images[slideIndexfoward]} />
            <a onClick = {slideFoward} id="right-arrow" className="arrow" href="#/">&gt;</a>
            <a onClick = {slideBackward} id="left-arrow" className="arrow" href="#/">&lt;</a>
        </div>
    );
};

export default SlideShow;