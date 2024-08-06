import { useState } from "react";

const initialTasks = ["laundry", "eat", "meeting"];
function App() {
  const [taskInput, setTaskInput] = useState("");
  const [todos, setTodos] = useState([]);

  function handleForm(e) {
    setTaskInput(e.target.value);
  }
  function handleAdd(e) {
    e.preventDefault();
    setTodos([...todos, { task: taskInput, completed: false, id: Date.now() }]);
    setTaskInput("");
  }
  return (
    <div className="App">
      <Header />
      <TodoForm handleForm={handleForm} handleAdd={handleAdd} />
      <TaskList />
    </div>
  );
}

export default App;

function Header() {
  return <h1>TODO APP</h1>;
}
function TodoForm({ handleForm, handleAdd, taskInput }) {
  return (
    <form>
      <input
        value={taskInput}
        type="text"
        placeholder="Enter Your Task"
        onChange={handleForm}
      />
      <button onClick={handleAdd} type="submit">
        Add
      </button>
      <div>
        <select>
          <option value="all">All</option>
          <option value="completed">Comleted</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

function TaskList() {
  return (
    <ol>
      {initialTasks.map((task) => (
        <li key={task}>{task}</li>
      ))}
    </ol>
  );
}
