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
  scheduledEventType: ScheduledEventType | string;
  scheduledEventInterval?: ScheduledEventInterval | string;
  scheduledEventDay: ScheduledEventDay | string;
  startTime: string;
  endTime: string;
  scheduledEventDate?: string;
  name: string;
  description?: string;
  category?: string;
  createdOn?: Date;
  lastUpdatedOn?: Date;
}
