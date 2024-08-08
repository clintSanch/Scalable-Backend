import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DbService } from './db/db.service';

@Global()
@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' })],
  providers: [DbService],
  controllers: [],
  exports: [DbService],
})
export class DatabaseModule {}
