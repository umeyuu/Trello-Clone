import React from 'react'

export const TaskCardDeleteButton = ({taskCardsList, setTaskCardsList, taskCard}: any) => {
  const taskCardDeleteButton = (id :string) => {
    // タスクカードを削除する
    setTaskCardsList(taskCardsList.filter((e: any) => e.id !== id));
  };
  return (
    <div>
      <button className='taskCardDeleteButton' onClick={() => taskCardDeleteButton(taskCard.id)}>
        <i className="fas fa-times"></i>
      </button>
    </div>
  )
}
