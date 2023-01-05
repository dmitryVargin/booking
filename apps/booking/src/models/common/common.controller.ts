import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { HotelRoomsService } from '../hotel-rooms/hotel-rooms.service';
import { ID } from '../../common/types';

@Controller('common')
export class CommonController {
  constructor(private readonly hotelRoomsService: HotelRoomsService) {}
  @Get('hotel-rooms')
  getHotelRooms(@Query() data) {
    return this.hotelRoomsService.search(data);
  }

  @Get('hotel-rooms/:id')
  getHotelRoomById(@Param('id') id) {
    return this.hotelRoomsService.findById(id);
  }

  // TODO
  // GET /api/common/support-requests/:id/messages
  // POST /api/common/support-requests/:id/messages
  // POST /api/common/support-requests/:id/messages/read

  @Get('support-requests/:id/messages')
  getSupportRequestMessagesById(@Param('id') id) {
    // return this.hotelRoomsService.findById(id);
  }

  @Post('support-requests/:id/messages')
  sendSupportRequestMessageById(@Param('id') id) {
    // return this.hotelRoomsService.findById(id);
  }

  @Post('support-requests/:id/messages/read')
  sendReadActionToSupportRequestMessageById(@Param('id') id) {
    // return this.hotelRoomsService.findById(id);
  }
}
