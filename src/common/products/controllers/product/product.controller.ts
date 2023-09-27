import { Controller, Get, Param, Post, Req, Res } from '@nestjs/common';
import { ProductService } from '../../services/product/product.service';

@Controller('product')
export class ProductController {
    
    constructor(private productService: ProductService){}

    @Get()
    GetProducts() {
        return this.productService;
    }
    @Post()
    AddProduct(@Req() req: Request, @Res() res: Response) {
        this.productService.addProduct();
        // return json data with default status code
        return res.json();
        // to update the status code
        //return res.status(205).json({ id: req.body.id})
    }
    @Get(':id')
    GetProductById(@Param() param: any) {
        return this.productService.getProductById();
    }

    @Get(':name')
    GetProductByName(@Param() param: any){
        return this.productService;
    }
}
