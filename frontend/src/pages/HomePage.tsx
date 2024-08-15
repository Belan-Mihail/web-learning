
import { Link } from "react-router-dom";

const HomePage = () => {
  
  return (
    <div className="m-16 items-center flex flex-col gap-8">
      <h2 className=" font-bold text-2xl">What you would like to learn now???</h2>
      <Link
        to="js_test_page"
        className="min-w-[12rem] text-center font-semibold text-2xl border-solid border-2 border-blue-500 p-8 rounded-xl hover:bg-blue-500 hover:text-white"
      >
        JavaScript
      </Link>
      <Link
        to="#"
        className="min-w-[12rem] text-center font-semibold text-2xl p-8 rounded-xl bg-gray-600 text-white pointer-events-none cursor-default" 
      >
        CSS 
        <p className="text-sm font-light text-red-400">(in progress)</p>
      </Link>
      <Link
        to="#"
        className="min-w-[12rem] text-center font-semibold text-2xl p-8 rounded-xl bg-gray-600 text-white pointer-events-none cursor-default" 
      >
        Python 
        <p className="text-sm font-light text-red-400">(in progress)</p>
      </Link>
      <Link
        to="#"
        className="min-w-[12rem] text-center font-semibold text-2xl p-8 rounded-xl bg-gray-600 text-white pointer-events-none cursor-default" 
      >
        React 
        <p className="text-sm font-light text-red-400">(in progress)</p>
      </Link>
    </div>
  );
};

export default HomePage;
