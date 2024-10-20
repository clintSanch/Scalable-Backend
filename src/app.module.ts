import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './common/user/user.module';
import { ProductsModule } from './common/products/products.module';
import { DatabaseModule } from './database/database/database.module';
import { AuthModule } from './authentication/auth/auth.module';
import { MpesaModule } from './common/mpesa/mpesa/mpesa.module';
import { AirtelmoneyModule } from './common/airtelmoney/airtelmoney/airtelmoney.module';
import { StripeModule } from './common/stripe/stripe/stripe.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    UserModule,
    ProductsModule,
    DatabaseModule,
    AuthModule,
    MpesaModule,
    AirtelmoneyModule,
    StripeModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'template1',
      entities: ['src/**/**.entities{.ts, .js}'],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
