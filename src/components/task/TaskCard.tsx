import React, {useState} from 'react'
import { TaskCardTitle } from './TaskCardTitle'
import { TaskCardDeleteButton } from './button/TaskCardDeleteButton'
import { TaskAddInput } from './input/TaskAddInput'
import { Tasks } from './Tasks'
import { Draggable } from 'react-beautiful-dnd'

type TaskProperty = {
  id: string;
  text: string;
  draggableId: string;
}

type Props = {
  taskCardsList: any;
  setTaskCardsList: any;
  taskCard: any;
  index: number;
};

export const TaskCard = ({taskCardsList, setTaskCardsList, taskCard, index}: Props) => {
  const [inputText, setInputText] = useState<string>('');
  const [taskList, setTaskList] = useState<TaskProperty[]>([]);

  return (
    <Draggable draggableId={taskCard.id} index={index}>
      {provided => (
        <div 
          className='taskCard' 
          ref={provided.innerRef}
          {...provided.draggableProps}
        >
          <div className='taskCardHeader' {...provided.dragHandleProps}>
            <TaskCardTitle/>
            <TaskCardDeleteButton
              taskCardsList={taskCardsList}
              setTaskCardsList={setTaskCardsList}
              taskCard={taskCard}
            />
          </div>
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
      )}
    </Draggable>
  )
}
