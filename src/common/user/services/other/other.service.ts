import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/database/database/userEntity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OtherService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  async findUserById(): Promise<User> {
    return;
  }

  // Here we're going to set refresh-token to null
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async logout(userId: string) {
    return;
  }
}
