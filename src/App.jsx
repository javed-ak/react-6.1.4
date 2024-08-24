import { useEffect, useState } from "react"

function App() {
  const [todos , setTodos] = useState([])

  useEffect(() => {
    setInterval(() => {
      fetch("https://sum-server.100xdevs.com/todos")
      .then(async function(res) {
        const json = await res.json();
        setTodos(json);
      })
    }, 10000)
  }, [])
  return (
    <>
    {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description} />)}
    </>
  )
}

function Todo({title, description}){
  return <div>
     <h1>{title}</h1>
     <h3>{description}</h3>
  </div>
}

export default App
