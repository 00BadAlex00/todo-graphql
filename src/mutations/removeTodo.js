import { gql } from '@apollo/client'

const REMOVE_TODO = gql`
  mutation RemoveTodo($id: ID!) {
    removeTodo(id: $id) {
      id
    }
  }
`

export default REMOVE_TODO;
