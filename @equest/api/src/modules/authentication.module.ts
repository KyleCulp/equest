import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import constants from '../constants'
import { AuthenticationService } from '../services/authentication.service';
import { LocalStrategy } from '../lib/local.strategy';
import { RocketLeagueModule } from '../modules/rocketleague.module';
import { HTTPBearerStrategy } from '../lib/httpbearer.strategy';

@Module({
  imports: [
    RocketLeagueModule,
    PassportModule,
    HTTPBearerStrategy
  ],
  providers: [AuthenticationService, LocalStrategy],
})
export class AuthenticationModule {}