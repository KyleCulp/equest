import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { ConfigModule } from '@nestjs/config';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from '../lib/local.strategy';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { RocketLeagueModule } from './rocketleague.module';
import { AuthenticationService } from '../services/authentication.service';

@Module({
  imports: [
    TerminusModule,
    ConfigModule.forRoot({ isGlobal: true, envFilePath: [process.cwd() + '/.env', process.cwd() + '/secrets.env'] }),
    RocketLeagueModule,
    PassportModule,
  ],
  controllers: [AppController],
  providers: [AppService, LocalStrategy, AuthenticationService],
})
export class AppModule {}
// implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     // consumer.apply(LoggerMiddleware).forRoutes('cats');
//   }
// }
