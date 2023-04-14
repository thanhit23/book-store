import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { bindActionCreators, compose } from 'redux';

import saga from './saga';
import Header from '../Header';
import reducer from './reducer';
import Footer from '../../components/Footer';
import injectSaga from '../../utils/injectSaga';
import { SearchResultProps, State } from './types';
import injectReducer from '../../utils/injectReducer';
import { getProduct as getProductAction } from './actions';
import ProductItemSearch from '../../components/ProductItemSearch';

function SearchResult({ data, getProduct }: SearchResultProps) {
  const { slug = '' } = useParams();

  useEffect(() => {
    getProduct(slug);
  }, [slug]);

  return (
    <div>
      <Header />
      <div className="flex justify-center items-center md:px-10 min-h-screen bg-[#f2f9fb]">
        <div className="w-96 my-12 h-auto transition-all rounded-lg  md:w-full p-4">
          <div className="flex mt-3 justify-between items-center">
            <p className="text-[#545968] text-sm font-semibold">Showing tasks</p>
            <div>
              <div className="flex items-center gap-1">
                <p className="text-xs mt-1 ">Sort by</p>
                <select className="outline-none cursor-pointer h-6 w-20  text-sm font-semibold ">
                  <option className="hidden">Size</option>
                  <option>Date</option>
                  <option>Time</option>
                  <option>Length</option>
                  <option>None</option>
                </select>
              </div>
            </div>
          </div>
          <div className="md:flex md:justify-center md:flex-wrap gap-6">
            {data && <ProductItemSearch listProduct={data} />}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state: State) => {
  const {
    productSearch: { data },
  } = state;
  return {
    data,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  getProduct: bindActionCreators(getProductAction, dispatch),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({ key: 'productSearch', saga });
// @ts-ignore
const withReducer = injectReducer({ key: 'productSearch', reducer });

export default compose(withReducer, withSaga, withConnect)(SearchResult);
