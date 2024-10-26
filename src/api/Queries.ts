import { gql } from "@apollo/client";

const GET_EVENTS = gql`
    query Events {
  events {
    uuid
    name
    severity
    lat
    lng
    createdAt
    updatedAt
  }
}`;


const GET_EVENT_BY_ID = gql`
query Event($uuid: String!) {
  event(input: { uuid: $uuid }) {
    uuid
    name
    description
    lat
    lng
    createdAt
    updatedAt
    severity
  }
}`;

const CREATE_EVENT = gql`
mutation CreateEvent($description: String!, $lat: Float!, $lng: Float!) {
  eventCreate(input: {
    description: $description
    lat: $lat
    lng: $lng
  }) {
    uuid
    name
    description
    severity
    lat
    lng
    createdAt
    updatedAt
  }
}`;

export { GET_EVENTS, GET_EVENT_BY_ID, CREATE_EVENT }