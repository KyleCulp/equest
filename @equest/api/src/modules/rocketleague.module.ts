import { Module } from '@nestjs/common';

import { RocketLeagueController } from '../controllers/rocketleague.controller';
import { RocketLeagueService } from '../services/rocketleague.service';

@Module({
  controllers: [RocketLeagueController],
  providers: [RocketLeagueService],
})
export class RocketLeagueModule {}
