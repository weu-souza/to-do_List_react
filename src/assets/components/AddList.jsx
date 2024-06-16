import { useState } from "react";
import Button from "./Button";

const AddList = ({ onAddTask }) => {
  const [task, setTask] = useState("");

  const submit = (e) => {
    e.preventDefault();

    if (task.trim()) {
      onAddTask(task);
      setTask("");
      
    }
  };

  return (
    <form onSubmit={submit}>
      <input
        type="text"
        onChange={(e) => setTask(e.target.value)}
        value={task}
        placeholder="Digite sua tarefa"
        name="task"
      />
      <Button text={"Adicionar"} classN={"button-add"} />
    </form>
  );
};

export default AddList;
