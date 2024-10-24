import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { User } from '../user/user.interface';
import { UserEntity } from 'src/database/database/userEntity/user.entity';

//DTO(Data Transfer Object) --UserDTO ---trying to convert model class to dto
//DTO(validation checkpoint) --ensuring the accuracy and consistency of data as it traverses different components of the application
export class UserDetails implements User {
  @IsNotEmpty()
  @IsString()
  username: string;
  @IsNotEmpty()
  @IsNumber()
  id: number;
  @IsNotEmpty()
  @IsString()
  firstname: string;
  @IsNotEmpty()
  @IsString()
  lastname: string;
  @IsNotEmpty()
  @IsEmail()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  @IsNumber()
  phonenumber: number;

  constructor(userEntity: UserEntity) {
    this.username = userEntity.username;
    this.id = userEntity.id;
    this.firstname = userEntity.firstname;
    this.lastname = userEntity.lastname;
    this.email = userEntity.email;
    this.phonenumber = userEntity.phonenumber;
  }
}
