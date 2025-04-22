import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { BlogService } from './blog.service';
import { BlogDto } from './dto/blog.dto';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @HttpCode(200)
  @Get('/all')
  async getAll() {
    return this.blogService.getAllBlogs();
  }

  @HttpCode(200)
  @Get('/:id')
  async getById(@Param('id') id: string) {
    return this.blogService.getById(id);
  }

  @HttpCode(201)
  @Post('/create')
  async create(dto: Omit<BlogDto, 'id'>) {
    return this.blogService.create(dto);
  }

  @HttpCode(200)
  @Patch('/update/:id')
  async updateById(@Param('id') id: string, @Body() dto: BlogDto) {
    return this.blogService.update(id, dto);
  }

  @HttpCode(200)
  @Delete('/delete/:id')
  async deleteById(@Param('id') id: string) {
    return this.blogService.delete(id);
  }
}
