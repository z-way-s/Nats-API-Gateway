import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { USER_SERVICE } from 'src/app.constant';
@Injectable()
export class UserService {
  constructor(@Inject(USER_SERVICE) private readonly userProxy: ClientProxy) {}

  getAllUsers(): Observable<string[]> {
    return this.userProxy.send({ cmd: 'user.getAll' }, {});
  }
}
