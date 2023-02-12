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
import { SupportRequestsClientService } from '../support-requests/support-request-client.service';

@Controller('client')
export class ClientController {
  constructor(
    private readonly reservationsService: ReservationsService,
    private readonly supportRequestsClientService: SupportRequestsClientService,
    private readonly supportRequestsService: SupportRequestsService,
    private readonly usersService: UsersService
  ) {}

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
  @Post('support-request')
  createSupportReuest(@Body() data) {
    return this.supportRequestsClientService.createSupportRequest(data);
  }
  @Get('support-request')
  getSupportRequest(@Query() data) {
    return this.supportRequestsService.findSupportRequests(data);
  }
}
