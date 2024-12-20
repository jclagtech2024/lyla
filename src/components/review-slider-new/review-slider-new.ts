import React, { useEffect, useState, useRef } from "react";
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ReviewSlider = ({ reviewSlidesArr = [] }) => {
    const [inViewPort, setInViewPort] = useState(false);
    const [activeId, setActiveId] = useState("slide-0");
    const sliderRef = useRef(null);

    const settings = {
        dots: true,
        infinite: false,
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        afterChange: (current) => setActiveId(`slide-${current}`),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    // Intersection Observer to detect when the slider is in the viewport
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setInViewPort(entry.isIntersecting);
            },
            { threshold: 0.5 }
        );

        const sliderElement = sliderRef.current;
        if (sliderElement) {
            observer.observe(sliderElement);
        }

        return () => {
            if (sliderElement) observer.unobserve(sliderElement);
        };
    }, []);

    const goToPreviousSlide = () => {
        sliderRef.current.slickPrev();
    };

    const goToNextSlide = () => {
        sliderRef.current.slickNext();
    };

    return (
        <>
        <div
      className= "review-slider"
    const ref = { sliderRef }
    aria - label="Customer reviews carousel"
        >
        { inViewPort && (
            <Slider { ...settings } >
            {
                reviewSlidesArr.map((slide, ind) => (
                    <div key= { ind } id = {`slide-${ind}`} className = "review-slider__items" >
                        <div className="star" >
                        {
                            Array.from({ length: 5 }).map((_, i) => (
                                <svg
                    key= { i }
                    role = "presentation"
                    stroke = "currentColor"
                    fill = "currentColor"
                    viewBox = "0 0 24 24"
                    height = "1em"
                    width = "1em"
                                >
                                <path fill="none" d = "M0 0h24v24H0z" > </path>
                                < path d = "M14.43 10 12 2l-2.43 8H2l6.18 4.41L5.83 22 12 17.31 18.18 22l-2.35-7.59L22 10z" > </path>
                                </svg>
                            ))
                        }
                            </div>
                            < h3 className = "review-slider__items--title" tabIndex = { activeId === `slide-${ind}` ? 0 : -1
}>
    <span dangerouslySetInnerHTML={ { __html: slide.title } } />
        </h3>
        < div className = "review-slider__items--usertitle" tabIndex = { activeId === `slide-${ind}` ? 0 : -1}>
            <img
                  src={ slide.buyer.img.src }
alt = { slide.buyer.img.alt }
width = { slide.buyer.img.width }
height = { slide.buyer.img.height }
aria - hidden="true"
    />
    <p>
    { slide.buyer.name }
    < span > { slide.buyer.type } </span>
    </p>
    </div>
    < div
className = "review-slider__items--des"
tabIndex = { activeId === `slide-${ind}` ? 0 : -1}
dangerouslySetInnerHTML = {{ __html: slide.review }}
              />
    </div>
          ))}
</Slider>
      )}
<div className="owlNavWrap" >
    <button
          className="owlNav left"
onClick = { goToPreviousSlide }
aria - label="Click to go to the previous customer testimonial"
    >
          & lt;
</button>
    < button
className = "owlNav right"
onClick = { goToNextSlide }
aria - label="Click to go to the next customer testimonial"
    >
          & gt;
</button>
    </div>
    </div>

    </>
  );
};

export default ReviewSlider;
