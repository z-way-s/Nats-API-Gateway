import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAllUsers(): Observable<string[]> {
    return this.userService.getAllUsers();
  }
  @Post()
  createUser(@Body() user: CreateUserDto): Observable<any> {
    return this.userService.createUser(user);
  }

  @Patch(':id')
  updateUser(
    @Param('id') id: string,
    @Body() user: UpdateUserDto,
  ): Observable<any> {
    return this.userService.updateUser(id, user);
  }
}
