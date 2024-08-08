import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/database/database/userEntity/user.entity';

@Injectable()
export class RegisterService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
  ) {}

  async registerUser(user: UserEntity): Promise<UserEntity> {
    try {
      const createdUser = await this.userRepo.create(user);
      return createdUser;
    } catch (error) {
      console.error(error);
    }
  }
}
