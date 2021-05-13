import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule } from '@nestjs/microservices';
import { KafkaServiceConfig } from './config/kafka.config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ClientsModule.register([KafkaServiceConfig()]),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
