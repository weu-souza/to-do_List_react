import Task from "./Task";

const List = ({ tasks, onDeleteTask, completeT }) => {

  if(tasks.length === 0){
    return <div className="sem-tarefas">
      <h1 className="no-task-title">Sem Tarefas</h1>
      <div>
      <img src="/src/assets/img/Sem-tarefas.svg" alt="sem tarefas"/>
      </div>
      
    </div>
  }
  return (
    <ul>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDelete={() => onDeleteTask(task.id)}
          onComplete={() =>completeT(task.id)}
        />
      ))}
    </ul>
  );
};

export default List;
