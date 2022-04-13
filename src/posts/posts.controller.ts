import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post as HttpPost } from '@nestjs/common';
import { CreatePostModel, Post } from './posts.js';
import { PostsService } from './posts.service.js';

@Controller('posts')
export class PostsController {
    // eslint-disable-next-line prettier/prettier
    constructor(private readonly postService: PostsService) { }

    @Get()
    async getPosts(): Promise<Post[]> {
        return await this.postService.getPosts();
    }

    @Get(':id')
    async getPost(@Param('id', ParseIntPipe) id: number) {
        const post = await this.postService.getPost(id);
        if (!post) throw new HttpException(`post with id ${id} cannot be found`, HttpStatus.NOT_FOUND);
    }

    @HttpPost()
    async createPost(@Body() post: CreatePostModel): Promise<Post> {
        return await this.postService.createPost(post);
    }
}
