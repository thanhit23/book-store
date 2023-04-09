import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import Header from '../Header';
import ListProduct from '../Product/List';
import Service from '../../components/Service';
import Footer from '../../components/Footer';

function Home() {
  const images = [
    'https://book365.vn/upload/resize_cache/iblock/4f0/950_290_1/4f0558744f4e4797ee554882fdaae33c.jpg',
    'https://book365.vn/upload/resize_cache/iblock/62c/950_290_1/62ca20282dc5fe64b2ce32480f1523e4.png',
    'https://book365.vn/upload/resize_cache/iblock/59c/950_290_1/59cb7d6365c2cc89ece83671d912638b.jpg',
  ];
  return (
    <>
      <Header />
      <Slide cssClass="w-[660px] h-[500px]" arrows={false}>
        <div className="each-slide-effect">
          <div className="flex justify-center">
            <img width="100%" src={images[0]} alt="" />
          </div>
        </div>
        <div className="each-slide-effect">
          <div className="flex justify-center">
            <img width="100%" src={images[1]} alt="" />
          </div>
        </div>
        <div className="each-slide-effect">
          <div className="flex justify-center">
            <img width="100%" src={images[2]} alt="" />
          </div>
        </div>
      </Slide>
      <Service />
      <ListProduct />
      <Footer />
    </>
  );
}
export default Home;
