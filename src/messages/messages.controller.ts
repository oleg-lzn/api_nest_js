import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('/messages')
export class MessagesController {
  @Get()
  listMessages() {
    return {
      message: 'Api is good',
      status: 200,
    };
  }

  @Post()
  createMessage(@Body() body: any) {
    console.log(body);
  }

  @Get('/:id')
  getMessagesById(@Param() id: string) {
    console.log(id);
    return {
      message: 'Got the param',
      status: 200,
      param: id,
    };
  }
}
