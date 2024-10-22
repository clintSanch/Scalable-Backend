import { Injectable } from '@nestjs/common';
import { FoodItem } from '../../food-item/food-item.interface';
import { ProductDbService } from 'src/database/database/db/product-db/product-db.service';

@Injectable()
export class ProductService {
  constructor(private readonly productData: ProductDbService) {}

  private readonly food_related_items: FoodItem[] = [];

  async addProduct() {
    this.food_related_items.push({ name: '', quantity: 3, quality: '' });
  }

  async getProductById() {}

  async getProducts() {
    const products = this.food_related_items.map((x) => [
      x.name,
      x.quality,
      x.quantity,
    ]);
    return products;
  }
}
