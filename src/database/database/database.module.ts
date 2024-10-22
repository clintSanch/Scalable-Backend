import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DbService } from './db/db.service';
import { UserDbService } from './db/user-db/user-db.service';
import { ProductDbService } from './db/product-db/product-db.service';

@Global()
@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' })],
  providers: [DbService, UserDbService, ProductDbService],
  controllers: [],
  exports: [DbService, UserDbService, ProductDbService],
})
export class DatabaseModule {}
