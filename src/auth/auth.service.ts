import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { AUTH_SERVICE } from 'src/app.constant';

@Injectable()
export class AuthService {
  constructor(@Inject(AUTH_SERVICE) private readonly authProxy: ClientProxy) {}

  login(login: string, password: string): Observable<any> {
    return this.authProxy.send(
      { cmd: 'auth.user' },
      {
        login: login,
        password: password,
      },
    );
  }
}
