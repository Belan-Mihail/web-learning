import React, { useEffect, useState } from "react";
import JSdata from "../data/JSdata";
import JSTestType from "../types/JSTestType";
import { Link } from "react-router-dom";

const JSTestPage: React.FC = (): React.ReactNode => {
  const allQuestion = JSdata;
  const additionalTaskArr:string[] = []
  allQuestion.map((item) => item.additional_task.length && additionalTaskArr.push(item.additional_task))
 

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [currentQuestion, setCurrentQuestion] = React.useState<JSTestType | any
  >({});
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [currentAddAnswer, setCurrentAddAnswer] = useState("");
  const [areaValue, setAreaValue] = useState("");

  const [trueAnswer, setTrueAnswer] = useState(0);
  const [falseAnswer, setFalseAnswer] = useState(0);

  const [showExample, setShowExample] = useState(false)

  const nextQuestion = () => {
    setCurrentQuestion(
      allQuestion[Math.floor(Math.random() * allQuestion.length)]
    );
    setCurrentAnswer("");
    setCurrentAddAnswer('')
    setShowExample(false)
    setAreaValue('')
  };

 

  
  
  

  const checkAnswer = (userAnswer: string) => {
    if (userAnswer !== currentQuestion.correctAnswer) {
      setFalseAnswer(falseAnswer + 1);
    } else {
      setTrueAnswer(trueAnswer + 1);
    }
  };

  const checkAddAnswer = (userAddAnswer: string) => {
    if (userAddAnswer !== currentQuestion.correctAdditionalAnswer) {
      setFalseAnswer(falseAnswer + 1);
    } else {
      setTrueAnswer(trueAnswer + 1);
    }
  };

  useEffect(() => {
    setCurrentQuestion(
      allQuestion[Math.floor(Math.random() * allQuestion.length)]
    );
  }, []);

  return (
    <div className={`m-8 items-center flex flex-col max-[500px]:gap-4 gap-8`}>
      <div className="text-center items-center">
        <h3 id="difficulty" className="text-2xl">Difficulty</h3>
        <p className={`text-2xl font-medium ${currentQuestion.level === 'easy' ? 'text-green-400' : currentQuestion.level === 'medium' ? 'text-orange-500' : 'text-red-300' }`}>{currentQuestion.level === 'easy' ? 'Easy' : currentQuestion.level === 'medium' ? 'Medium' : 'Hard'}</p>
      </div>
      <div className="flex justify-around w-full max-[500px]:flex-col max-[500px]:justify-center max-[500px]:gap-4 max-[500px]:items-center">
        <div className="text-start">
          <Link
            to="/"
            className="text-sm border-green-500  border-solid border-2 hover:bg-green-500 hover:text-white p-2 rounded-xl"
          >
            Back to HomePage
          </Link>
        </div>
        <div className="text-end">
          <span>total number of questions: {allQuestion.length + additionalTaskArr.length}</span>
        </div>
      </div>
      <div>
        {currentQuestion.initial_data && (
          <p className="font-semibold text-orange-400 text-center text-wrap text-2xl my-2">
            You have:
            <br />
            <span className="text-black text-4xl">{currentQuestion?.initial_data}</span>
          </p>
        )}

        
              {currentQuestion.steps && currentQuestion.steps.map((item:string, index: number) => (
                  <>
                    <p className="font-semibold text-orange-400 text-center text-wrap text-2xl my-2">Step №{index + 1}</p>
                    <p className="text-black text-4xl text-center font-semibold">{item}</p>
                  </>
                  
                ))
              }


        {currentQuestion.expected_result && (
          <p className="font-semibold text-blue-800 text-center text-wrap text-2xl my-2">
            Expected result:
            <br />
            <span className="text-blue-800">{currentQuestion?.expected_result}</span>
          </p>
        )}
        {currentQuestion.task && (
          <p className="font-semibold text-blue-500 text-center text-wrap text-2xl my-4 p-4 border-y-4">
            {currentQuestion?.task}
          </p>
        )}
      </div>

      <div className="grid max-[640px]:grid-cols-1 max-[640px]:grid-rows-1 grid-cols-2 grid-rows-2 max-[500px]:gap-4 gap-8">
        <button
          onClick={() => {
            setCurrentAnswer(currentQuestion!.variantA);
            checkAnswer(currentQuestion!.variantA);
          }}
          className={
            (currentAnswer === currentQuestion!.correctAnswer &&
              currentAnswer === currentQuestion!.variantA) ||
            (currentAnswer.length > 0 &&
              currentAnswer !== currentQuestion!.correctAnswer &&
              currentQuestion!.correctAnswer === currentQuestion!.variantA)
              ? "font-semibold text-center text-wrap max-[640px]:text-sm text-2xl border-solid border-2 bg-green-500 p-4 rounded-xl"
              : currentAnswer !== currentQuestion!.correctAnswer &&
                currentAnswer === currentQuestion!.variantA
              ? "font-semibold text-center text-wrap max-[640px]:text-sm text-2xl border-solid border-2 bg-red-500 p-4 rounded-xl"
              : " font-semibold text-center text-wrap max-[640px]:text-sm text-2xl border-solid border-2 border-orange-500 p-4 rounded-xl hover:bg-orange-500 disabled:hover:bg-transparent disabled:hover:text-black hover:text-white  "
          }
          disabled={currentAnswer.length > 0}
        >
          {currentQuestion!.variantA}
        </button>
        <button
          onClick={() => {
            setCurrentAnswer(currentQuestion!.variantB);
            checkAnswer(currentQuestion!.variantB);
          }}
          className={
            (currentAnswer === currentQuestion!.correctAnswer &&
              currentAnswer === currentQuestion!.variantB) ||
            (currentAnswer.length > 0 &&
              currentAnswer !== currentQuestion!.correctAnswer &&
              currentQuestion!.correctAnswer === currentQuestion!.variantB)
              ? "font-semibold text-center text-wrap max-[640px]:text-sm text-2xl border-solid border-2 bg-green-500  p-4 rounded-xl"
              : currentAnswer !== currentQuestion!.correctAnswer &&
                currentAnswer === currentQuestion!.variantB
              ? "font-semibold text-center text-wrap max-[640px]:text-sm text-2xl border-solid border-2 bg-red-500  p-4 rounded-xl"
              : "font-semibold text-center text-wrap max-[640px]:text-sm text-2xl border-solid border-2 border-orange-500 p-4 rounded-xl disabled:hover:bg-transparent disabled:hover:text-black   hover:bg-orange-500 hover:text-white"
          }
          disabled={currentAnswer.length > 0}
        >
          {currentQuestion!.variantB}
        </button>
        <button
          onClick={() => {
            setCurrentAnswer(currentQuestion!.variantC);
            checkAnswer(currentQuestion!.variantC);
          }}
          className={
            (currentAnswer === currentQuestion!.correctAnswer &&
              currentAnswer === currentQuestion!.variantC) ||
            (currentAnswer.length > 0 &&
              currentAnswer !== currentQuestion!.correctAnswer &&
              currentQuestion!.correctAnswer === currentQuestion!.variantC)
              ? "font-semibold text-center text-wrap max-[640px]:text-sm text-2xl border-solid border-2 bg-green-500 p-4 rounded-xl"
              : currentAnswer !== currentQuestion!.correctAnswer &&
                currentAnswer === currentQuestion!.variantC
              ? "font-semibold text-center text-wrap max-[640px]:text-sm text-2xl border-solid border-2 bg-red-500 p-4 rounded-xl"
              : "font-semibold text-center text-wrap max-[640px]:text-sm text-2xl border-solid border-2 border-orange-500 p-4 rounded-xl hover:bg-orange-500 disabled:hover:bg-transparent disabled:hover:text-black hover:text-white"
          }
          disabled={currentAnswer.length > 0}
        >
          {currentQuestion!.variantC}
        </button>
        <button
          onClick={() => {
            setCurrentAnswer(currentQuestion!.variantD);
            checkAnswer(currentQuestion!.variantD);
          }}
          className={
            (currentAnswer === currentQuestion!.correctAnswer &&
              currentAnswer === currentQuestion!.variantD) ||
            (currentAnswer.length > 0 &&
              currentAnswer !== currentQuestion!.correctAnswer &&
              currentQuestion!.correctAnswer === currentQuestion!.variantD)
              ? "font-semibold text-center text-wrap max-[640px]:text-sm text-2xl border-solid border-2 bg-green-500 p-4 rounded-xl"
              : currentAnswer !== currentQuestion!.correctAnswer &&
                currentAnswer === currentQuestion!.variantD
              ? "font-semibold text-center text-wrap max-[640px]:text-sm text-2xl border-solid border-2 bg-red-500 p-4 rounded-xl"
              : "font-semibold text-center text-wrap max-[640px]:text-sm text-2xl border-solid border-2 border-orange-500 p-4 rounded-xl hover:bg-orange-500 disabled:hover:bg-transparent disabled:hover:text-black hover:text-white"
          }
          disabled={currentAnswer.length > 0}
        >
          {currentQuestion!.variantD}
        </button>
        {currentQuestion.variantE && (
          <button
          onClick={() => {
            setCurrentAnswer(currentQuestion!.variantE);
            checkAnswer(currentQuestion!.variantE);
          }}
          className={
            (currentAnswer === currentQuestion!.correctAnswer &&
              currentAnswer === currentQuestion!.variantE) ||
            (currentAnswer.length > 0 &&
              currentAnswer !== currentQuestion!.correctAnswer &&
              currentQuestion!.correctAnswer === currentQuestion!.variantE)
              ? "font-semibold text-center text-wrap max-[640px]:text-sm text-2xl border-solid border-2 bg-green-500 p-4 rounded-xl"
              : currentAnswer !== currentQuestion!.correctAnswer &&
                currentAnswer === currentQuestion!.variantE
              ? "font-semibold text-center text-wrap max-[640px]:text-sm text-2xl border-solid border-2 bg-red-500 p-4 rounded-xl"
              : "font-semibold text-center text-wrap max-[640px]:text-sm text-2xl border-solid border-2 border-orange-500 p-4 rounded-xl hover:bg-orange-500 disabled:hover:bg-transparent disabled:hover:text-black hover:text-white"
          }
          disabled={currentAnswer.length > 0}
        >
          {currentQuestion!.variantE}
        </button>
        )}
        {currentQuestion.variantF && (
          <button
          onClick={() => {
            setCurrentAnswer(currentQuestion!.variantF);
            checkAnswer(currentQuestion!.variantF);
          }}
          className={
            (currentAnswer === currentQuestion!.correctAnswer &&
              currentAnswer === currentQuestion!.variantF) ||
            (currentAnswer.length > 0 &&
              currentAnswer !== currentQuestion!.correctAnswer &&
              currentQuestion!.correctAnswer === currentQuestion!.variantF)
              ? "font-semibold text-center text-wrap max-[640px]:text-sm text-2xl border-solid border-2 bg-green-500 p-4 rounded-xl"
              : currentAnswer !== currentQuestion!.correctAnswer &&
                currentAnswer === currentQuestion!.variantF
              ? "font-semibold text-center text-wrap max-[640px]:text-sm text-2xl border-solid border-2 bg-red-500 p-4 rounded-xl"
              : "font-semibold text-center text-wrap max-[640px]:text-sm text-2xl border-solid border-2 border-orange-500 p-4 rounded-xl hover:bg-orange-500 disabled:hover:bg-transparent disabled:hover:text-black hover:text-white"
          }
          disabled={currentAnswer.length > 0}
        >
          {currentQuestion!.variantF}
        </button>
        )}
      </div>

      {currentAnswer && currentQuestion.additional_task && (
        <>
          <p className="font-semibold text-blue-500 text-center text-wrap text-2xl my-4 p-4 border-y-4">
            {currentQuestion?.additional_task}
          </p>

          <div className="grid max-[640px]:grid-cols-1 max-[640px]:grid-rows-1 grid-cols-2 grid-rows-2 max-[500px]:gap-4 gap-8">
            <button
              onClick={() => {
                setCurrentAddAnswer(currentQuestion!.add_variantA);
                checkAddAnswer(currentQuestion!.add_variantA);
              }}
              className={
                (currentAddAnswer === currentQuestion!.correctAdditionalAnswer &&
                  currentAddAnswer === currentQuestion!.add_variantA) ||
                (currentAddAnswer.length > 0 &&
                  currentAddAnswer !== currentQuestion!.correctAdditionalAnswer &&
                  currentQuestion!.correctAdditionalAnswer === currentQuestion!.add_variantA)
                  ? "font-semibold text-center text-wrap max-[640px]:text-sm text-2xl border-solid border-2 bg-green-500 p-4 rounded-xl"
                  : currentAddAnswer !== currentQuestion!.correctAdditionalAnswer &&
                    currentAddAnswer === currentQuestion!.add_variantA
                  ? "font-semibold text-center text-wrap max-[640px]:text-sm text-2xl border-solid border-2 bg-red-500 p-4 rounded-xl"
                  : " font-semibold text-center text-wrap max-[640px]:text-sm text-2xl border-solid border-2 border-orange-500 p-4 rounded-xl hover:bg-orange-500 disabled:hover:bg-transparent disabled:hover:text-black hover:text-white  "
              }
              disabled={currentAddAnswer.length > 0}
            >
              {currentQuestion!.add_variantA}
            </button>
            <button
              onClick={() => {
                setCurrentAddAnswer(currentQuestion!.add_variantB);
                checkAddAnswer(currentQuestion!.add_variantB);
              }}
              className={
                (currentAddAnswer === currentQuestion!.correctAdditionalAnswer &&
                  currentAddAnswer === currentQuestion!.add_variantB) ||
                (currentAddAnswer.length > 0 &&
                  currentAddAnswer !== currentQuestion!.correctAdditionalAnswer &&
                  currentQuestion!.correctAdditionalAnswer === currentQuestion!.add_variantB)
                  ? "font-semibold text-center text-wrap max-[640px]:text-sm text-2xl border-solid border-2 bg-green-500 p-4 rounded-xl"
                  : currentAddAnswer !== currentQuestion!.correctAdditionalAnswer &&
                    currentAddAnswer === currentQuestion!.add_variantB
                  ? "font-semibold text-center text-wrap max-[640px]:text-sm text-2xl border-solid border-2 bg-red-500 p-4 rounded-xl"
                  : " font-semibold text-center text-wrap max-[640px]:text-sm text-2xl border-solid border-2 border-orange-500 p-4 rounded-xl hover:bg-orange-500 disabled:hover:bg-transparent disabled:hover:text-black hover:text-white  "
              }
              disabled={currentAddAnswer.length > 0}
            >
              {currentQuestion!.add_variantB}
            </button>
            <button
              onClick={() => {
                setCurrentAddAnswer(currentQuestion!.add_variantC);
                checkAddAnswer(currentQuestion!.add_variantC);
              }}
              className={
                (currentAddAnswer === currentQuestion!.correctAdditionalAnswer &&
                  currentAddAnswer === currentQuestion!.add_variantC) ||
                (currentAddAnswer.length > 0 &&
                  currentAddAnswer !== currentQuestion!.correctAdditionalAnswer &&
                  currentQuestion!.correctAdditionalAnswer === currentQuestion!.add_variantC)
                  ? "font-semibold text-center text-wrap max-[640px]:text-sm text-2xl border-solid border-2 bg-green-500 p-4 rounded-xl"
                  : currentAddAnswer !== currentQuestion!.correctAdditionalAnswer &&
                    currentAddAnswer === currentQuestion!.add_variantC
                  ? "font-semibold text-center text-wrap max-[640px]:text-sm text-2xl border-solid border-2 bg-red-500 p-4 rounded-xl"
                  : " font-semibold text-center text-wrap max-[640px]:text-sm text-2xl border-solid border-2 border-orange-500 p-4 rounded-xl hover:bg-orange-500 disabled:hover:bg-transparent disabled:hover:text-black hover:text-white  "
              }
              disabled={currentAddAnswer.length > 0}
            >
              {currentQuestion!.add_variantC}
            </button>
            <button
              onClick={() => {
                setCurrentAddAnswer(currentQuestion!.add_variantD);
                checkAddAnswer(currentQuestion!.add_variantD);
              }}
              className={
                (currentAddAnswer === currentQuestion!.correctAdditionalAnswer &&
                  currentAddAnswer === currentQuestion!.add_variantD) ||
                (currentAddAnswer.length > 0 &&
                  currentAddAnswer !== currentQuestion!.correctAdditionalAnswer &&
                  currentQuestion!.correctAdditionalAnswer === currentQuestion!.add_variantD)
                  ? "font-semibold text-center text-wrap max-[640px]:text-sm text-2xl border-solid border-2 bg-green-500 p-4 rounded-xl"
                  : currentAddAnswer !== currentQuestion!.correctAdditionalAnswer &&
                    currentAddAnswer === currentQuestion!.add_variantD
                  ? "font-semibold text-center text-wrap max-[640px]:text-sm text-2xl border-solid border-2 bg-red-500 p-4 rounded-xl"
                  : " font-semibold text-center text-wrap max-[640px]:text-sm text-2xl border-solid border-2 border-orange-500 p-4 rounded-xl hover:bg-orange-500 disabled:hover:bg-transparent disabled:hover:text-black hover:text-white  "
              }
              disabled={currentAddAnswer.length > 0}
            >
              {currentQuestion!.add_variantD}
            </button>
            {currentQuestion.add_variantE && (
              <button
              onClick={() => {
                setCurrentAddAnswer(currentQuestion!.add_variantE);
                checkAddAnswer(currentQuestion!.add_variantE);
              }}
              className={
                (currentAddAnswer === currentQuestion!.correctAdditionalAnswer &&
                  currentAddAnswer === currentQuestion!.add_variantE) ||
                (currentAddAnswer.length > 0 &&
                  currentAddAnswer !== currentQuestion!.correctAdditionalAnswer &&
                  currentQuestion!.correctAdditionalAnswer === currentQuestion!.add_variantE)
                  ? "font-semibold text-center text-wrap max-[640px]:text-sm text-2xl border-solid border-2 bg-green-500 p-4 rounded-xl"
                  : currentAddAnswer !== currentQuestion!.correctAdditionalAnswer &&
                    currentAddAnswer === currentQuestion!.add_variantE
                  ? "font-semibold text-center text-wrap max-[640px]:text-sm text-2xl border-solid border-2 bg-red-500 p-4 rounded-xl"
                  : " font-semibold text-center text-wrap max-[640px]:text-sm text-2xl border-solid border-2 border-orange-500 p-4 rounded-xl hover:bg-orange-500 disabled:hover:bg-transparent disabled:hover:text-black hover:text-white  "
              }
              disabled={currentAddAnswer.length > 0}
            >
              {currentQuestion!.add_variantE}
            </button>
            )}
            {currentQuestion.add_variantF && (
              <button
              onClick={() => {
                setCurrentAddAnswer(currentQuestion!.add_variantF);
                checkAddAnswer(currentQuestion!.add_variantF);
              }}
              className={
                (currentAddAnswer === currentQuestion!.correctAdditionalAnswer &&
                  currentAddAnswer === currentQuestion!.add_variantF) ||
                (currentAddAnswer.length > 0 &&
                  currentAddAnswer !== currentQuestion!.correctAdditionalAnswer &&
                  currentQuestion!.correctAdditionalAnswer === currentQuestion!.add_variantF)
                  ? "font-semibold text-center text-wrap max-[640px]:text-sm text-2xl border-solid border-2 bg-green-500 p-4 rounded-xl"
                  : currentAddAnswer !== currentQuestion!.correctAdditionalAnswer &&
                    currentAddAnswer === currentQuestion!.add_variantF
                  ? "font-semibold text-center text-wrap max-[640px]:text-sm text-2xl border-solid border-2 bg-red-500 p-4 rounded-xl"
                  : " font-semibold text-center text-wrap max-[640px]:text-sm text-2xl border-solid border-2 border-orange-500 p-4 rounded-xl hover:bg-orange-500 disabled:hover:bg-transparent disabled:hover:text-black hover:text-white  "
              }
              disabled={currentAddAnswer.length > 0}
            >
              {currentQuestion!.add_variantF}
            </button>
            )}
          </div>
        </>
      )}
      <div className="flex flex-col gap-4 w-[40%] max-[720px]:w-[60%] max-[420px]:w-[70%]">
        <h3 className="font-semibold text-center text-wrap max-[640px]:text-sm text-2xl my-4">try to write the function/method in relation to the given data correctly</h3>
        <p className="text-center"><a className="text-blue-600" target="_blank" href="https://www.boot.dev/playground/js">Free SandBox</a></p>
        <textarea value={areaValue} onChange={(e) => setAreaValue(e.target.value)} placeholder="write here" className="bg-gray-300 rounded-lg outline-orange-300" cols={50} rows={10}></textarea>
        <button onClick={() => setShowExample(!showExample)}>
          {!showExample ? 'Show Example' : 'Hide Example'}
        </button>
        {showExample && (
            <div>
              {currentQuestion.example.length < 2 ? (
                <p className="font-semibold text-center text-wrap max-[640px]:text-sm text-2xl">{currentQuestion.example}</p>
              ) : (
                currentQuestion.example.map((item:string) => (
                  <p className="font-semibold text-center text-wrap max-[640px]:text-sm text-2xl">{item}</p>
                ))
              )}
              
            </div>
            
          
        )}
       
      </div>
      <a
        href="#difficulty"
        className=" font-semibold max-[640px]:text-sm text-2xl border-solid border-2 border-blue-500 p-4 rounded-xl hover:bg-blue-500 hover:text-white  "
        onClick={nextQuestion}
      >
        Next Question
      </a>
      <div className="m-2 flex gap-4 items-center">
        <p className="text-center">Correct Answer: {trueAnswer}</p>
        <p className="text-center">Incorrect Answer: {falseAnswer}</p>
      </div>
    </div>
  );
};

export default JSTestPage;
