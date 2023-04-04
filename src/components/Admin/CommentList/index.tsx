import { Props } from './types';

function CommentList({ listComment, deleteComment }: Props) {
  const handleDeleteComment = (id: string) => deleteComment(id);
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
                      Content
                    </th>
                    <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">
                      User
                    </th>
                    <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">
                      Create Day
                    </th>
                    <th scope="col" className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase ">
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {listComment.map(({ _id, content, user, createdAt }, i) => (
                    <tr key={i}>
                      <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">{_id}</td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{content}</td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{user[0].username}</td>
                      <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{createdAt}</td>
                      <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                        <button className="text-red-500 hover:text-red-700" onClick={() => handleDeleteComment(_id)}>
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

export default CommentList;
