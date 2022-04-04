import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { PRODUCT_SERVICE } from 'src/app.constant';
import { CreateProductDto } from './create-product.dto';

@Controller('product')
export class ProductController {
  constructor(
    @Inject(PRODUCT_SERVICE) private readonly productProxy: ClientProxy,
  ) {}

  @Post()
  createProduct(@Body() data: CreateProductDto): Observable<any> {
    return this.productProxy.send({ cmd: 'product.create' }, { data });
  }
}
