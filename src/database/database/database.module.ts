import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '',
      port: parseInt(''),
      username: '',
      password: '',
      database: '',
      entities: [],
      synchronize: true,
    }),
  ],
  providers: [],
  controllers: [],
  exports: [],
})
export class DatabaseModule {}
