import React, { useState } from 'react'
import { useMutation } from '@apollo/client'

import { ALL_TODOS } from '../../../queries';
import { CREATE_TODO } from '../../../mutations';

const TodoTextInput = () => {
  const [title, setTitle] = useState('');
  const [addTodo] = useMutation(CREATE_TODO, {
    refetchQueries: [{ query: ALL_TODOS }],
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!title) return

    addTodo({ variables: { title } })
    setTitle('')
  }

  return (
    <form onSubmit={handleSubmit} >
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  )
}

export default TodoTextInput
