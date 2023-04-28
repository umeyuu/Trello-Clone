import React from 'react'
import {v4 as uuidv4} from 'uuid';

type TaskAddInputProps = {
  inputText: string;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
  taskList: TaskProperty[];
  setTaskList: React.Dispatch<React.SetStateAction<TaskProperty[]>>;
}

type TaskProperty = {
  id: string;
  text: string;
  draggableId: string;
}

export const TaskAddInput = ({
  inputText, 
  setInputText, 
  taskList, 
  setTaskList} : TaskAddInputProps
  ) => {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const taskId = uuidv4();
    
    e.preventDefault();  
    if (inputText === '') return;
    // カードを追加する処理
    setTaskList([
      ...taskList, 
      {
        id: taskId,
        text: inputText,
        draggableId: `task-${taskId}`
      }
    ]);
    setInputText('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type='text' 
          placeholder='add a task' 
          className='taskAddInput' 
          onChange={handleChange}
          value={inputText}
        />
      </form>
    </div>
  )
}
