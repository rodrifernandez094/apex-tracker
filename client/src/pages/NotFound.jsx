import { Link } from "react-router-dom";

const NotFound = ({ error }) => {
  return (
    <div className="w-full bg-image h-screen flex items-center justify-center">
      {error && (
        <div className="flex flex-col">
          <h1 className="text-center text-stone-300 text-4xl mb-8">
            {error.message}
          </h1>
          <button className="bg-red-500 hover:bg-red-700 transition duration-300 rounded-lg px-4 py-2 text-stone-300 font-bold">
            <Link to="/">Go back</Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default NotFound;
