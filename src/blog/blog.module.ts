import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';

import { MongooseModule } from '@nestjs/mongoose';
import { Blog, BlogSchema } from '../schemas/blog.schema';

import { LoggerMiddleware } from './logger.middleware';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Blog.name, schema: BlogSchema }]),
  ],
  controllers: [BlogController],
  providers: [BlogService],
  exports: [],
})
export class BlogModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes(BlogController);
  }
}
