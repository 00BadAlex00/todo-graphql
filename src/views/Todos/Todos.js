import { useQuery } from '@apollo/client'

import { ALL_TODOS } from '../../queries'
import Error from '../shared/Error'
import Loading from '../shared/Loading'
import TodoItem from './TodoItem'

const Todos = () => {
  const { loading, error, data } = useQuery(ALL_TODOS)

  if (loading) return <Loading />
  if (error) return <Error />
  return (
    <ul className="todo-list">
      {data.allTodos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  )
}

export default Todos
