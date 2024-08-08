import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/database/database/userEntity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OtherService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
  ) {}

  async findUserById(id: number): Promise<UserEntity[]> {
    const user = await this.userRepo.findBy({ id });
    return user;
  }

  async findUserByUsername() {}

  async findUserByEmail() {}
  // Here we're going to set refresh-token to null
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async logout(userId: string) {
    return;
  }
}
