import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <div className="bg-white shadow-sm sticky top-0 z-[100]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1 md:py-[27px]">
        <div className="flex items-center justify-between md:justify-start">
          <Link to="/admin" className="font-bold text-gray-700 text-sm mr-3">
            List Product
          </Link>
          <Link to="/admin/add-product" className="font-bold text-gray-700 text-sm mr-3">
            Add Product
          </Link>
          <Link to="/admin/comment" className="font-bold text-gray-700 text-sm mr-3">
            List Comment
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
