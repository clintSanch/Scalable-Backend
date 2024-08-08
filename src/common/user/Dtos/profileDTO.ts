import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';
import { UserEntity } from 'src/database/database/userEntity/user.entity';

export class UserProfileDTO {
  @IsString()
  @IsNotEmpty()
  @Expose()
  username: string;
  @IsString()
  @IsNotEmpty()
  @Expose()
  email: string;

  constructor(userEntity: UserEntity) {
    this.username = userEntity.username;
    this.email = userEntity.email;
  }
}
