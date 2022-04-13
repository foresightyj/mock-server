import { Min, Length, } from 'class-validator';

export interface Post {
    id: number;
    title: string;
}

export class CreatePostModel {
    @Length(10, 100)
    title: string;
}