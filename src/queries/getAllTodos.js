import { gql } from '@apollo/client'

import { TODO_FIELDS } from '../fragments'

const ALL_TODOS = gql`
  ${TODO_FIELDS}
  query allTodos {
    allTodos {
      ...TodoFields
    }
  }
`
export default ALL_TODOS;
