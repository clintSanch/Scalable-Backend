import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public username: string;

  @Column()
  public firstname: string;

  @Column()
  public lastname: string;

  @Column()
  public email: string;

  @Column()
  public phonenumber: number;
}
