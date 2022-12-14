import { SendNotification } from './send-notification';
import { Notification } from '../entities/notification/notification';

const notifications: Notification[] = [];

const notificationRepository = {
  async create(notification: Notification): Promise<void> {
    notifications.push(notification);
  }
}

describe('Send notification', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotification(notificationRepository);

    await sendNotification.execute({
      category: 'social',
      content: 'This is notification',
      recipientId: 'example-recipient-it'
    });

    expect(notifications).toHaveLength(1);
  })
})