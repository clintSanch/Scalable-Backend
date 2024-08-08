import { UserEntity } from 'src/database/database/userEntity/user.entity';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @IsNotEmpty()
  @IsString()
  username: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsString()
  @IsNotEmpty()
  password: string;

  constructor(userEntity: UserEntity) {
    this.username = userEntity.username;
    this.email = userEntity.email;
    this.password = userEntity.password;
  }
}
