import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { UserEntity } from 'src/database/database/userEntity/user.entity';

export class CreateUserDTO {
  @IsString()
  @IsNotEmpty()
  username: string;
  @IsNumber()
  @IsNotEmpty()
  id: number;
  @IsString()
  @IsNotEmpty()
  firstname: string;
  @IsString()
  @IsNotEmpty()
  @IsString()
  @IsNotEmpty()
  lastname: string;
  @IsString()
  @IsNotEmpty()
  email: string;
  @IsNumber()
  @IsNotEmpty()
  phonenumber: number;
  @IsString()
  @IsNotEmpty()
  gender: string;
  @IsString()
  @IsNotEmpty()
  password: string;

  constructor(userEntity: UserEntity) {
    this.username = userEntity.username;
    this.id = userEntity.id;
    this.firstname = userEntity.firstname;
    this.lastname = userEntity.lastname;
    this.email = userEntity.email;
    this.phonenumber = userEntity.phonenumber;
  }
}
