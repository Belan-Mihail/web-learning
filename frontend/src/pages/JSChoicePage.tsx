import React from 'react'
import { Link } from 'react-router-dom';

const JSChoicePage = () => {
    return (
        <div className="m-16 items-center flex flex-col gap-8">
          <h2 className=" font-bold text-2xl">What you would like to learn now???</h2>
          <Link
            to="js_test_page"
            className=" font-semibold text-2xl border-solid border-2 border-blue-500 p-8 rounded-xl hover:bg-blue-500 hover:text-white"
          >
            JavaScript
          </Link>
        </div>
      );
}

export default JSChoicePage