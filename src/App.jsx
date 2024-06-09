import { useState } from "react";
//import "./App.css";
import Todos from "./components/Todos";

const DUMMY = [
  {
    id: 1,
    title: "Finish Progate React Course",
    completed: false,
  },
  {
    id: 2,
    title: "Have lunch with Guru Domba",
    completed: false,
  },
  {
    id: 3,
    title: "Study React with Ninja Ken",
    completed: false,
  },
];

function App() {
  const [todos, setTodos] = useState(DUMMY);

  const toggleCompleted = (id) => {
    const updateTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    setTodos(updateTodos);
  };

  const deleteTodo = (id) => {
    const filterDeleted = todos.filter((todo) => {
      return todo.id !== id;
    });

    setTodos(filterDeleted);
  };

  return (
    <div style={styles.container}>
      <h1>My Todo List</h1>
      <Todos
        todos={todos}
        toggleCompleted={toggleCompleted}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "12px",
  },
};

export default App;
