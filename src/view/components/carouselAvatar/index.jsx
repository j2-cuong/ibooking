import React from 'react';
import { Carousel, Image } from 'antd';
import './index.css'; // Để tùy chỉnh CSS nếu cần

export default function CarouselsAvatar({ doctors }) {
  return (
    <Carousel
      autoplay
      slidesToShow={4} // Hiển thị 3 ảnh mặc định
      responsive={[
        {
          breakpoint: 1000, // Khi nhỏ hơn 1000px hiển thị 3 ảnh
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 770, // Khi nhỏ hơn 770px hiển thị 2 ảnh
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 650, // Khi nhỏ hơn 650px hiển thị 1 ảnh
          settings: {
            slidesToShow: 1,
          },
        },
      ]}
    >
      {doctors.map((doctor, index) => (
        <div key={index} className="doctor-item">
          <div className="doctor-card">
            <Image
              src={doctor.image}
              alt={doctor.name}
              className="doctor-avatar"
              style={{ width: 100, height: 100, borderRadius: '50%' }}
            />
            <h3>{doctor.name}</h3>
            <p>{doctor.title}</p>
            <p>{doctor.department}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};
