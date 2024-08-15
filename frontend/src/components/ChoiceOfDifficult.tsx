import React from 'react'


const ChoiceOfDifficult = ({setSelectedDifficult} : {setSelectedDifficult : React.Dispatch<React.SetStateAction<string>>}) => {
    return (
        <div className="m-16 items-center flex flex-col gap-8">
          <h2 className=" font-bold text-md sm:text-2xl text-center flex-wrap">Select the difficulty of the questions</h2>
          <div className=' lg:w-[50%] w-[30%] flex-col gap-4 lg:flex-row text-center flex justify-around items-center'>
            <p onClick={() => setSelectedDifficult('easy')} className=' min-w-[8rem] p-2 sm:p-4 px-8 cursor-pointer border-green-300 border-2 font-semibold text-sm sm:text-2xl text-green-400 hover:bg-green-400 hover:text-white rounded-xl'>Easy</p>
            <p onClick={() => setSelectedDifficult('medium')} className=' min-w-[8rem] p-2 sm:p-4 px-8 cursor-pointer border-orange-500 border-2 font-semibold text-sm sm:text-2xl text-orange-500 hover:bg-orange-500 hover:text-white rounded-xl'>Medium</p>
            <p onClick={() => setSelectedDifficult('hard')} className=' min-w-[8rem] p-2 sm:p-4 px-8 cursor-pointer border-red-300 border-2 font-semibold text-sm sm:text-2xl text-red-300 hover:bg-red-300 hover:text-white rounded-xl'>Hard</p>
            <p onClick={() => setSelectedDifficult('all')} className=' min-w-[8rem] p-2 sm:p-4 px-8 cursor-pointer border-blue-500 border-2 font-semibold text-sm sm:text-2xl text-blue-500 hover:bg-blue-500 hover:text-white rounded-xl'>All questions</p>
          </div>
        </div>
      );
}

export default ChoiceOfDifficult