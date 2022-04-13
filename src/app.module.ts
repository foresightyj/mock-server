import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { DbService } from './db/db.service.js';
import { PostsController } from './posts/posts.controller.js';
import { PostsService } from './posts/posts.service.js';
@Module({
  imports: [],
  controllers: [AppController, PostsController],
  providers: [AppService, PostsService, DbService],
})
export class AppModule { }
