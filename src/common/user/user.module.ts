import { Module } from '@nestjs/common';
import { UserController } from './controllers/user/user.controller';
import { LoginService } from './services/login/login.service';
import { RegisterService } from './services/register/register.service';
import { DatabaseModule } from 'src/database/database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [DatabaseModule, TypeOrmModule],
    providers: [LoginService, RegisterService],
    controllers: [UserController],
    exports: [LoginService, RegisterService]
})
export class UserModule {}
