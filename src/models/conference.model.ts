export enum ConferenceStatus {
  UPCOMING = 'UPCOMING',
  ACTIVE = 'ACTIVE',
  COMPLETED = 'COMPLETED',
  INACTIVE = 'INACTIVE',
}

export interface ConferenceDateRange {
  startDate: Date;
  endDate: Date;
}

export interface ConferenceSpeaker {
  id: string;
  name: string;
  bio: string;
  title: string;
  company: string;
  preferredPronoun: string;
  talkTitle: string;
  talkAbstract: string;
  presentationTime: Date;
}

export interface Conference {
  id: string;
  name: string;
  description: string;
  keywords: string[];
  dates: ConferenceDateRange;
  organizerId: string;
  organizer?: unknown;
  speakers?: ConferenceSpeaker[];
  status: ConferenceStatus;
}
