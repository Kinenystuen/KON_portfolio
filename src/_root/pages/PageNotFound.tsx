import ErrorMessage from "../../components/shared/ErrorMessage";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <ErrorMessage message="404 Page not found">
        <Link
          to="/"
          className="button m-1.5 p-2 hover:bg-transparent rounded-lg px-4 hover:border-gray-800 border-2 border-customGreen-700 bg-customGreen text-gray-800 hover:text-black font-bold"
        >
          Go back to homepage
        </Link>
      </ErrorMessage>
    </div>
  );
};

export default PageNotFound;
