import { gql } from '@apollo/client';


export const GET_USER = gql`
  {
    me {
      _id
      username
      email
      moods {
        description
        rating
        date
      }
      habits{
        name
        rating
        date
      }
    }
  }
`

export const QUERY_MOOD = gql`
{
moodByDate {
      description
      rating
      date
    }
  }
  `

export const QUERY_MOOD_DESCRIPTION = gql`
{
  moodByDate {
    mood {
      description
    }
  }
`;

export const QUERY_MATCHUPS = gql`
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
