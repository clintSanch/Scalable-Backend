import { CreateUserDTO } from 'src/common/user/Dtos/userDTO';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ type: 'varchar', length: 30 })
  public username: string;

  @Column({ type: 'varchar', length: 30 })
  public firstname: string;

  @Column({ type: 'varchar', length: 30 })
  public lastname: string;

  @Column({ type: 'varchar', length: 40 })
  public email: string;

  @Column({ type: 'int' })
  public phonenumber: number;

  @Column({ type: 'enum', enum: ['male', 'female', 'unspecified'] })
  public gender: string;

  @Column({ type: 'string', length: 50 })
  public password: string;

  constructor(userDto: CreateUserDTO) {
    this.id = userDto.id;
    this.username = userDto.username;
    this.firstname = userDto.firstname;
    this.lastname = userDto.lastname;
    this.email = userDto.email;
    this.gender = userDto.gender;
    this.phonenumber = userDto.phonenumber;
    this.password = userDto.password;
  }
}
