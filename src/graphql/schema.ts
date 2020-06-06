import { gql, IResolvers } from 'apollo-server-lambda';
import { DocumentNode } from 'graphql';

import { Conference, ConferenceStatus, ConferenceSpeaker } from '../models/conference.model';

export const typeDefs: DocumentNode = gql`
  enum ConferenceStatus {
    UPCOMING
    ACTIVE
    COMPLETED
    INACTIVE
  }

  type ConferenceDateRange {
    startDate: Date!
    endDate: Date!
  }

  input ConferenceDateRangeInput {
    startDate: Date!
    endDate: Date!
  }

  type ConferenceOrganizer {
    id: String!
    name: String!
    facebook: String
    twitter: String
    linkedin: String
    url: String
  }

  type ConferenceSpeaker {
    id: String!
    name: String!
    title: String!
    company: String
    preferredPronoun: String
    talkTitle: String!
    talkAbstract: String!
    bio: String!
    presentationTime: Date!
  }

  # type that represents data about a Conference
  type Conference {
    id: String!
    name: String!
    description: String!
    keywords: [String!]!
    dates: ConferenceDateRange!
    # FK to the ConferenceOrganizer table id field
    organizerId: String!
    organizer: ConferenceOrganizer
    speakers: [ConferenceSpeaker!]
    status: ConferenceStatus!
  }

  input ConferenceInput {
    id: String
    name: String!
    description: String!
    keywords: [String!]!
    dates: ConferenceDateRangeInput!
    organizerId: String!
    status: ConferenceStatus!
  }

  input ConferenceListFilter {
    name: String
    keywords: [String]
    speakers: [String]
  }

  type Query {
    hello(name: String!): String!
    # get a list of conferences
    conferences(filter: ConferenceListFilter): [Conference]
    # get conference details
    conference(id: String!): Conference
  }

  type Mutation {
    createConference(conference: ConferenceInput!): Conference
  }

  scalar Date
`;

export const resolvers: IResolvers = {
  Query: {
    hello: async (_source: unknown, { name }): Promise<string> => `${name}`,
    conferences: async (): Promise<Conference[]> => [
      {
        id: 'absshjdshshs',
        name: 'Women Who Code',
        description: 'Lots od code stuff',
        keywords: ['GraphQL', 'NodeJs', 'Serverless'],
        dates: {
          startDate: new Date(),
          endDate: new Date(),
        },
        organizerId: 'hdhdhd',
        status: ConferenceStatus.ACTIVE,
      },
    ],
    conference: async (): Promise<unknown> => null,
  },
  Mutation: {
    createConference: async (_source: unknown, { conference }: { conference: Conference }): Promise<Conference> =>
      conference,
  },
  Conference: {
    speakers: async (parent: Conference): Promise<ConferenceSpeaker[]> => {
      console.log('retrieveing conference speakers', parent.id);
      return [
        {
          id: 'hjdhdhdhd',
          name: 'Chris Whited',
          title: 'Senior Software Engineer',
          company: 'This Dot',
          talkTitle: 'Intro to GraphQL',
          talkAbstract: 'GraphQL',
          preferredPronoun: 'He/Him',
          presentationTime: new Date(),
          bio: 'software engineer',
        },
      ];
    },
  },
};
