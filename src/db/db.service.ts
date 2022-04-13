import { join } from 'path'
import { Low, JSONFile } from 'lowdb'
import { Injectable, Scope } from '@nestjs/common';
import { chain } from "lodash-es";
import { Post } from '../posts/posts.js';
import { randomSleep } from '../utils.js';

type DbSchema = {
    posts: Post[] // Expect posts to be an array of strings
}

const DEFAULT_POSTS: Post[] = [
    {
        id: 1,
        title: 'hi mac',
    },
    {
        id: 2,
        title: 'hi dona',
    },
];

//see lowdb doc: [lowdb - npm]( https://www.npmjs.com/package/lowdb )

@Injectable({ scope: Scope.DEFAULT })
export class DbService {
    public readonly db: Promise<Low<DbSchema>>
    constructor() {
        this.db = this.init();
    }

    async chain() {
        await randomSleep();
        return chain((await this.db).data);
    }

    private async init(): Promise<Low<DbSchema>> {
        const file = join(process.cwd(), 'db.json');
        const adapter = new JSONFile<DbSchema>(file);
        const db = new Low(adapter);
        await db.read()
        db.data ||= { posts: DEFAULT_POSTS }
        return db;
    }
    public async write() {
        await (await this.db).write();
    }
}
