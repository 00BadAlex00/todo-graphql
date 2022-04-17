const removeTodo = (cache, { data: { removeTodo } }) => {
  cache.modify({
    fields: {
      allTodos: (todos = [], { readField }) => {
        return todos.filter(todoRef => readField('id', todoRef) !== removeTodo.id)
      },
    },
  });
}

export default removeTodo

// const removeTodo = (cache, { data: { removeTodo } }) => {
//   Object.keys(cache.data.data).forEach(key =>
//     key === `Todo:${removeTodo.id}` && cache.data.delete(key)
//   )
// }
