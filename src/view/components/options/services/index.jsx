import { Card, Col, Row } from 'antd';
import React from 'react';
import { People } from 'react-iconly';

export default function DichVu({ data }) {
  return (
    <>
      <Card className="hp-border-color-black-40">
        <Row>
          <Col
            className="hp-statistic-icon-bg hp-mb-xs-16 hp-bg-color-dark-primary"
            style={{ alignContent: 'center', marginRight: '7%' }}
          >
            <People className="hp-text-color-primary-1 hp-text-color-dark-primary-2 remix-icon" />
          </Col>
          <Col className="hp-mt-8">
            <h3 className="hp-mb-4">
              243
              <span className="hp-badge-text hp-ml-8 hp-text-color-primary-1 hp-text-color-dark-primary-2">
                .
              </span>
            </h3>
          </Col>
        </Row>
      </Card>
    </>
  );
}
