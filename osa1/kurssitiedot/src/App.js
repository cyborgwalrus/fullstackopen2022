const Header = (props) => {
  console.log("Header",props)
  return (
    <div>
      <h1>{props.headertext}</h1>
    </div>
  )
}

const Part = (props) => {
  console.log("Part",props)
  return (
    <p>
      {props.part.name} {props.part.exercises}
    </p>
  )
}


const Content = (props) => {
  console.log("Content",props)
  return (
    <div>
      <Part part={props.parts.part1} />
      <Part part={props.parts.part2} />
      <Part part={props.parts.part3} />
    </div>
  )
}

const Total = (props) => {
  console.log("Total",props)
  let sum = 0
  sum += props.parts.part1.exercises
  sum += props.parts.part2.exercises  
  sum += props.parts.part3.exercises  
  console.log(sum)
  return (
    <p>Number of exercises {sum}</p>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  const parts = { part1, part2, part3 }
  return (
    <div>
      <Header headertext={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App