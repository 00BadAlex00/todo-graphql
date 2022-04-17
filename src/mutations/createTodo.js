import { gql } from '@apollo/client'

import { TODO_FIELDS } from '../fragments'

const CREATE_TODO = gql`
  ${TODO_FIELDS}
  mutation CreateTodo($title: String!) {
    createTodo(title: $title, completed: false) {
      ...TodoFields
    }
  }
`

export default CREATE_TODO;
