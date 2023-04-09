import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Header from '../../../containers/Header';
import Navigation from '../Navigation';
import { HandleSubmitType, PropsEditProductComponent } from './types';

function ProductEdit({ onSubmit, detail }: PropsEditProductComponent) {
  const loginValidationSchema = Yup.object().shape({
    name: Yup.string().required('Field is required'),
    price: Yup.number().required('Field is required'),
    discount: Yup.number().required('Field is required').min(0).max(100),
    description: Yup.string().required('Field is required'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<HandleSubmitType>({
    mode: 'onChange',
    resolver: yupResolver(loginValidationSchema),
    defaultValues: detail || {},
  });

  const { name, price, discount, description } = errors;

  const handleSubmitForm = (data: HandleSubmitType) => {
    onSubmit(data);
  };

  return (
    <>
      <Header />
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="font-sans antialiased bg-grey-lightest">
          <div className="w-full bg-grey-lightest" style={{ paddingTop: '4rem' }}>
            <div className="container mx-auto py-8">
              <div className="w-5/6 lg:w-1/2 mx-auto bg-white rounded shadow">
                <div className="py-4 px-8 text-black text-xl border-b border-grey-lighter">Add Product</div>
                <div className="py-4 px-8">
                  <form onSubmit={handleSubmit(data => handleSubmitForm(data))}>
                    <div className="mb-4">
                      <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="name">
                        Name
                      </label>
                      <input
                        className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                        id="name"
                        type="text"
                        placeholder="Your product name"
                        {...register('name')}
                      />
                      <span className="text-red-500">{name?.message}</span>
                    </div>
                    <div className="flex mb-4">
                      <div className="w-1/2 mr-1">
                        <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="price">
                          Price
                        </label>
                        <input
                          className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                          id="price"
                          type="number"
                          placeholder="Price for product"
                          {...register('price')}
                        />
                        <span className="text-red-500">{price?.message}</span>
                      </div>
                      <div className="w-1/2 ml-1">
                        <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="discount">
                          Discount
                        </label>
                        <input
                          className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                          id="discount"
                          type="number"
                          placeholder="Discount for product"
                          {...register('discount')}
                        />
                        <span className="text-red-500">{discount?.message}</span>
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="description">
                        Description
                      </label>
                      <textarea
                        className="appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                        id="description"
                        rows={6}
                        placeholder="Your product description"
                        {...register('description')}
                      />
                      <span className="text-red-500">{description?.message}</span>
                    </div>
                    <div className="flex items-center justify-between mt-8">
                      <button
                        className="bg-blue-700 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded-full"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductEdit;
