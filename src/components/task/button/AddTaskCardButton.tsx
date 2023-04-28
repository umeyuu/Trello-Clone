import { type } from 'os'
import React from 'react'
import {v4 as uuid} from 'uuid'

type Props = {
  taskCardsList: any;
  setTaskCardsList: any;
}


export const AddTaskCardButton = ({taskCardsList, setTaskCardsList}: Props) => {
  const addTaskCard = () => {
    const taskCardId = uuid();
    // タスクカードを追加する
    setTaskCardsList([...taskCardsList, {
      id: taskCardId,
      draggableId: `item-${taskCardId}`,

    }])
  };
  return (
    <div className='addTaskCardButtonArea'>
      <button className='addTaskCardButton' onClick={addTaskCard}>+</button>
    </div>
  )
}
