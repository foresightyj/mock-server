import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post as HttpPost } from '@nestjs/common';
import { CreatePostModel, Post } from './posts.js';
import { PostsService } from './posts.service.js';
import { ok, fail, ApiResponse } from "../types.js";

@Controller('posts')
export class PostsController {
    // eslint-disable-next-line prettier/prettier
    constructor(private readonly postService: PostsService) { }

    @Get()
    async getPosts(): Promise<ApiResponse<Post[]>> {
        const res = await this.postService.getPosts();
        return ok(res);
    }

    @Get(':id')
    async getPost(@Param('id', ParseIntPipe) id: number): Promise<ApiResponse<Post>> {
        const post = await this.postService.getPost(id);
        // if (!post) throw new HttpException(`post with id ${id} cannot be found`, HttpStatus.NOT_FOUND);
        if (!post) return fail(new Error(`post with id ${id} not found`));
        return ok(post);
    }

    @HttpPost()
    async createPost(@Body() post: CreatePostModel): Promise<ApiResponse<Post>> {
        const res = await this.postService.createPost(post);
        return ok(res);
    }
}
