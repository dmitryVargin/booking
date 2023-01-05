import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { HotelRoomsService } from '../hotel-rooms/hotel-rooms.service';


@Controller('common')
export class CommonController {
  constructor(private readonly hotelRoomService: HotelRoomsService) {}

  @Get('hotel-rooms')
  getHotelRooms(@Query() params) {
    return this.hotelRoomService.search(params);
  }
  @Post('hotel-rooms')
  createHotelRooms(@Body() data) {
    return this.hotelRoomService.create(data);
  }
}
// description: string
// hotelId: string
// images[]: File
