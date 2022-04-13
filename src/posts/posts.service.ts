import assert from "assert";
import { Injectable } from '@nestjs/common';
import { DbService } from '../db/db.service.js';
import { CreatePostModel, Post } from './posts.js';

@Injectable()
export class PostsService {
    constructor(private db: DbService) { }

    async getPosts(): Promise<Post[]> {
        const chain = await this.db.chain();
        return chain.get("posts").value();
    }

    async getPost(id: number): Promise<Post | undefined> {
        assert(typeof id === "number", "id falsy");
        assert(id > 0, "id must be positive");
        const chain = await this.db.chain()
        return chain.get("posts").find({ id }).value();
    }

    async createPost(post: CreatePostModel): Promise<Post> {
        const chain = await this.db.chain();
        const maxId = chain.get("posts").map(p => p.id).max().value();
        const newId = (maxId ?? 0) + 1;
        const newPost: Post = {
            ...post,
            id: newId,
        }
        chain.get("posts").push(newPost).value();
        await this.db.write();
        return newPost;
    }
}
