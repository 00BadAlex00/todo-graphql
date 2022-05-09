import type {
  Reference,
  ApolloCache,
  DefaultContext,
  MutationUpdaterFunction,
  OperationVariables,
} from "@apollo/client";

interface DataProps {
  removeTodo: Todo
}

const removeTodo: MutationUpdaterFunction<
  DataProps,
  OperationVariables,
  DefaultContext,
  ApolloCache<any>
> = (cache, { data }) => {
  cache.modify({
    fields: {
      allTodos: (todos = [], { readField }) => {
        return todos.filter((todoRef: Reference) => readField('id', todoRef) !== data?.removeTodo.id)
      },
    },
  });
}

export default removeTodo
