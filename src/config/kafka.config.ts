import { NestApplicationContextOptions } from '@nestjs/common/interfaces/nest-application-context-options.interface';
import {
  ClientProviderOptions,
  KafkaOptions,
  Transport
} from '@nestjs/microservices';

export function KafkaConfig(): NestApplicationContextOptions & KafkaOptions {
  const groupId = process.env.KAFKA_CONSUMER_GROUP_ID_PREFIX + Math.random();

  return {
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: [process.env.KAFKA_CLIENT_BROKER],
      },
      consumer: {
        groupId,
      },
    },
  };
}

export function KafkaServiceConfig(
  name = 'KAFKA_SERVICE',
): ClientProviderOptions {
  return {
    name,
    ...KafkaConfig(),
  };
}
