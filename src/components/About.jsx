  // import React, {useState} from 'react'
import { useState } from "react";
import Game from './Game';
import Result from './Result';
import './about.css';


const questions = [
    {
      title: 'React - это ... ?',
      variants: ['библиотека', 'фреймворк', 'приложение'],
      correct: 0,
    },
    {
      title: 'Компонент - это ... ',
      variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
      correct: 1,
    },
    {
      title: 'Что такое JSX?',
      variants: [
        'Это простой HTML',
        'Это функция',
        'Это тот же HTML, но с возможностью выполнять JS-код',
      ],
      correct: 2,
    },
    {
      title: 'Что такое VUjs',
      variants: [
        'Это простой HTML',
        'Это функция',
        'Это тот же HTML, но с возможностью выполнять JS-код',
      ],
      correct: 0,
    },
   
  ];
  
  
const About = () => {

const  [step, setStep] = useState(0)
const  [correct, setCorrect] = useState(0)
const  question = questions[step]

// console.log(questions);

const onClickVar = (index) => {
  console.log(step, index)
  setStep(step + 1)
if (index === question.correct) {
  setCorrect(correct + 1)
}

}

  return (
    <div className='About'>
      {
        step !== questions.length ? ( <Game question={question}
          onClickVar={onClickVar }
          step={step}
          questions={questions}
          />) : (
          <Result 
          correct={correct}
          questions={questions}
          />)
      }
    </div>
  )
}
  

export default About