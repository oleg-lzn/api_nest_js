import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  NotFoundException,
} from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';
@Controller('/messages')
export class MessagesController {
  constructor(public messagesService: MessagesService) {}

  @Get()
  async listMessages() {
    const messages = await this.messagesService.findAll();
    return messages;
  }

  @Post()
  async createMessage(@Body() body: CreateMessageDto) {
    const message = await this.messagesService.create(body.content);
    return {
      data: message,
      status: 201,
    };
  }

  @Get('/:id')
  async getMessagesById(@Param('id') id: string) {
    const message = await this.messagesService.findOne(id);
    if (!message) {
      throw new NotFoundException('Message not found');
    }

    return message;
  }
}
