import { Typography, Input, Dropdown, Col, Row, Avatar, List  } from 'antd';
import { Link } from "react-router-dom";
import { SearchOutlined, BellOutlined, DownOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { Menu, Space } from 'antd';

const { Title } = Typography;

const onSearch = (value) => console.log(value);

const data = [
    {
      title: "New message from Sophie",
      description: "2 days ago",
      avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/User-info.svg/1024px-User-info.svg.png',
    },
    {
      title: "New album by Travis Scott",
      description: "2 days ago",
      avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/User-info.svg/1024px-User-info.svg.png',
    },
    {
      title: "Payment completed",
      description: "2 days ago",
      avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/User-info.svg/1024px-User-info.svg.png',
    },
  ];

const menu = (
    <List
    className='mt-3'
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item) => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src={item.avatar} />}
          title={<a href="https://ant.design">{item.title}</a>}
          description= {item.description}
        />
      </List.Item>
    )}
  />
);
export default () => (
    <>
        <Row className='px-3 py-4'>
            <Col span={24} md={6}>
                <Title level={4} className='align-items-center'>Hello Dashboard</Title>
            </Col>
            <Col span={24} md={18} className="header-control">
                <Dropdown overlay={menu} placement="bottomRight" trigger={["click"]}>
                <a href="#" onClick={(e) => e.preventDefault()} className='d-flex align-items-center fw-bold text-decoration-none'>
                    <DownOutlined />
                </a>
                </Dropdown>

                <Link to="#" className='me-3'>
                    <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" class="" alt=""
                        style={{
                            height: 35, width: 35,
                        }}
                    />
                </Link>
                <Link to="/sign-in" className="d-flex align-items-center me-3 ms-2">
                    <BellOutlined />
                </Link>
                <Input
                    className="header-search"
                    placeholder="Type here..."
                    prefix={<SearchOutlined />}
                /> 
                
            </Col>
        </Row>
    </>
);