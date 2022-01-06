import { useState, useRef, useEffect } from "react"
// import { todoList } from "./todo";

import API from "../src/utils/API";


function App() {
  const [state, setState] = useState([]);
  const inputRef = useRef()

  useEffect(() => {
    loadTodos()
  }, [])

  function loadTodos() {
    API.getTodos()
      .then(res => setState(res.data))
      .catch(err => console.log(err));
  };

  const addTodo = () => {
    const newTodo = inputRef.current.value;
    console.log(newTodo);
    const todo = { todo: newTodo }
    API.createTodo(todo)
      .then(() => loadTodos())


    inputRef.current.value = ""
  }

  const deleteTodo = (id) => {
    API.deleteTodo(id)
    const newState = state.filter((item) => item._id !== id)
    setState(newState)
    console.log(id);
  }


  return (
    <div>
      <h1>Add Todo</h1>
      <input type="text" ref={inputRef} />
      <button onClick={addTodo}  >add</button>
      <ul >
        {state.map((item) => <li key={item._id}>{item.todo}
          <button >edit</button>
          <button onClick={() => deleteTodo(item._id)}>delete</button></li>)}

      </ul>
    </div >
  );
}

export default App;
