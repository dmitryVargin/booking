import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { HotelsService } from '../hotels/hotels.service';
import { HotelRoomsService } from '../hotel-rooms/hotel-rooms.service';


@Controller('admin')
export class AdminController {
  constructor(private readonly hotelsService: HotelsService,
              private readonly hotelRoomsService: HotelRoomsService) {}

  @Get('hotels')
  getHotels(@Query() params) {
    return this.hotelsService.search(params);
  }
  @Post('hotels')
  createHotel(@Body() data) {
    return this.hotelsService.create(data);
  }
  @Get('hotel-rooms')
  getHotelRooms(@Query() data) {
    console.log("1123",data);
    return this.hotelRoomsService.search(data);
  }
  @Post('hotel-rooms')
  createHotelRoom(@Body() data) {
    return this.hotelRoomsService.create(data);
  }
}

