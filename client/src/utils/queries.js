import { gql } from '@apollo/client';

export const QUERY_MOOD = gql`
  query mood($id: ID!, $date: String!) {
    meById(_id: $id)  {
      mood(date: $date) {
        rating
      }
    }
  }
`;

export const QUERY_MOOD_DESCRIPTION = gql`
  query matchups($_id: String) {
    matchups(_id: $_id) {
      _id
      tech1
      tech2
      tech1_votes
      tech2_votes
    }
  }
`;
