import { Link } from 'react-router-dom';

import Skeleton from 'react-loading-skeleton';

export default function ProductList() {
  return (
    <>
      {Array(10)
        .fill(0)
        .map(({ _id }, i) => (
          <div
            key={i}
            className="w-56 bg-white shadow-[rgba(0,0,0,0.16)_0px_1px_4px] rounded-xl duration-500 hover:scale-105 hover:shadow-xl"
          >
            <Link to={`/product/${_id}`}>
              <Skeleton height="224px" width="224px" />
              <div className="px-4 py-3 w-56">
                <Skeleton count={1} />
                <div className="flex items-center">
                  <Skeleton count={1} />
                </div>
              </div>
            </Link>
          </div>
        ))}
    </>
  );
}
