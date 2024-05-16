// RecommendedForYou.jsx

import React from 'react';
import Slider from 'react-slick';
import '../css/EventsCloseToYou.css'; 

function EventsCloseToYou() {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true, 
        centerPadding: '10',
    };

    return (
        <div className="events-for-you">
            <h2>Recommended for you</h2>
            <div className="carousel-container">
                <Slider {...settings}>
                    <div className="card force-block"> {/* Ajout de la classe force-block */}
                        <div className="content">
                            <div className="image-placeholder"></div>
                            <div className="text-content">
                                <h3>Sample Title</h3>
                                <p>Sample Description</p>
                                <div className="meta">
                                    <span className="likes">100 Likes</span>
                                    <span className="price">$19.99</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card force-block"> {/* Ajout de la classe force-block */}
                        <div className="content">
                            <div className="image-placeholder"></div>
                            <div className="text-content">
                                <h3>Another Title</h3>
                                <p>Another Description</p>
                                <div className="meta">
                                    <span className="likes">50 Likes</span>
                                    <span className="price">$29.99</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Ajoutez plus de cartes au besoin */}
                </Slider>
            </div>
        </div>
    );
}
  
export default EventsCloseToYou;
