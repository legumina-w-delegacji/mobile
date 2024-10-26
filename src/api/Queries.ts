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
  }
}`;

export {GET_EVENTS, GET_EVENT_BY_ID}