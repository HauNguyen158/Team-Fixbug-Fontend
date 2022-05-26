import 'antd/dist/antd.css';
import { Carousel } from 'antd';

const contentStyle = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

export default () => (
  <Carousel autoplay>
    <div>
      {/* <h3 style={contentStyle}>1</h3> */}
      <img style={contentStyle} src="https://pdp.edu.vn/wp-content/uploads/2021/06/hinh-anh-thanh-pho-da-nang-ve-dem-dep.jpg" alt=""/> 
    </div>
    <div>
      <img style={contentStyle} src="https://media-cdn.tripadvisor.com/media/photo-s/12/a7/83/2f/hinh-nh-da-n-ng-nhin.jpg" alt="" />
    </div>
    <div>
      <img style={contentStyle} src="http://divui.com/blog/wp-content/uploads/2018/10/111111.jpg" alt="" />
    </div>
    <div>
      <img style={contentStyle} src="https://img1.kienthucvui.vn/uploads/2019/08/15/anh-dep-da-nang_102906489.jpg" alt="" />
    </div>
  </Carousel>
);