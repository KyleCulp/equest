import { redisInstance } from '@equest/utils';
import { Controller, Get, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Queue } from 'bullmq';

import { RocketLeagueService } from '../services/rocketleague.service';

const queue = new Queue('rocket_league_replays', {
  connection: redisInstance(parseInt(process.env['REDIS_RL_DB']!)),
});

@Controller('rocket-league')
export class RocketLeagueController {
  constructor(private readonly RocketLeagueService: RocketLeagueService) {}

  @Get()
  getHello(): string {
    return this.RocketLeagueService.getXD();
  }

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('replay', {
      dest: 'replays', // context: base of nest app
    })
  )
  async uploadFile(@UploadedFile() file: any) {
    // await queue.add('parse', { replay: file['f']})
    console.log(file);
    await queue.add('parse', { replay: file['originalname'] });
  }
}
