import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { AUTH_SERVICE, USER_SERVICE } from 'src/app.constant';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(@Inject(USER_SERVICE) private readonly userProxy: ClientProxy) {}

  getAllUsers(): Observable<string[]> {
    return this.userProxy.send({ cmd: 'user.getAll' }, {});
  }
  createUser(user: CreateUserDto): Observable<any> {
    return this.userProxy.send({ cmd: 'user.create' }, user);
  }
  updateUser(id: string, user: UpdateUserDto): Observable<any> {
    return this.userProxy.send({ cmd: 'user.update' }, { id: id, user: user });
  }
}
