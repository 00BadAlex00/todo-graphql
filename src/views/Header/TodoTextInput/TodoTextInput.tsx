import React, { useState } from 'react'
import { useMutation } from '@apollo/client'

import { ALL_TODOS } from '../../../queries';
import { CREATE_TODO } from '../../../mutations';

type HandleChange = (e: React.ChangeEvent<HTMLInputElement>) => void;

const TodoTextInput = () => {
  const [title, setTitle] = useState('');
  const [addTodo] = useMutation(CREATE_TODO, {
    refetchQueries: [{ query: ALL_TODOS }],
  })

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()

    if (!title) return

    addTodo({ variables: { title } })
    setTitle('')
  }

  const handleChange: HandleChange = (e) => {
    setTitle(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit} >
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={title}
        onChange={handleChange}
      />
    </form>
  )
}

export default TodoTextInput
