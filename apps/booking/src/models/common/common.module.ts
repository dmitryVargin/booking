import { Module } from '@nestjs/common';
import { CommonController } from './common.controller';
import { HotelRoomsModule } from '../hotel-rooms/hotel-rooms.module';

@Module({
  imports: [HotelRoomsModule],
  controllers: [CommonController],
})
export class CommonModule {}
