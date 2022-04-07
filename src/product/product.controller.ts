import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { PRODUCT_SERVICE } from 'src/app.constant';
import { CreateProductDto } from './create-product.dto';
import { EditProductDto } from './edit-product.dto';

@Controller('product')
export class ProductController {
  constructor(
    @Inject(PRODUCT_SERVICE) private readonly productProxy: ClientProxy,
  ) {}

  @Post()
  createProduct(@Body() data: CreateProductDto): Observable<any> {
    return this.productProxy.send({ cmd: 'product.create' }, { data });
  }
  @Get()
  getProducts(): Observable<any> {
    return this.productProxy.send({ cmd: 'product.getAll' }, {});
  }
  @Get(':id')
  getProduct(@Param('id') id: string): Observable<any> {
    console.log(id);
    return this.productProxy.send({ cmd: 'product.get' }, { id });
  }
  @Patch(':id')
  updateProduct(
    @Param('id') id: string,
    @Body() data: EditProductDto,
  ): Observable<any> {
    return this.productProxy.send({ cmd: 'product.update' }, { id, data });
  }

  @Get('type/:type')
  getProductsByType(
    @Param('type') type: string,
    @Body() data: { value: string },
  ): Observable<any> {
    return this.productProxy.send(
      { cmd: 'product.getByType' },
      { type, value: data.value },
    );
  }

  @Get('range/:type')
  getProductsByRange(
    @Param('type') type: string,
    @Body() data: { min?: string; max?: string },
  ): Observable<any> {
    console.log(type, data);
    return this.productProxy.send(
      { cmd: 'product.getByRange' },
      { type, min: data?.min, max: data?.max },
    );
  }
}
