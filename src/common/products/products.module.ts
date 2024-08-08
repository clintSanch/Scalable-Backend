import { Module } from '@nestjs/common';
import { ProductController } from './controllers/product/product.controller';
import { ProductService } from './services/product/product.service';
import { DatabaseModule } from 'src/database/database/database.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [DatabaseModule, TypeOrmModule],
  providers: [ProductService],
  controllers: [ProductController],
  exports: [ProductService],
})
export class ProductsModule {}
