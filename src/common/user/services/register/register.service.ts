import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/database/database/userEntity/user.entity';

@Injectable()
export class RegisterService {

    constructor(
        @InjectRepository(User) 
        private userRepository: Repository<User>, ){}

    async registerUser(userDetails: Partial<User>) : Promise<User>{
        const newUser = this.userRepository.create(userDetails);
        await this.userRepository.save(newUser);
        return newUser;
    }
}
