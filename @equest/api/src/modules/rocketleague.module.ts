import { Module } from '@nestjs/common';
import { MulterExtendedModule } from 'nestjs-multer-extended';
import { RocketLeagueController } from '../controllers/rocketleague.controller';
import { RocketLeagueService } from '../services/rocketleague.service';

@Module({
  imports: [],
  controllers: [RocketLeagueController],
  providers: [RocketLeagueService],
})
export class RocketLeagueModule {}
