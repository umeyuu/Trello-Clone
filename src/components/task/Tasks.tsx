import React from 'react'
import { Task } from './Task';
import { type } from 'os';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

type TaskProperty = {
  id: string;
  text: string;
  draggableId: string;
};

type TasksProps = {
  taskList: TaskProperty[];
  setTaskList: React.Dispatch<React.SetStateAction<TaskProperty[]>>;
};

const reorder = (list : any, startIndex : any, endIndex : any) => {
  // タスクを並び替える処理
  const remove = list.splice(startIndex, 1);
  list.splice(endIndex, 0, remove[0]);
};

export const Tasks = ({taskList, setTaskList} :TasksProps) => {

  const onDragEnd = (result : any) => {
    if (!result.destination) {
      return;
    }
    reorder(taskList, result.source.index, result.destination.index);
    setTaskList(taskList);
  };

  return (
    <div>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId='droppable'>
          {(provided:any) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {taskList.map((task : TaskProperty, index : number) => (
                <div key={task.id}>
                  <Task 
                    index={index}
                    task={task} 
                    taskList={taskList} 
                    setTaskList={setTaskList}
                  />
                </div>
              ))}
              {provided.placeholder}
            </div>
          )}
      </Droppable>
      </DragDropContext>
    </div>
  )
}
