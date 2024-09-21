import React from 'react';

import { Card, Col, Row } from 'antd';

import Carousels from '../components/carousel';
import DichVu from '../components/options/services';
import CarouselsAvatar from '../components/carouselAvatar';

export default function Home() {
  const image = [
    'https://png.pngtree.com/background/20210710/original/pngtree-flat-cartoon-medical-blue-banner-poster-background-picture-image_1040368.jpg',
    'https://png.pngtree.com/thumb_back/fh260/back_our/20190621/ourmid/pngtree-medical-diagnosis-medical-detection-psd-layering-image_193740.jpg',
    'https://png.pngtree.com/background/20210711/original/pngtree-medical-research-medical-diagnosis-picture-image_1074207.jpg',
  ];

  const doctorsData = [
    {
      name: "Phó Giáo sư, Tiến sĩ, Bác sĩ Nguyễn Văn Liệu",
      title: "Thần kinh",
      department: "Bệnh viện X",
      image: "https://cdn.bookingcare.vn/fo/w640/2019/09/04/094041pho-giao-su-nguyen-van-lieu.jpg",
    },
    {
      name: "Thạc sĩ, Bác sĩ Hứa Thúy Vi",
      title: "Tiêu hóa, Bệnh Viêm gan",
      department: "Bệnh viện Y",
      image: "https://cdn.bookingcare.vn/fo/w640/2020/09/17/104940-bs-vi.jpg",
    },
    {
      name: "Bác sĩ Chuyên khoa II Nguyễn Văn Phi",
      title: "Sức khỏe tâm thần",
      department: "Bệnh viện Z",
      image: "https://cdn.bookingcare.vn/fo/w640/2018/10/23/151821thac-si-nguyen-van-phi.jpg",
    },
    {
      name: "Tiến sĩ, Bác sĩ Phạm Chí Lăng",
      title: "Cơ Xương Khớp,Chấn thương chỉnh hình",
      department: "Bệnh viện Q",
      image: "https://cdn.bookingcare.vn/fo/w640/2021/04/07/174603-ts-bs-pham-chi-lang.jpg",
    },
    {
      name: "Tiến sĩ, Bác sĩ Nguyễn Văn Doanh",
      title: "Tiêu hóa, Bệnh Viêm gan",
      department: "",
      image: "https://cdn.bookingcare.vn/fo/w640/2017/12/23/170155nguyen-van-doanh.jpg",
    },
  ];

  return (
    <Row gutter={[32, 0]}>
      <Col span={24} className="hp-mt-32">
        <Row gutter={[32, 32]}>
          <Col span={24}>
            <Carousels imageLinks={image} />
          </Col>
          <Col span={24}>
            <Card className="hp-border-color-black-40">
              <h1>Dịch vụ</h1>
              <Row gutter={[32, 32]} className="hp-mb-32">
                <Col span={24}>
                  <Row gutter={[32, 32]}>
                    <Col xl={6} md={12} span={24}>
                      <DichVu />
                    </Col>
                    <Col xl={6} md={12} span={24}>
                      <DichVu />
                    </Col>
                    <Col xl={6} md={12} span={24}>
                      <DichVu />
                    </Col>
                    <Col xl={6} md={12} span={24}>
                      <DichVu />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col span={24}>
            <CarouselsAvatar doctors={doctorsData} />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
