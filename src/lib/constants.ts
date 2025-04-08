export const ESTABLISHMENTS_PATH = "establishments";
export const EVENT_SCHEDULES_PATH = "event-schedules";
export const EVENTS_PATH = "events";
export const LOCATIONS_PATH = "locations";
export const ORGANIZERS_PATH = "organizers";
export const PUBLISHED_EVENT_SCHEDULES_PATH = "published-event-schedules";
export const SCHEDULED_EVENTS_PATH = "scheduled-events";
export const USERS_PATH = "users";

const BASE_STORAGE_FOLDER = "event-admin-service-file-storage";

export const FILE_STORAGE_BASE_URL =
  process.env.NEXT_PUBLIC_FILE_STORAGE_SERVER_URL + "/" + BASE_STORAGE_FOLDER;

export const USER_ID = process.env.NEXT_PUBLIC_USER_ID;
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
