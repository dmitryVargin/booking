import { Module } from '@nestjs/common';
import { CommonController } from './common.controller';
import { HotelRoomsService } from '../hotel-rooms/hotel-rooms.service';
import { HotelRoomsModule } from '../hotel-rooms/hotel-rooms.module';
import { MongooseModule } from '@nestjs/mongoose';
import { HotelRoom, HotelRoomSchema } from '../hotel-rooms/schemas/hotel-room.schema';


@Module({
  imports:[
    HotelRoomsModule,
    MongooseModule.forFeature([{ name: HotelRoom.name, schema: HotelRoomSchema }]),
  ],
  controllers: [CommonController],
  providers: [HotelRoomsService]
})

export class CommonModule {}
