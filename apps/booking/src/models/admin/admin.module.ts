import { Body, Get, Module, Post, Query } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { HotelRoom, HotelRoomSchema } from '../hotel-rooms/schemas/hotel-room.schema';
import { HotelsModule } from '../hotels/hotels.module';
import { HotelsService } from '../hotels/hotels.service';
import { HotelRoomsModule } from '../hotel-rooms/hotel-rooms.module';

@Module({
  imports: [
    // MongooseModule.forFeature([{ name: HotelRoom.name, schema: HotelRoomSchema }]),
    HotelsModule,
    HotelRoomsModule
  ],
  controllers: [AdminController],
})
export class AdminModule {
}

