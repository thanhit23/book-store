import { formatMoney } from '../../../helper';
import clx from 'classnames';
import { useEffect, useState } from 'react';

function ProductList({
  listProduct,
  deleteProduct,
  metaData,
  getProduct,
}: {
  listProduct: [];
  metaData: { totalPage: number; page: number };
  deleteProduct: (id: string) => void;
  getProduct: (page: number) => void;
}) {
  const [page, setPage] = useState(1);

  useEffect(() => {
    getProduct(page);
  }, [page]);

  const handleDeleteProduct = (id: string) => deleteProduct(id);

  const arrayTotalPage = Array.from(Array(metaData.totalPage).keys());

  const handleGetProduct = (pageCurrent: number) => setPage(pageCurrent);

  const handlePreviousPage = () => setPage(page - 1);

  const handleNextPage = () => setPage(page + 1);

  return (
    <>
      <h3 className="text-lg">List Product</h3>
      <div className="flex flex-col">
        <div className="overflow-x-auto">
          <div className="p-1.5 w-full inline-block align-middle">
            <div className="overflow-hidden border rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">
                      ID
                    </th>
                    <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">
                      Image
                    </th>
                    <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">
                      Price new
                    </th>
                    <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">
                      Price off
                    </th>
                    <th scope="col" className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase ">
                      Edit
                    </th>
                    <th scope="col" className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase ">
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {listProduct.map(({ _id, name, price, images, discount }, i) => (
                    <tr key={i}>
                      <td className="px-6 py-4 text-sm font-medium text-gray-800">
                        <p className="w-50 line-clamp-1">{_id}</p>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800">
                        <div className="w-56">
                          <p className="line-clamp-1">{name}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        <img
                          src={`https://multikart-upload.glitch.me${images}`}
                          alt=""
                          className="w-[50px] h-[80px] object-cover"
                        />
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{formatMoney(price)}</td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        {formatMoney(Math.round(price + (price * discount) / 100))}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                        <a className="text-green-500 hover:text-green-700" href={`/admin/edit-product/${_id}`}>
                          Edit
                        </a>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                        <button className="text-red-500 hover:text-red-700" onClick={() => handleDeleteProduct(_id)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <nav aria-label="Page navigation example" className="flex justify-center mt-5 mb-20">
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
                {arrayTotalPage.map((_, i) => (
                  <li key={i}>
                    <button
                      onClick={() => handleGetProduct(i + 1)}
                      className={clx(
                        'px-3 py-2 mx-2 leading-tight w-[35px] h-[35px] flex justify-center items-center text-gray-500 border border-gray-300 rounded-full hover:bg-blue-400 hover:text-white',
                        {
                          'text-white': metaData.page === i + 1,
                          'bg-blue-400': metaData.page === i + 1,
                          'bg-white': !(metaData.page === i + 1),
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
      </div>
    </>
  );
}

export default ProductList;
