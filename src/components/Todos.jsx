import TodoItem from "./TodoItem";

function Todos({ todos, toggleCompleted, deleteTodo }) {
  return (
    <div style={styles.container}>
      {todos.map((todo) => (
        <TodoItem
          completed={todo.completed}
          title={todo.title}
          key={todo.id}
          id={todo.id}
          toggleCompleted={toggleCompleted}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
}

const styles = {
  container: {
    width: "40%",
    margin: "0 auto",
  },
};

export default Todos;
