import { Injectable } from '@nestjs/common';
import { BlogDto } from './dto/blog.dto';

@Injectable()
export class BlogService {
  blogs: BlogDto[];

  constructor() {
    this.blogs = [
      {
        id: 1,
        title: 'First Blog',
        excerpt: 'This is the first blog',
        description: 'This is the first blog description',
      },
      {
        id: 2,
        title: 'Second Blog',
        excerpt: 'This is the second blog',
        description: 'This is the second blog description',
      },
      {
        id: 3,
        title: 'Third Blog',
        excerpt: 'This is the third blog',
        description: 'This is the third blog description',
      },
    ];
  }

  async getAllBlogs() {
    return this.blogs;
  }

  async getById(id: string) {
    const blog = this.blogs.find(blog => blog.id === Number(id));
    if (!blog) {
      return 'Blog not found';
    }
    return blog;
  }

  async create(dto: Omit<BlogDto, 'id'>) {
    const data: BlogDto = {
      id: new Date().getTime(),
      ...dto,
    };

    return [...this.blogs, data];
  }

  async update(id: string, dto: BlogDto) {
    let currentBlog = this.blogs.find(blog => blog.id === Number(id));
    if (!currentBlog) {
      return 'Blog not found';
    }
    currentBlog = dto;
    return currentBlog;
  }

  async delete(id: string) {
    return this.blogs.filter(blog => blog.id !== Number(id));
  }
}
