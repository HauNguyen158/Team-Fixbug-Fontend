import { MailOutlined, AntDesignOutlined, SketchOutlined, CodeOutlined, TeamOutlined, HomeOutlined } from '@ant-design/icons';
import { Menu, Switch, Col, Row, Typography } from 'antd';
import { useState } from 'react';
import { NavLink } from "react-router-dom";

const { Title } = Typography;


function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem('Navigation One', 'sub1', <HomeOutlined />, [
    getItem('Option 1', '1'),
    getItem('Option 2', '2'),
    getItem('Option 3', '3'),
    getItem('Option 4', '4'),
  ]),
  getItem('Navigation Two', 'sub2', <MailOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Submenu', '7'),
  ]),
  getItem('Navigation Three', 'sub3', <CodeOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),
];

const rootSubmenuKeys = ['sub1', 'sub2', 'sub3'];

const App = () => {

  return (
    <>
      <Row className='py-4'>
            <Col span={24} md={24} className='logo'>
                <Title level={3} className='d-flex align-items-center justify-content-center text-primary'><CodeOutlined className='me-2'/>Dashboard</Title>
            </Col>

            <Col span={24} md={24} className='mb-3'>
                <Title level={5} className='d-flex align-items-center text-primary ps-5'><SketchOutlined className='me-3'/>Dashboard</Title>
            </Col>

            <Col span={24} md={24} className='mb-3'>
                <Title level={5} className='d-flex align-items-center ps-5'><TeamOutlined className='me-3'/>Teams</Title>
            </Col>

            <Col span={24} md={24} className='mb-3'>
                <Title level={5} className='d-flex align-items-center ps-5'><AntDesignOutlined className='me-3'/>Dashboard</Title>
            </Col>

            <Menu
              mode="inline"
              
              items={items}
              className='px-3 my-3 menu-sidebar'
            />
      </Row>
    </>
  );
};

export default App;