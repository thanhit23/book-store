import { isEmpty } from 'lodash';
import { Link } from 'react-router-dom';

import { Props } from './types';
import { formatMoney } from '../../helper';
import Header from '../../containers/Header';

function ProductDetail({ product }: Props) {
  const renderProductDetail = () => {
    if (!isEmpty(product)) {
      const { name, price, discount, images } = product;
      return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div>
                <div className="h-64 md:h-80 rounded-lg">
                  <div className="h-64 md:h-80 rounded-lg flex items-center justify-center">
                    <div className="shadow-[rgba(43,52,69,0.1)_0px_4px_16px] bg-[#fff] py-[40px] px-[20px] rounded-[10px] w-full flex justify-center">
                      <img
                        src={`https://multikart-upload.glitch.me${images}`}
                        alt=""
                        style={{
                          width: '225px',
                          height: '320px',
                          objectFit: 'cover',
                          borderRadius: '10px',
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">{name}</h2>
              <div className="flex items-center space-x-4 my-4">
                <div>
                  <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                    <span className="font-bold text-indigo-600 text-3xl">{formatMoney(price)}</span>
                    <span className="text-indigo-400 mr-1 mt-1">VNĐ</span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-green-500 text-xl font-semibold">Save {discount}%</p>
                </div>
              </div>
              <div className="flex py-4 space-x-4">
                <div className="relative">
                  <div className="text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold">
                    Qty
                  </div>
                  <select className="cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-8 h-14 flex items-end pb-1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                  <svg
                    className="w-5 h-5 text-gray-400 absolute right-0 bottom-0 mb-2 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
                  </svg>
                </div>
                <button
                  type="button"
                  className="h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div>
      <Header />
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <Link to="#" className="hover:underline hover:text-gray-600">
              Home
            </Link>
            <span>
              <svg
                className="h-5 w-5 leading-none text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
            <span>Headphones</span>
          </div>
        </div>
        {renderProductDetail()}
      </div>
      <div className="py-24 2xl:py-44 bg-blueGray-100 rounded-t-10xl overflow-hidden">
        <div className="container px-4 mx-auto ">
          <h2 className="mb-3 text-2xl">Review</h2>
          <div className="mb-2 shadow-[rgba(43,52,69,0.1)_0px_4px_16px] rounded-t-8xl rounded-b-5xl overflow-hidden">
            <div className="pt-3 pb-3 md:pb-1 px-4 md:px-16 bg-white bg-opacity-40">
              <div className="flex flex-wrap items-center">
                <img
                  className="mr-6 object-cover w-[40px] h-[40px] rounded-full"
                  src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80"
                  alt=""
                />
                <h4 className="w-full md:w-auto text-xl font-heading font-medium">Faustina H. Fawn</h4>
                <div className="w-full md:w-px h-2 md:h-8 mx-8 bg-transparent md:bg-gray-200" />
                <span className="mr-4 text-xl font-heading font-medium">5.0</span>
                <div className="inline-flex">
                  <a className="inline-block mr-1" href="#">
                    <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                        fill="#FFCB00"
                      />
                    </svg>
                  </a>
                  <a className="inline-block mr-1" href="#">
                    <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                        fill="#FFCB00"
                      />
                    </svg>
                  </a>
                  <a className="inline-block mr-1" href="#">
                    <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                        fill="#FFCB00"
                      />
                    </svg>
                  </a>
                  <a className="inline-block mr-1" href="#">
                    <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                        fill="#FFCB00"
                      />
                    </svg>
                  </a>
                  <a className="inline-block text-gray-200" href="#">
                    <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                        fill="#FFCB00"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="px-4 overflow-hidden md:px-16 py-4 bg-white">
              <div className="flex flex-wrap">
                <div className="w-full md:w-2/3 mb-6 md:mb-0">
                  <p className="max-w-2xl text-darkBlueGray-400 leading-loose">
                    I haretra neque non mi aliquam, finibus hart bibendum molestie. Vestibulum suscipit sagittis
                    dignissim mauris.
                  </p>
                </div>
                <div className="w-full md:w-1/3 text-right">
                  <p className="mb-8 text-sm text-gray-300">Added 2 months ago</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <button className="inline-block w-full md:w-auto h-full py-4 px-10 leading-8 font-heading font-medium tracking-tighter text-xl text-white bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl">
              See all
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
