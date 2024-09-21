import React, { useEffect, useRef, useState } from 'react';

import { useSelector } from 'react-redux';

import { Layout, Button, Row, Col } from 'antd';
import { RiMenuFill } from 'react-icons/ri';
import { Search } from 'react-iconly';

import MenuLogo from '../menu/logo';
import MenuHorizontal from '../menu/item/MenuHorizontal';
import MenuMobile from '../menu/mobile';

const { Header } = Layout;

export default function HeaderHorizontal(props) {
  const { visible, setVisible } = props;

  const [searchHeader, setSearchHeader] = useState(false);
  const [searchActive, setSearchActive] = useState(false);

  // Redux
  const customise = useSelector((state) => state.customise);

  // Header Class
  const [headerClass, setHeaderClass] = useState();

  useEffect(() => {
    if (customise.navigationFull) {
      setHeaderClass(' hp-header-full');
    } else if (customise.navigationBg) {
      setHeaderClass(' hp-header-bg');
    } else {
      setHeaderClass('');
    }
  }, [customise]);

  // Mobile Sidebar
  const onClose = () => {
    setVisible(false);
  };

  // Focus
  const inputFocusRef = useRef(null);
  const inputFocusProp = {
    ref: inputFocusRef,
  };

  // Search Active
  setTimeout(() => setSearchActive(searchHeader), 100);

  const searchClick = () => {
    setSearchHeader(true);

    setTimeout(() => {
      inputFocusRef.current.focus({
        cursor: 'start',
      });
    }, 200);
  };

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
        <Col>
          <MenuLogo />

          <Col className="hp-mobile-sidebar-button">
            <Button
              className="hp-mobile-sidebar-button"
              type="text"
              onClick={showDrawer}
              icon={
                <RiMenuFill
                  size={24}
                  className="remix-icon hp-text-color-black-80"
                />
              }
            />
          </Col>
        </Col>

        <Col flex="1 0 0" className="hp-mx-24">
          <Row justify="center" className="hp-w-100">
            <Col span={24}>
              <MenuHorizontal />
            </Col>
          </Row>
        </Col>
      </Row>
    );
  };

  return (
    <Header className={'hp-header-horizontal' + headerClass}>
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

      <MenuMobile onClose={onClose} visible={visible} />
    </Header>
  );
}
