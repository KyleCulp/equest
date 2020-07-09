import { Module } from '@nestjs/common';
import { MulterExtendedModule } from 'nestjs-multer-extended';
import { RocketLeagueController } from '../controllers/rocketleague.controller';
import { RocketLeagueService } from '../services/rocketleague.service';
import { PassportModule } from '@nestjs/passport';
import { AuthenticationService } from '../services/authentication.service';

@Module({
  imports: [PassportModule],
  controllers: [RocketLeagueController],
  providers: [RocketLeagueService, AuthenticationService],
})
export class RocketLeagueModule {}
