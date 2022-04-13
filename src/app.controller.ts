import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service.js';
import fs from "fs/promises";
import path from 'path';

@Controller('')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('')
  async index() {
    const html = await fs.readFile(path.join(process.cwd(), "./index.html"), { encoding: "utf-8" });
    return html;
  }
}
