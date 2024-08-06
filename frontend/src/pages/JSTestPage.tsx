import React, { useEffect, useState } from "react";
import JSdata from "../data/JSdata";
import JSTestType from "../types/JSTestType";

const JSTestPage: React.FC = (): React.ReactNode => {
  const allQuestion = JSdata;
  

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [currentQuestion, setCurrentQuestion] = React.useState<JSTestType | any>(
    {}
  );
  const [currentAnswer, setCurrentAnswer] = useState("");
  
  const [trueAnswer, setTrueAnswer] = useState(0)
  const [falseAnswer, setFalseAnswer] = useState(0)
  const [showVariants, setShowVariants] = useState(false)

  const nextQuestion = () => {
    setCurrentQuestion(
      allQuestion[Math.floor(Math.random() * allQuestion.length)]
    );
    setCurrentAnswer('')
    setShowVariants(false)
  };

  const checkAnswer = (userAnswer: string) => {
    
    if (userAnswer !== currentQuestion.correctAnswer ) {
    setFalseAnswer(falseAnswer + 1)
  } else {
    setTrueAnswer(trueAnswer + 1)
  }
}

useEffect(() => {
  setCurrentQuestion(
    allQuestion[Math.floor(Math.random() * allQuestion.length)]
  );
}, []);

  return (
    <div>JSTestPage</div>
  )
}

export default JSTestPage