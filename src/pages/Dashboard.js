import { Col, Row } from 'antd';
import './style.css';
import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';
import Footer from '../components/layout/Footer';
import Main from '../components/layout/Main';

const App = () => (
  <div>
    <Row 
      style={{
        minHeight: '100vh',
      }}
    > 
      <Col xs={2} sm={24} md={5} lg={5} className='bg-dashboard'><Sidebar/></Col>
      <Col xs={2} sm={24} md={19} lg={19}>
          <Row>
            <Col xs={24} sm={24}><Header/></Col>
            <Col xs={24} sm={24}><Main/></Col>
          </Row>
      </Col>
    </Row>

    <Row>
      <Col span={24}><Footer/></Col>
    </Row>
  </div>
);

export default App;