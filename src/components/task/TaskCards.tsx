import React, {useState} from 'react'
import { AddTaskCardButton } from './button/AddTaskCardButton'
import { TaskCard } from './TaskCard'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const reorder = (list : any, startIndex : any, endIndex : any) => {
  // タスクを並び替える処理
  const remove = list.splice(startIndex, 1);
  list.splice(endIndex, 0, remove[0]);
};

export const TaskCards = () => {
  const [taskCardsList, setTaskCardsList] = useState([
    {
      id: 'taskCard-1',
      draggableId: 'item-taskCard-1',
    }
  ]);

  const onDragEnd = (result: any) => {
    reorder(taskCardsList, result.source.index, result.destination.index);
    setTaskCardsList(taskCardsList);
  };
  
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId='droppable' direction='horizontal'>
        {(provided: any) => (
          <div 
            className='taskCardsArea' 
            {...provided.droppableProps} 
            ref={provided.innerRef}
          >
            {taskCardsList.map((taskCard: any, index: number) => (
              <TaskCard 
                key={taskCard.id} 
                taskCardsList={taskCardsList}
                setTaskCardsList={setTaskCardsList}
                taskCard={taskCard}
                index={index}
              />
            ))}
            {provided.placeholder}
            <AddTaskCardButton 
              taskCardsList={taskCardsList} 
              setTaskCardsList={setTaskCardsList}
            />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}
