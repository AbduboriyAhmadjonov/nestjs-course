import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';

import { LoggerMiddleware } from './logger.middleware';

@Module({
  controllers: [BlogController],
  providers: [BlogService],
  exports: [],
  imports: [],
})
export class BlogModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(BlogController);
  }
}
