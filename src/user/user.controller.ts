import { Body, Controller, Get } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getAllUsers(): Observable<string[]> {
    return this.userService.getAllUsers();
  }
}
