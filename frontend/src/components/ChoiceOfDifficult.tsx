import React from 'react'
import JSdata from "../data/JSdata";


const ChoiceOfDifficult = ({setSelectedDifficult} : {setSelectedDifficult : React.Dispatch<React.SetStateAction<string>>}) => {
  const allQuestion = JSdata;

  const easyQuestion = allQuestion.filter((item) => item.level === 'easy')
  const easyAdditionalTasks = easyQuestion.filter((item) => item.additional_task.length)
  const mediumQuestion = allQuestion.filter((item) => item.level === 'medium')
  const mediumAdditionalTasks = mediumQuestion.filter((item) => item.additional_task.length)
  const hardQuestion = allQuestion.filter((item) => item.level === 'hard')
  const hardAdditionalTasks = hardQuestion.filter((item) => item.additional_task.length)

  const additionalTaskArr: string[] = [];
  allQuestion.map(
    (item) =>
      item.additional_task.length &&
      additionalTaskArr.push(item.additional_task)
  );

    return (
        <div className="m-16 items-center flex flex-col gap-8">
          <h2 className=" font-bold text-md sm:text-2xl text-center flex-wrap">Select the difficulty of the questions</h2>
          <div className=' lg:w-[50%] w-[30%] flex-col gap-4 lg:flex-row text-center flex justify-around items-center'>
            <div>
              <p onClick={() => setSelectedDifficult('easy')} className=' min-w-[8rem] p-2 sm:p-4 px-8 cursor-pointer border-green-300 border-2 font-semibold text-sm sm:text-2xl text-green-400 hover:bg-green-400 hover:text-white rounded-xl'>Easy</p>
              <p className='font-light text-sm'>Total question {easyQuestion.length + easyAdditionalTasks.length}</p>
            </div>
            <div>
              <p onClick={() => setSelectedDifficult('medium')} className=' min-w-[8rem] p-2 sm:p-4 px-8 cursor-pointer border-orange-500 border-2 font-semibold text-sm sm:text-2xl text-orange-500 hover:bg-orange-500 hover:text-white rounded-xl'>Medium</p>
              <p className='font-light text-sm'>Total question {mediumQuestion.length + mediumAdditionalTasks.length}</p>
            </div>
            <div>
              <p onClick={() => setSelectedDifficult('hard')} className=' min-w-[8rem] p-2 sm:p-4 px-8 cursor-pointer border-red-300 border-2 font-semibold text-sm sm:text-2xl text-red-300 hover:bg-red-300 hover:text-white rounded-xl'>Hard</p>
              <p className='font-light text-sm'>Total question {hardQuestion.length + hardAdditionalTasks.length}</p>
            </div>
            <div>
               <p onClick={() => setSelectedDifficult('all')} className=' min-w-[8rem] p-2 sm:p-4 px-8 cursor-pointer border-blue-500 border-2 font-semibold text-sm sm:text-2xl text-blue-500 hover:bg-blue-500 hover:text-white rounded-xl'>All questions</p>
               <p className='font-light text-sm'>Total question {allQuestion.length + additionalTaskArr.length}</p>
            </div>
           
          </div>
        </div>
      );
}

export default ChoiceOfDifficult