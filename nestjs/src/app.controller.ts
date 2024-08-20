import { Controller, Get, Query } from '@nestjs/common';
import { AppService, Venue } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getVenues(@Query('limit') limit: number): Promise<Venue[]> {
    return this.appService.getVenues(limit);
  }
}
