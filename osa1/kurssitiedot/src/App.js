import { Component, useReducer } from "react"

const Header = (props) => {
  return (
    <div>
      <h1>{props.headertext}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercise}
    </p>
  )
}


const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0]} exercise={props.exercises[0]}/>
      <Part part={props.parts[1]} exercise={props.exercises[1]}/>
      <Part part={props.parts[2]} exercise={props.exercises[2]}/>
    </div>
  )
}

const Total = (props) => {
  let sum = 0
  for (let i = 0; i < props.excersises.length; i++) {
    sum = props.excersises[i];
    
  }
  return (
    <p>Number of exercises {sum}</p>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const parts = [part1,part2,part3]
  const exercises = [exercises1,exercises2,exercises3]
  return (
    <div>
      <Header headertext={course} />
      <Content  parts={parts} exercises={exercises}/>
      <Total exercises={exercises}/>
    </div>
  )
}

export default App