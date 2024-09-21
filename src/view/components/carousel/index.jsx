import React from 'react';
import { Carousel } from 'antd';

const contentStyle = {
  height: '360px',
  color: '#fff',
  lineHeight: '360px',
  textAlign: 'center',
  background: '#364d79',
  objectFit: 'cover',
};
const responsiveContentStyle = {
  height: '300px',
  lineHeight: '100px',
  objectFit: 'cover',
};

export default function Carousels({ imageLinks }) {
  const isMobile = window.innerWidth < 1200;
  if (!Array.isArray(imageLinks) || imageLinks.length === 0) {
    return (
      <Carousel autoplay>
        <div>
          <h3
            style={
              isMobile
                ? { ...contentStyle, ...responsiveContentStyle }
                : contentStyle
            }
          >
            1
          </h3>
        </div>
        <div>
          <h3
            style={
              isMobile
                ? { ...contentStyle, ...responsiveContentStyle }
                : contentStyle
            }
          >
            2
          </h3>
        </div>
        <div>
          <h3
            style={
              isMobile
                ? { ...contentStyle, ...responsiveContentStyle }
                : contentStyle
            }
          >
            3
          </h3>
        </div>
        <div>
          <h3
            style={
              isMobile
                ? { ...contentStyle, ...responsiveContentStyle }
                : contentStyle
            }
          >
            4
          </h3>
        </div>
      </Carousel>
    );
  }
  return (
    <Carousel autoplay>
      {imageLinks.map((link, index) => (
        <div key={index}>
          <img
            src={link}
            alt={`carousel-item-${index}`}
            style={{
              width: '100%',
              height: isMobile ? '200px' : '400px',
              objectFit: 'cover',
            }}
          />
        </div>
      ))}
    </Carousel>
  );
}
