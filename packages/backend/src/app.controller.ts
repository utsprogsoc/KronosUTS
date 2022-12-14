import {
  CacheInterceptor,
  Controller,
  Get,
  UseInterceptors,
} from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { AppService } from './app.service';

@UseInterceptors(CacheInterceptor)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOkResponse({ type: String })
  getHello(): string {
    return this.appService.getHello();
  }
}
