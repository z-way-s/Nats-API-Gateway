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
import { USER_SERVICE } from 'src/app.constant';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(@Inject(USER_SERVICE) private readonly userProxy: ClientProxy) {}

  @Get()
  getAllUsers(): Observable<string[]> {
    return this.userProxy.send({ cmd: 'user.getAll' }, {});
  }
  @Post()
  createUser(@Body() user: CreateUserDto): Observable<any> {
    return this.userProxy.send({ cmd: 'user.create' }, user);
  }

  @Patch(':id')
  updateUser(
    @Param('id') id: string,
    @Body() user: UpdateUserDto,
  ): Observable<any> {
    return this.userProxy.send({ cmd: 'user.update' }, { id: id, user: user });
  }
}
