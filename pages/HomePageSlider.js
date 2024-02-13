import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const HomePageSlider = () => {
  const [slides, setSlides] = useState([]);
  const [selectedSlide, setSelectedSlide] = useState(0);

  useEffect(() => {
    fetch("https://cms.maitretech.com/deepconvent/items/slider?fields=*.*")
      .then((response) => response.json())
      .then((data) => {
        if (data && Array.isArray(data.data)) {
          setSlides(data.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleNextSlide = () => {
    setSelectedSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setSelectedSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="carousel-wrapper">
      <Carousel
        selectedItem={selectedSlide}
        showArrows={false}
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={3000}
        showStatus={false}
      >
        {slides.map((slide, index) => (
          <div key={index}>
            {slide.image.data.full_url && (
              <img
                src={slide.image.data.full_url}
                alt={`Slide ${index + 1}`}
                width={800}
                height={300}
              />
            )}
          </div>
        ))}
      </Carousel>
      <div className="custom-arrows">
        <span className="arrow left" onClick={handlePrevSlide}>
          {"<"}
        </span>
        <span className="arrow right" onClick={handleNextSlide}>
          {">"}
        </span>
      </div>
    </div>
  );
};

export default HomePageSlider;
