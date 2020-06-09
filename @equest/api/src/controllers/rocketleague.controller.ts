import { Controller, Get, Post, UseInterceptors, UploadedFiles } from '@nestjs/common';
import { RocketLeagueService } from '../services/rocketleague.service';
import { FilesInterceptor } from '@nestjs/platform-express';
import multer from 'multer';
import { rlReplaysQueue } from '../lib/queues';

@Controller('rocket-league')
export class RocketLeagueController {
  constructor(private readonly RocketLeagueService: RocketLeagueService) {}

  @Get()
  getHello(): string {
    return this.RocketLeagueService.getHello();
  }

  @Post('upload')
  @UseInterceptors(
    FilesInterceptor('replays', 100, {
      storage: multer.diskStorage({
        destination: process.env['API_RLREPLAY_FOLDER'],
        filename: function (req, file, cb) {
          // This sets the filename as the original name.
          // Multer kept cutting off `.replay`
          cb(null, file.originalname);
        },
      }),
    })
  )
  async uploadFiles(@UploadedFiles() files: Express.Multer.File[]) {
    return this.RocketLeagueService.uploadFiles(files);
  }
}
