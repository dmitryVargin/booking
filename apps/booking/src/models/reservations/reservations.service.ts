import { Injectable } from '@nestjs/common';
import { IReservation, ReservationDto, ReservationSearchOptions } from './reservations.interface';
import { Reservation } from './schemas/reservation.schema';
import { ID } from '../../common/types';

@Injectable()
export class ReservationsService implements IReservation{
  addReservation(data: ReservationDto): Promise<Reservation> {
    return Promise.resolve(undefined);
  }

  getReservations(filter: ReservationSearchOptions): Promise<Array<Reservation>> {
    return Promise.resolve(undefined);
  }

  removeReservation(id: ID): Promise<void> {
    return Promise.resolve(undefined);
  }
}
