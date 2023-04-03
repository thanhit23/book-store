import { formatMoney } from '../../../helper';

function ProductList({ listProduct, deleteProduct }: { listProduct: []; deleteProduct: (id: string) => void }) {
  const handleDeleteProduct = (id: string) => deleteProduct(id);
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
                      <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">{_id}</td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{name}</td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        <img
                          src={`https://multikart-upload.glitch.me${images}`}
                          alt=""
                          className="w-[50px] h-[80px] object-cover"
                        />
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        {formatMoney(price - (price * discount) / 100)}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{formatMoney(price)}</td>
                      <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                        <a className="text-green-500 hover:text-green-700" href="#">
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
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductList;
