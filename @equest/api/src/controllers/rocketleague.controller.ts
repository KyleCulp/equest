import { Controller, Get, Post, UseInterceptors, UploadedFiles, UseGuards } from '@nestjs/common';
import { RocketLeagueService } from '../services/rocketleague.service';
import { FilesInterceptor } from '@nestjs/platform-express';
import multer from 'multer';
import { rlReplaysQueue } from '../lib/queues';
import { HttpBearerGuard } from '../passport/httpbearer.guard';

@Controller('rocket-league')
export class RocketLeagueController {
  constructor(private readonly RocketLeagueService: RocketLeagueService) {}

  @Get()
  getHello(): string {
    return this.RocketLeagueService.getHello();
  }

  @Post('upload')
  // @UseGuards(HttpBearerGuard)
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
