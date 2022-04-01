import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { USER_SERVICE } from '../app.constant';
import { UserController } from './user.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: USER_SERVICE,
        transport: Transport.NATS,
        options: {
          servers: ['nats://localhost:4222'],
        },
      },
    ]),
  ],
  providers: [],
  controllers: [UserController],
})
export class UserModule {}
