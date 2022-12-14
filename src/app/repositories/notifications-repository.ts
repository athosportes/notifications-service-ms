import { Notification } from "../entities/notification/notification";

export abstract class NotificationsRepository {
  abstract create(notifications: Notification): Promise<void>;
}