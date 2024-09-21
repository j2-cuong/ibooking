import React, { useRef } from 'react';

import { useSelector } from 'react-redux';

import { Layout, Button, Row, Col } from 'antd';
import { RiMenuFill } from 'react-icons/ri';

const { Header } = Layout;

export default function MenuHeader(props) {
  const { setVisible } = props;

  // Redux
  const customise = useSelector((state) => state.customise);

  // Focus
  const inputFocusRef = useRef(null);
  const inputFocusProp = {
    ref: inputFocusRef,
  };

  // Search Active
  setTimeout(() => setSearchActive(searchHeader), 100);

  // Mobile Sidebar
  const showDrawer = () => {
    setVisible(true);
    setSearchHeader(false);
  };

  // Children
  const headerChildren = () => {
    return (
      <Row
        className="hp-w-100 hp-position-relative"
        align="middle"
        justify="space-between"
      >
        <Col className="hp-mobile-sidebar-button hp-mr-24">
          <Button
            className="hp-mobile-sidebar-button"
            type="text"
            onClick={showDrawer}
            icon={
              <RiMenuFill
                size={24}
                className="remix-icon hp-text-color-black-80 hp-text-color-dark-30"
              />
            }
          />
        </Col>
      </Row>
    );
  };

  return (
    <Header>
      <Row justify="center" className="hp-w-100">
        {customise.contentWidth == 'full' && (
          <Col span={24}>{headerChildren()}</Col>
        )}

        {customise.contentWidth == 'boxed' && (
          <Col xxl={20} xl={22} span={24}>
            {headerChildren()}
          </Col>
        )}
      </Row>
    </Header>
  );
}
