import { useState, useEffect } from "react";
import "./App.css";
import { CreateTodo } from "./assets/components/CreateTodo";
import { Todos } from "./assets/components/Todos";

function App() {
  const [todos, setTodos] = useState([]);

  setInterval(() => {
    useEffect(() => {
      fetch("http://localhost:3000/todo")
        .then(async function (res) {
          const json = await res.json();
          setTodos(json.todos);
        })
        .catch((err) => {
          console.log("fetch error: ", err);
          setTodos([]);
        });
    }, []);
  }, 10000);

  return (
    <div>
      <CreateTodo />
      <Todos todos={todos} />
    </div>
  );
}

export default App;
