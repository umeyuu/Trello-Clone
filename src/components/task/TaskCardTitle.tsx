import React, {useState} from 'react'

export const TaskCardTitle = () => {
    const [isClick, setIsClick] = useState<boolean>(false);
    const [inputCardTitle, setInputCardTitle] = useState<string>('Today');

    const handleClick = () => {
        setIsClick(true);
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputCardTitle(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsClick(false);
    }

    const handleBlur = () => {
        setIsClick(false);
    }

  return (
    <div onClick={handleClick} className='taskCardTitleInputArea'>
        {isClick ? (
        <form onSubmit={handleSubmit}>
            <input 
                className='taskCardTitleInput'
                autoFocus 
                type='text' 
                onChange={handleChange} 
                onBlur={handleBlur} 
                value={inputCardTitle}
                maxLength={10}
            />
        </form>
        ) :  (
        <h3>{inputCardTitle}</h3>
        )}
    </div>
  )
}
