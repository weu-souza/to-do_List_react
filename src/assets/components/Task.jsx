import Button from './Button'

const Task = ({task,onDelete,onComplete}) => {
  return (
    <li>
        <div className='text-container'>
        <div className={ task.done ? "text-done" :  "text-undone"} onClick={onComplete}></div>
        <span  className='task-txt ' style={{textDecoration: task.done? "line-through" :"none"}}>{task.text}</span>
        </div>
        <Button classN={'button-rmv'} text={'remover'} click={onDelete} ></Button>
    </li>
  )
}

export default Task