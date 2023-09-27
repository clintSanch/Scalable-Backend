import { Module, forwardRef } from '@nestjs/common';
import { UserController } from './controllers/user/user.controller';
import { LoginService } from './services/login/login.service';
import { RegisterService } from './services/register/register.service';
import { DatabaseModule } from 'src/database/database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OtherService } from './services/other/other.service';

@Module({
  imports: [DatabaseModule, TypeOrmModule],
  providers: [LoginService, RegisterService, OtherService],
  controllers: [UserController],
  exports: [LoginService, RegisterService, OtherService],
})
export class UserModule {}
