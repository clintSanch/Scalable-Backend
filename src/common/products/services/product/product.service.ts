import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/database/database/productEntity/product.entity';

@Injectable()
export class ProductService {
  constructor() {}

  async addProduct() {}

  async getProductById() {}
}
