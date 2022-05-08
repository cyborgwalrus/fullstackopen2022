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
      <Part part={props.parts[0]} />
      <Part part={props.parts[1]} />
      <Part part={props.parts[2]} />
    </div>
  )
}

const Total = (props) => {
  console.log("Total",props)
  
  let sum = 0
  props.parts.forEach(element => {
    sum += element.exercises
  })
  console.log("sum:",sum)
  
  return (
    <p>Number of exercises {sum}</p>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header headertext={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}

export default App