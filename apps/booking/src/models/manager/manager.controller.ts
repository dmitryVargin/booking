import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ReservationsService } from '../reservations/reservations.service';
import { SupportRequestsService } from '../support-requests/support-requests.service';
import { UsersService } from '../users/users.service';
import { ID } from '../../common/types';

@Controller('manager')
export class ManagerController {
  constructor(
    private readonly reservationsService: ReservationsService,
    private readonly supportRequestsService: SupportRequestsService,
    private readonly usersService: UsersService
  ) {}

  // TODO
  // GET /api/manager/reservations/:userId
  // DELETE /api/manager/reservations/:id
  // GET /api/manager/support-requests/

  @Get('users')
  getUsers(@Query() params) {
    return this.usersService.findAll(params);
  }
  @Post('hotels')
  createHotel(@Body() data) {
    return this.hotelsService.create(data);
  }

  @Put('hotels/:id')
  updateHotel(@Param('id') id: ID, @Body() data) {
    return this.hotelsService.update(id, data);
  }
}
