import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import Header from '../../containers/Header';
import { SignInTypes, UserSubmitForm } from './types';

function Login({ onSubmit }: SignInTypes) {
  const loginValidationSchema = Yup.object().shape({
    email: Yup.string().required().email(),

    password: Yup.string().required().min(6).max(40),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSubmitForm>({
    mode: 'onChange',
    resolver: yupResolver(loginValidationSchema),
  });

  const { email, password } = errors;

  const handleSubmitForm = (data: object) => {
    onSubmit(data);
  };

  return (
    <>
      <Header />
      <div className="flex min-h-screen justify-center bg-gray-100 font-sans">
        <div className="container rounded my-auto max-w-md border-2 border-gray-200 bg-white p-3">
          <div className="my-6 text-center">
            <h1 className="text-3xl font-semibold text-gray-700">Login</h1>
            <p className="text-gray-500">Login to access your account</p>
          </div>
          <div className="m-6">
            <form className="mb-4" onSubmit={handleSubmit(data => handleSubmitForm(data))}>
              <div className="mb-4">
                <label htmlFor="email" className="mb-1 block text-sm text-gray-600">
                  Email Address
                </label>
                <input
                  {...register('email')}
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your email address"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-300 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-100 dark:placeholder-gray-500 dark:focus:border-gray-500 dark:focus:ring-gray-900"
                />
                <span className="text-red-500">{email?.message}</span>
              </div>
              <div className="mb-6">
                <div className="mb-1 flex justify-between">
                  <label htmlFor="password" className="text-sm text-gray-600">
                    Password
                  </label>
                </div>
                <input
                  {...register('password')}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Your password"
                  className="w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-300 focus:border-indigo-300 focus:outline-none focus:ring focus:ring-indigo-100 dark:placeholder-gray-500 dark:focus:border-gray-500 dark:focus:ring-gray-900"
                />
                <span className="text-red-500">{password?.message}</span>
              </div>
              <div className="mb-6">
                <button
                  type="submit"
                  id="btn-submit"
                  className="w-full rounded bg-indigo-500 pt-2 pb-3 text-white duration-100 ease-in-out hover:bg-indigo-600 focus:outline-none"
                >
                  Login
                </button>
              </div>
              <p className="text-center text-sm text-gray-400">
                {"Don't have an account yet?"}
                <Link
                  to="/register"
                  className="font-semibold text-indigo-500 focus:text-indigo-600 focus:underline focus:outline-none"
                >
                  Register
                </Link>
                . .
              </p>
            </form>
            <div className="mb-8 flex flex-row justify-center">
              <span className="absolute bg-white px-4 text-gray-500">or sign-in with</span>
              <div className="mt-3 h-px w-full bg-gray-200" />
            </div>
            <div className="flex flex-row gap-2">
              <button className="flex w-full flex-row items-center justify-center gap-2 rounded bg-green-500 p-2 text-white duration-100 ease-in-out hover:bg-green-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="w-5"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <g fill="none">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0zm.14 19.018c-3.868 0-7-3.14-7-7.018c0-3.878 3.132-7.018 7-7.018c1.89 0 3.47.697 4.682 1.829l-1.974 1.978v-.004c-.735-.702-1.667-1.062-2.708-1.062c-2.31 0-4.187 1.956-4.187 4.273c0 2.315 1.877 4.277 4.187 4.277c2.096 0 3.522-1.202 3.816-2.852H12.14v-2.737h6.585c.088.47.135.96.135 1.474c0 4.01-2.677 6.86-6.72 6.86z"
                      fill="currentColor"
                    />
                  </g>
                </svg>
                Google
              </button>
              <button className="flex w-full flex-row items-center justify-center gap-2 rounded bg-gray-700 p-2 text-white duration-100 ease-in-out hover:bg-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  className="w-5"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <g fill="none">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"
                      fill="currentColor"
                    />
                  </g>
                </svg>
                Github
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
