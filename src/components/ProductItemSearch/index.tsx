import { Link } from 'react-router-dom';

import { formatMoney } from '../../helper';
import { ProductItemSearchProps } from './types';

function ProductItemSearch({ listProduct }: ProductItemSearchProps) {
  return (
    <>
      {listProduct.map(({ name, price, images, discount, _id }, i) => (
        <div
          key={i}
          className="w-56 bg-white shadow-[rgba(0,0,0,0.16)_0px_1px_4px] rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
        >
          <Link to={`/product/${_id}`}>
            <img src={`https://multikart-upload.glitch.me${images}`} alt="Product" className=" m-0" />
            <div className="px-4 py-3 w-56">
              <p className="text-[14px] text-[#808191] capitalize line-clamp-1">{name}</p>
              <div className="flex items-center">
                <p className="text-[14px] font-semibold text-[#c92127] cursor-auto my-3">{formatMoney(price)} VNĐ</p>
                <del>
                  <p className="text-sm text-gray-400 cursor-auto ml-2">
                    {formatMoney(Math.round(price + (price * discount) / 100))} VNĐ
                  </p>
                </del>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
}

export default ProductItemSearch;
