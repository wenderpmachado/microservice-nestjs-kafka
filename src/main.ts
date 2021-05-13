import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { KafkaConfig } from './config/kafka.config';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    KafkaConfig(),
  );
  app.listen(() => console.log('Microservice is listening'));
}
bootstrap();
