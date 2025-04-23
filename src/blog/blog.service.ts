import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Blog } from '../schemas/blog.schema';
import { BlogDto } from './dto/blog.dto';

@Injectable()
export class BlogService {
  constructor(@InjectModel(Blog.name) private blogModel: Model<Blog>) {}

  async getAllBlogs() {
    return this.blogModel.find().exec();
  }

  async getById(id: string) {
    const currentBlog = this.blogModel.findById(id).exec();
    if (!currentBlog) {
      return 'Blog not found';
    }
    return currentBlog;
  }

  async create(dto: BlogDto) {
    const createdBlog = new this.blogModel(dto);
    return createdBlog.save();
  }

  async update(id: string, dto: BlogDto) {
    return this.blogModel.findByIdAndUpdate(id, dto, { new: true }).exec();
  }

  async delete(id: string) {
    return this.blogModel.findByIdAndDelete(id).exec();
  }
}
