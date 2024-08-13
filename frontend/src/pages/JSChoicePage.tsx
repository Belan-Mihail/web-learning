import React, { useState } from 'react'


const JSChoicePage = () => {
    const [selectDifficult, setSelectDifficult] = useState('')

    console.log(selectDifficult)
    

    return (
        <div className="m-16 items-center flex flex-col gap-8">
          <h2 className=" font-bold text-md sm:text-2xl text-center flex-wrap">Select the difficulty of the questions</h2>
          <div className=' lg:w-[50%] w-[30%] flex-col gap-4 lg:flex-row text-center flex justify-around items-center'>
            <p onClick={() => setSelectDifficult('easy')} className=' min-w-[8rem] p-2 sm:p-4 px-8 cursor-pointer border-green-300 border-2 font-semibold text-sm sm:text-2xl text-green-400 hover:bg-green-400 hover:text-white rounded-xl'>Easy</p>
            <p onClick={() => setSelectDifficult('medium')} className=' min-w-[8rem] p-2 sm:p-4 px-8 cursor-pointer border-orange-500 border-2 font-semibold text-sm sm:text-2xl text-orange-500 hover:bg-orange-500 hover:text-white rounded-xl'>Medium</p>
            <p onClick={() => setSelectDifficult('hard')} className=' min-w-[8rem] p-2 sm:p-4 px-8 cursor-pointer border-red-300 border-2 font-semibold text-sm sm:text-2xl text-red-300 hover:bg-red-300 hover:text-white rounded-xl'>Hard</p>
          </div>
          
            
            <button
            
            className={`my-[20%] ${!selectDifficult && 'hidden'} font-semibold text-md sm:text-2xl border-solid border-2 border-blue-500 p-4 sm:p-8 rounded-xl hover:bg-blue-500 hover:text-white`}
          >
            Start Test
          </button>
          
          
        </div>
      );
}

export default JSChoicePage