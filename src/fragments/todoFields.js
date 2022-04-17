import { gql } from '@apollo/client';

 const TODO_FIELDS = gql`
  fragment TodoFields on Todo {
    id
    title
    completed
  }
`;

export default TODO_FIELDS
