import { Injectable } from '@nestjs/common';
import { IUserService, SearchUserParams } from './users.interface';
import { ID } from '../../common/types';
import { User } from './schemas/user.schema';

@Injectable()
export class UsersService implements IUserService{
  create(data: Partial<User>): Promise<User> {
    return Promise.resolve(undefined);
  }

  findAll(params: SearchUserParams): Promise<User[]> {
    return Promise.resolve([]);
  }

  findByEmail(email: string): Promise<User> {
    return Promise.resolve(undefined);
  }

  findById(id: ID): Promise<User> {
    return Promise.resolve(undefined);
  }
}
