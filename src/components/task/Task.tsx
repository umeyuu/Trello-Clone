import { type } from 'os';
import React from 'react'
import { Draggable } from 'react-beautiful-dnd';

type TaskProperty = {
    id: string;
    text: string;
    draggableId: string;
  }

  type TaskProps = {
    task: TaskProperty;
    taskList: TaskProperty[];
    setTaskList: React.Dispatch<React.SetStateAction<TaskProperty[]>>;
    index: number;
  };

export const Task = ({task, taskList, setTaskList, index} : TaskProps) => {

    const handleDelete = (id : string) => {
      setTaskList(taskList.filter((task) => task.id !== id));
    };


  return (
    <Draggable index={index} draggableId={task.draggableId}>
      {(provided:any) => (
        <div 
          className='taskBox' 
          key={task.id} 
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <p className='taskText'>{task.text}</p>
          <button className='taskTrashButton' onClick={() => handleDelete(task.id)}>
              <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      )}
    </Draggable>
  )
}
