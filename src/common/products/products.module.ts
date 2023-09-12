import { Module } from '@nestjs/common';
import { ProductController } from './controllers/product/product.controller';

@Module({
    providers: [],
    controllers: [ProductController],
    exports: []
})
export class ProductsModule {}
