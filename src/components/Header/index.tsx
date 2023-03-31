import { Link } from 'react-router-dom';
import { Props } from './types';

function Header({ auth, logout }: Props) {
  const handleLogout = () => logout();
  return (
    <div className="bg-white shadow-sm sticky top-0 z-[100]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1 md:py-4">
        <div className="flex items-center justify-between md:justify-start">
          <button type="button" className="md:hidden w-10 h-10 rounded-lg -ml-2 flex justify-center items-center">
            <svg
              className="text-gray-500 w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <Link to="/" className="font-bold text-gray-700 text-2xl">
            Shop
          </Link>
          {auth?.admin ? (
            <Link to="/add-product" className="ml-3 font-bold text-gray-700 text-2xl">
              Add Product
            </Link>
          ) : (
            ''
          )}
          <div className="hidden md:flex space-x-3 flex-1 lg:ml-8" />
          <div className="flex items-center space-x-4">
            {!auth ? (
              <Link
                to="/login"
                className="flex h-10 items-center px-2 rounded-lg border border-gray-200 hover:border-gray-300 focus:outline-none hover:shadow-inner"
              >
                <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                </svg>
              </Link>
            ) : (
              <button
                type="button"
                className="hidden md:block w-10 h-10 rounded-lg bg-gray-100 border border-gray-200 flex justify-center items-center"
                onClick={handleLogout}
              >
                <i className="fa fa-sign-out" />
              </button>
            )}
            <button
              type="button"
              className="hidden md:block w-10 h-10 rounded-lg bg-gray-100 border border-gray-200 flex justify-center items-center"
            >
              <img
                src="https://avatars.dicebear.com/api/bottts/2.svg"
                alt="bottts"
                width={28}
                height={28}
                className="rounded-lg mx-auto"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
