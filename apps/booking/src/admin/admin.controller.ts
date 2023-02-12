import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { HotelsService } from '../hotels/hotels.service';
import { HotelRoomsService } from '../hotel-rooms/hotel-rooms.service';
import { ID } from '../utils/types';
import { UsersService } from '../users/users.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('admin')
export class AdminController {
  constructor(
    private readonly hotelsService: HotelsService,
    private readonly hotelRoomsService: HotelRoomsService,
    private readonly usersService: UsersService
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get('hotels')
  getHotels(@Query() params) {
    return this.hotelsService.search(params);
  }
  @Post('hotels')
  createHotel(@Body() data) {
    return this.hotelsService.create(data);
  }

  @Put('hotels/:id')
  updateHotel(@Param('id') id: ID, @Body() data) {
    return this.hotelsService.update(id, data);
  }

  @Get('hotel-rooms')
  getHotelRooms(@Query() data) {
    return this.hotelRoomsService.search(data);
  }
  @Post('hotel-rooms')
  createHotelRoom(@Body() data) {
    return this.hotelRoomsService.create(data);
  }

  @Put('hotel-rooms/:id')
  updateHotelRoom(@Param('id') id: ID, @Body() data) {
    return this.hotelRoomsService.update(id, data);
  }

  @Get('users')
  getUsers(@Query() data) {
    return this.usersService.findAll(data);
  }

  @Post('users')
  createUser(@Body() data) {
    return this.usersService.create(data);
  }
}
