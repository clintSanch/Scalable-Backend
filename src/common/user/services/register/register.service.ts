import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/database/database/userEntity/user.entity';
import { UserDbService } from 'src/database/database/db/user-db/user-db.service';

@Injectable()
export class RegisterService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
    private readonly userData: UserDbService,
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
