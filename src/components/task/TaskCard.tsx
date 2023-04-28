import React, {useState} from 'react'
import { TaskCardTitle } from './TaskCardTitle'
import { TaskCardDeleteButton } from './button/TaskCardDeleteButton'
import { TaskAddInput } from './input/TaskAddInput'
import { Tasks } from './Tasks'

type TaskProperty = {
  id: string;
  text: string;
  draggableId: string;
}

export const TaskCard = () => {
  const [inputText, setInputText] = useState<string>('');
  const [taskList, setTaskList] = useState<TaskProperty[]>([]);

  return (
    <div className='taskCard'>
        <TaskCardTitle/>
        <TaskCardDeleteButton/>
        <TaskAddInput 
          inputText={inputText}
          setInputText={setInputText}
          taskList={taskList}
          setTaskList={setTaskList}
        />
        <Tasks 
        taskList={taskList}
        setTaskList={setTaskList}
        />
    </div>
  )
}
