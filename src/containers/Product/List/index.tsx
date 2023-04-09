import clx from 'classnames';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { bindActionCreators, compose } from 'redux';

import saga from './saga';
import reducer from './reducer';
import { Props } from './types';
import { getListProduct } from './actions';
import injectSaga from '../../../utils/injectSaga';
import injectReducer from '../../../utils/injectReducer';
import ProductList from '../../../components/ProductList';

function ListProduct({ getProduct, list, metaData }: Props) {
  const [page, setPage] = useState(1);
  useEffect(() => {
    getProduct(page);
  }, [page]);
  const arrTotalPage = Array.from(Array(metaData.totalPage).keys());

  const handleGetProduct = (pageCurrent: number) => setPage(pageCurrent);

  const handlePreviousPage = () => setPage(page - 1);

  const handleNextPage = () => setPage(page + 1);

  return (
    <div className="container mx-auto">
      <div className="my-20">
        <div className="p-10 pt-0">
          <h2 className="text-xl font-bold border-[#d31f0333] border-b border-solid text-[25px] pb-3">Product</h2>
        </div>
        <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-5 md:grid-cols-2 justify-items-center justify-center gap-y-6 gap-x-6 mb-10">
          {list && <ProductList list={list} />}
        </div>
        <nav aria-label="Page navigation example" className="flex justify-center">
          <ul className="inline-flex items-center -space-x-px">
            <li>
              <button
                onClick={handlePreviousPage}
                disabled={page === 1}
                className="block mx-2 px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-full hover:bg-gray-100 hover:text-gray-700"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </li>
            {arrTotalPage.map((_, i) => (
              <li key={i}>
                <button
                  onClick={() => handleGetProduct(i + 1)}
                  className={clx(
                    'px-3 py-2 mx-2 leading-tight w-[35px] h-[35px] flex justify-center items-center text-gray-500 border border-gray-300 rounded-full hover:bg-blue-400 hover:text-white',
                    {
                      'bg-white': !(metaData.page === i + 1),
                      'bg-blue-400': metaData.page === i + 1,
                      'text-white': metaData.page === i + 1,
                    },
                  )}
                >
                  {i + 1}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={handleNextPage}
                disabled={page === metaData.totalPage}
                className="block px-3 py-2 mx-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-full hover:bg-gray-100 hover:text-gray-700"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

const mapStateToProps = (state: { product: { list: { data: []; metaData: object } } }) => {
  const {
    product: {
      list: { data: list, metaData },
    },
  } = state;
  return {
    list,
    metaData,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  getProduct: bindActionCreators(getListProduct, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({ key: 'product', saga });
// @ts-ignore
const withReducer = injectReducer({ key: 'product', reducer });

export default compose(withReducer, withSaga, withConnect)(ListProduct);
