import { ScheduledEventDay } from "./scheduled-event-day";
import { ScheduledEventInterval } from "./scheduled-event-interval";
import { ScheduledEventType } from "./scheduled-event-type";

export interface ScheduledEvent {
  scheduledEventId?: string;
  eventScheduleId: string;
  eventId: string;
  establishmentId: string;
  locationId?: string;
  organizerId?: string;
  scheduledEventType: ScheduledEventType;
  scheduledEventInterval: ScheduledEventInterval;
  scheduledEventDay: ScheduledEventDay;
  startTime: string;
  endTime: string;
  scheduledEventDate: string;
  name: string;
  description?: string;
  category?: string;
  createdOn?: Date;
  lastUpdatedOn?: Date;
}
