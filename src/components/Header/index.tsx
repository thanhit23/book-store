import { Link } from 'react-router-dom';

import { Props } from './types';
import { useState } from 'react';

function Header({ auth, logout }: Props) {
  const [valueInput, setValueInput] = useState('');
  const handleLogout = () => logout();
  const handleChangeInput = ({ target: { value } }: { target: { value: string } }) => {
    setValueInput(value);
  };
  return (
    <div className="bg-white shadow-sm sticky top-0 z-[100]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1 md:py-4">
        <div className="flex items-center justify-between md:justify-start">
          <Link to="/" className="font-bold text-gray-700 text-2xl">
            Shop
          </Link>
          {auth?.admin ? (
            <Link to="/admin" className="ml-3 font-bold text-gray-700 text-2xl">
              Admin
            </Link>
          ) : (
            ''
          )}
          <div className="hidden md:flex space-x-3 flex-1 lg:ml-8 justify-center">
            <div className="w-[500px]">
              <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Search Mockups, Logos..."
                  required
                  value={valueInput}
                  onChange={handleChangeInput}
                />
                <Link
                  to={`/product/search/${valueInput}`}
                  type="submit"
                  className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </Link>
              </div>
            </div>
          </div>
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
