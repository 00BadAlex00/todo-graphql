import { useMutation } from '@apollo/client'
import classNames from 'classnames'

import * as updateFunctions from '../../../updateFunctions'
import { UPDATE_TODO, REMOVE_TODO } from '../../../mutations'
import Loading from '../../shared/Loading'

const TodoItem = ({ todo: { id, completed, title } }) => {
  const [removeTodo, { loading }] = useMutation(REMOVE_TODO, {
    update: updateFunctions.removeTodo
  })
  const [toggleTodo, { loading: toggleLoading }] = useMutation(UPDATE_TODO, {
    variables: {
      id,
      completed: !completed,
    },
  })

  if (loading) return <Loading />
  return (
    <li className={classNames('todo', { completed: completed })}>
      <div className="view">
        <input
          type="checkbox"
          className="toggle"
          checked={completed}
          onChange={toggleTodo}
          disabled={toggleLoading}
        />
        <label>{title}</label>
        <button
          className="destroy"
          onClick={() => removeTodo({ variables: { id } })}
        />
      </div>
    </li>
  )
}
export default TodoItem
