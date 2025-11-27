import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.service';

@Controller('/messages')
export class MessagesController {
  messagesService: MessagesService;

  constructor() {
    //Don't do this in real app, use dependency injection
    this.messagesService = new MessagesService();
  }

  @Get()
  listMessages() {
    return {
      messages: this.messagesService.findAll(),
      status: 200,
    };
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return {
      messages: this.messagesService.create(body.content),
      status: 201,
    };
  }

  @Get('/:id')
  getMessagesById(@Param() id: string) {
    return {
      messages: this.messagesService.findOne(id),
      status: 200,
    };
  }
}
