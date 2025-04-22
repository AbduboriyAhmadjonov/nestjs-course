import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api'); // Set global prefix for all routes: localhost:3000/api
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
