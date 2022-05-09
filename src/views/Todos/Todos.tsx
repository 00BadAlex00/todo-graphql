import { useQuery } from '@apollo/client'

import { ALL_TODOS } from '../../queries'
import Error from '../shared/Error'
import Loading from '../shared/Loading'
import TodoItem from './TodoItem'

interface TodosData {
  allTodos: Todo[];
}

const Todos = () => {
  const { loading, error, data } = useQuery<TodosData>(ALL_TODOS)

  if (loading) return <Loading />
  if (error) return <Error />
  return (
    <ul className="todo-list">
      {data?.allTodos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  )
}

export default Todos
