import React from 'react'

const Game = (props) => {

const {question, onClickVar,step,questions} = props
const prog = Math.round((step / questions.length) * 100)

console.log(prog);

    return (
        <>
          <div className="progress">
            <div style={{ width: `${prog}%` }} className="progress__inner"></div>
          </div>
          <h1>{question.title}</h1>
          <ul>  
           {
                question.variants.map((text,index) => {
                 return(
                   <li onClick={() => onClickVar(index)}>{text}</li>
                 )
                })
           }
          </ul>
        </>
      );
}

export default Game