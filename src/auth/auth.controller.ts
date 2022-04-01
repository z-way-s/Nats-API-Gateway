import { Body, Controller, Inject, Post } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { AUTH_SERVICE } from 'src/app.constant';
import { Public } from './public.decorator';
interface Login {
  login: string;
  password: string;
}
@Controller('auth')
export class AuthController {
  constructor(@Inject(AUTH_SERVICE) private readonly authProxy: ClientProxy) {}

  @Public()
  @Post('login')
  login(@Body() user: Login): Observable<any> {
    return this.authProxy.send(
      { cmd: 'auth.user' },
      {
        login: user.login,
        password: user.password,
      },
    );
  }
}
