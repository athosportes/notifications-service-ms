import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { randomUUID } from 'node:crypto';
import { CreateNotificationBody } from './create-notification-body';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) { }

  @Get()
  async list() {
    return await this.prisma.notification.findMany();
  }

  @Post('create')
  async create(@Body() body: CreateNotificationBody): Promise<void> {
    const { recipientId, content, category } = body;
    await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        category,
        content,
        recipientId
      }
    })

  }
}
