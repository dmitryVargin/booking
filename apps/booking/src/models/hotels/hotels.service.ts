import { Injectable } from '@nestjs/common';
import { IHotelService, SearchHotelParams, UpdateHotelParams } from './hotels.interface';
import { ID } from '../../common/types';
import { Hotel, HotelDocument } from './schemas/hotel.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class HotelsService implements IHotelService{
  constructor(
    @InjectModel(Hotel.name) private HotelModel: Model<HotelDocument>,
  ) {}
 async create(data: any): Promise<Hotel> {
   console.log(data);
   const hotel = new this.HotelModel(data)
    return hotel.save()
  }

  findById(id: ID): Promise<Hotel> {
    return Promise.resolve(undefined);
  }

  async search({limit, offset,title}: SearchHotelParams): Promise<Hotel[]> {
    return await this.HotelModel.find({
    })
      // .skip(offset).limit(limit).exec()
  }

  update(id: ID, data: UpdateHotelParams): Promise<Hotel> {
    return Promise.resolve(undefined);
  }
}
