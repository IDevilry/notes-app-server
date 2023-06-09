import { gql } from "apollo-server-express";

export const typeDefs = gql`
  scalar DateTime

  type Query {
    notes: [Note!]!
    note(id: ID): Note!
    user: User
    userById(id: ID!): User
    users: [User!]!
  }

  type Note {
    id: ID!
    title: String!
    content: String!
    category: String!
    author: User!
    addedToFavoriteTimes: Int!
    favoritedBy: [User!]
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type User {
    id: ID!
    username: String!
    email: String!
    notes: [Note!]!
    favoritesNotes: [Note!]
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Mutation {
    newNote(content: String!, title: String!, category: String!): Note!
    updateNote(id: ID!, content: String!, title: String!): Note!
    deleteNote(id: ID!): Note!
    toggleFavoriteNote(id: ID!): Note!
    signUp(username: String!, email: String!, password: String!): String!
    signIn(username: String, email: String!, password: String!): String!
  }
`;
