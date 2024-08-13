import React from 'react'
import { Link } from 'react-router-dom';

const JSChoicePage = () => {

    

    return (
        <div className="m-16 items-center flex flex-col gap-8">
          <h2 className=" font-bold text-2xl">Select the difficulty of the questions</h2>
          <div className=' w-[50%]  flex justify-around'>
            <p className='p-4 px-8 cursor-pointer border-green-300 border-2 font-semibold text-2xl text-green-400 hover:bg-green-400 hover:text-white rounded-xl'>Easy</p>
            <p className='p-4 px-8 cursor-pointer border-orange-500 border-2 font-semibold text-2xl text-orange-500 hover:bg-orange-500 hover:text-white rounded-xl'>Medium</p>
            <p className='p-4 px-8 cursor-pointer border-red-300 border-2 font-semibold text-2xl text-red-300 hover:bg-red-300 hover:text-white rounded-xl'>Hard</p>
          </div>
          <Link
            to="js_test_page"
            className=" font-semibold text-2xl border-solid border-2 border-blue-500 p-8 rounded-xl hover:bg-blue-500 hover:text-white"
          >
            Start Test
          </Link>
        </div>
      );
}

export default JSChoicePage