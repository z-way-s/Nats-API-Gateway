import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

// API Gateway

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.NATS,
    options: {
      servers: ['nats://localhost:4222'],
      retryAttempts: 5,
      retryDelay: 3000,
    },
  });
  await app.startAllMicroservices();
  await app.listen(3000);
  console.log(`App Gateway is running on: ${await app.getUrl()}`);
}
bootstrap();
