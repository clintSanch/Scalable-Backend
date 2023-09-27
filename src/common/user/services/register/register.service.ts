/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Repository } from 'typeorm';
import { User } from 'src/database/database/userEntity/user.entity';

@Injectable()
export class RegisterService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  async registerUser(): Promise<User> {
    return;
  }
}
