import { Module } from '@nestjs/common';
import { HotelsService } from './hotels.service';
import { HotelRoomsService } from '../hotel-rooms/hotel-rooms.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Hotel, HotelSchema } from './schemas/hotel.schema';
import { HotelRoomsModule } from '../hotel-rooms/hotel-rooms.module';


@Module({
  imports: [
    MongooseModule.forFeature([{ name: Hotel.name, schema: HotelSchema }]),
  ],
  providers: [HotelsService],
  exports: [HotelsService],
})
export class HotelsModule {}
