import { useEffect, useState } from "react";
import "./App.css";
import AddList from "./assets/components/AddList";
import Container from "./assets/components/Container";
import List from "./assets/components/List";

function App() {
  const [task, setTask] = useState(
    JSON.parse(localStorage.getItem("tasks") || [])
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(task));
  }, [task]);

  const addTask = (tasks) => {
    setTask([...task, { id: Date.now(), text: tasks, done: false }]);
  };

  const delTask = (taskId) => {
    setTask(task.filter((tasks) => tasks.id !== taskId));
  };

  const completeTask = (taskId) => {
    setTask(
      task.map((tasks) =>
        tasks.id === taskId ? { ...tasks, done: !tasks.done } : tasks
      )
    );
  };

  return (
    <>
      <Container>
        <h1>Lista de tarefas</h1>
        <AddList onAddTask={addTask} />
        <List tasks={task} onDeleteTask={delTask} completeT={completeTask} />
      </Container>
    </>
  );
}

export default App;
