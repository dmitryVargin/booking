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
import { ReservationsService } from '../reservations/reservations.service';
import { SupportRequestsService } from '../support-requests/support-requests.service';
import { UsersService } from '../users/users.service';
import { ID } from '../utils/types';

@Controller('manager')
export class ManagerController {
  constructor(
    private readonly reservationsService: ReservationsService,
    private readonly supportRequestsService: SupportRequestsService,
    private readonly usersService: UsersService
  ) {}

  @Get('reservations/:id')
  get(@Param('id') id: ID) {
    return this.reservationsService.findById(id);
  }
  @Delete('reservations/:id')
  delete(@Param('id') id: ID) {
    return this.reservationsService.removeReservation(id);
  }

  @Get('users')
  getUsers(@Query() data) {
    return this.usersService.findAll(data);
  }
}
