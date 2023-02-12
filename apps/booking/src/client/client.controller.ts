import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { HotelsService } from '../hotels/hotels.service';
import { HotelRoomsService } from '../hotel-rooms/hotel-rooms.service';
import { UsersService } from '../users/users.service';
import { ReservationsService } from '../reservations/reservations.service';
import { SupportRequestsService } from '../support-requests/support-requests.service';
import { ID } from '../utils/types';

@Controller('client')
export class ClientController {
  constructor(
    private readonly reservationsService: ReservationsService,
    private readonly supportRequestsService: SupportRequestsService,
    private readonly usersService: UsersService
  ) {}
  // TODO

  @Post('reservations')
  addReservation(@Body() data) {
    return this.reservationsService.addReservation(data);
  }

  @Get('reservations')
  getReservations(@Query() params) {
    return this.reservationsService.getReservations(params);
  }

  @Delete('reservations/:id')
  removeReservation(@Param('id') id: ID) {
    return this.reservationsService.removeReservation(id);
  }

  // POST /api/client/register
  // POST /api/client/support-requests/
  // GET /api/client/support-requests/

  // @Get('hotels')
  // getHotels(@Query() params) {
  //   return this.hotelsService.search(params);
  // }
  // @Post('hotels')
  // createHotel(@Body() data) {
  //   return this.hotelsService.create(data);
  // }
  //
  // @Put('hotels/:id')
  // updateHotel(@Param('id') id: ID, @Body() data) {
  //   return this.hotelsService.update(id, data);
  // }
}
