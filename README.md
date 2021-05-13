<p align="center">
  NestJS + Kafka
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">An example of integration between <b>NestJS</b> and <b>Kafka</b></p>

## Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- [Docker](https://www.docker.com/products/docker-desktop)

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ docker-compose -f "docker-compose.yml" up -d --build

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

Nest is [MIT licensed](LICENSE).
