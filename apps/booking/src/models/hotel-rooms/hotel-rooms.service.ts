import { Injectable } from '@nestjs/common';
import { HotelRoomService, SearchRoomsParams } from './hotel-rooms.interface';
import { HotelRoom, HotelRoomDocument } from './schemas/hotel-room.schema';
import { ID } from '../../common/types';
import { Connection, Model } from 'mongoose';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';



@Injectable()
export class HotelRoomsService implements HotelRoomService{
  constructor(
    @InjectModel(HotelRoom.name) private HotelRoomModel: Model<HotelRoomDocument>,
  ) {}

 async create(data: Partial<HotelRoom>): Promise<HotelRoom> {
   const hotelRoom = new this.HotelRoomModel(data)
   return hotelRoom.save()
  }

  findById(id: ID): Promise<HotelRoom> {
    return Promise.resolve(undefined);
  }

  async search({limit = 0, offset = 0, hotel,isEnabled}: SearchRoomsParams): Promise<HotelRoom[]> {
    return await this.HotelRoomModel.find({
      hotel,
      ...(isEnabled && { isEnabled }),
    }).skip(offset).limit(limit).exec()
  }

  update(id: ID, data: Partial<HotelRoom>): Promise<HotelRoom> {
    return Promise.resolve(undefined);
  }
}
