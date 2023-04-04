import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { ListComment, Props, SubmitForm } from './types';

function Comment({ onSubmit, listComment }: Props) {
  const loginValidationSchema = Yup.object().shape({
    content: Yup.string().required(),
  });

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SubmitForm>({
    mode: 'onChange',
    resolver: yupResolver(loginValidationSchema),
  });

  const { content } = errors;

  const handleSubmitForm = (data: object) => {
    onSubmit(data);
    reset({ content: '' });
  };

  const renderComment = () =>
    listComment.length ? (
      listComment.map(({ content, user, createdAt }: ListComment, i) => (
        <div key={i} className="mb-2 overflow-hidden">
          <div className="pt-3 pb-3 md:pb-1 px-4 md:px-16 bg-white bg-opacity-40">
            <div className="flex flex-wrap items-center">
              <img
                className="mr-6 object-cover w-[40px] h-[40px] rounded-full"
                src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80"
                alt=""
              />
              <h4 className="w-full md:w-auto text-xl font-heading font-medium">{user[0].username}</h4>
              <div className="w-full md:w-px h-2 md:h-8 mx-8 bg-transparent md:bg-gray-200" />
              <span className="mr-4 text-xl font-heading font-medium">5.0</span>
              <div className="inline-flex">
                <a className="inline-block mr-1" href="#">
                  <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                      fill="#FFCB00"
                    />
                  </svg>
                </a>
                <a className="inline-block mr-1" href="#">
                  <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                      fill="#FFCB00"
                    />
                  </svg>
                </a>
                <a className="inline-block mr-1" href="#">
                  <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                      fill="#FFCB00"
                    />
                  </svg>
                </a>
                <a className="inline-block mr-1" href="#">
                  <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                      fill="#FFCB00"
                    />
                  </svg>
                </a>
                <a className="inline-block text-gray-200" href="#">
                  <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M20 7.91677H12.4167L10 0.416763L7.58333 7.91677H0L6.18335 12.3168L3.81668 19.5834L10 15.0834L16.1834 19.5834L13.8167 12.3168L20 7.91677Z"
                      fill="#FFCB00"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="px-4 overflow-hidden md:px-16 bg-white">
            <div className="flex flex-wrap">
              <div className="w-full md:w-2/3 mb-6 md:mb-0">
                <p className="max-w-2xl text-darkBlueGray-400 leading-loose">{content}</p>
              </div>
              <div className="w-full md:w-1/3 text-right">
                <p className="mb-8 text-sm text-gray-300">{createdAt}</p>
              </div>
            </div>
          </div>
        </div>
      ))
    ) : (
      <div className="my-6 flex justify-center text-red-600">
        <p>Not Comment</p>
      </div>
    );

  return (
    <div className="py-24 2xl:py-44 bg-blueGray-100 rounded-t-10xl overflow-hidden">
      <div className="container px-4 mx-auto ">
        <div className="p-5 shadow-[rgba(43,52,69,0.1)_0px_4px_16px] rounded-t-8xl rounded-b-5xl bg-white">
          <div className="mb-3 flex">
            <h2 className="text-2xl border-b border-solid border-orange-600">Review</h2>
          </div>
          {renderComment()}
          <form className="flex flex-col" onSubmit={handleSubmit(data => handleSubmitForm(data))}>
            <div className="w-1/2">
              <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 ">
                Write Comment
              </label>
              <textarea
                rows={6}
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="My Comment"
                required
                {...register('content')}
              />
              <span className="text-red-500">{content?.message}</span>
            </div>
            <div className="mt-4">
              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Comment;
