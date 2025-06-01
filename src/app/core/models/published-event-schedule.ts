export interface PublishedEventSchedule {
  publishedEventScheduleId?: string;
  establishmentId: string;
  eventScheduleId: string;
  name: string;
  targetYear: number;
  targetMonth: number;
  filename: string;
  createdOn: Date;
  lastUpdatedOn: Date;
}
