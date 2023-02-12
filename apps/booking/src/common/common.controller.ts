import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { HotelRoomsService } from '../hotel-rooms/hotel-rooms.service';
import { ID } from '../utils/types';
import { SupportRequestsClientService } from '../support-requests/support-request-client.service';
import { SupportRequestsService } from '../support-requests/support-requests.service';

@Controller('common')
export class CommonController {
  constructor(
    private readonly hotelRoomsService: HotelRoomsService,
    private readonly supportRequestsClientService: SupportRequestsClientService,
    private readonly supportRequestsService: SupportRequestsService
  ) {}
  @Get('hotel-rooms')
  getHotelRooms(@Query() data) {
    return this.hotelRoomsService.search(data);
  }

  @Get('hotel-rooms/:id')
  getHotelRoomById(@Param('id') id) {
    return this.hotelRoomsService.findById(id);
  }

  @Get('support-requests/:id/messages')
  async getSupportRequestMessagesById(@Param('id') id) {
    return this.supportRequestsService.getMessages(id);
  }

  @Post('support-requests/:id/messages')
  sendSupportRequestMessageById(@Body() data) {
    return this.supportRequestsService.sendMessage(data);
  }

  @Post('support-requests/:id/messages/read')
  sendReadActionToSupportRequestMessageById(@Param('id') id) {
    return this.supportRequestsClientService.markMessagesAsRead(id);
  }
}
