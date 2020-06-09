import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { ConfigModule } from '@nestjs/config';

import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { RocketLeagueModule } from './rocketleague.module';

@Module({
  imports: [
    TerminusModule,
    ConfigModule.forRoot({ isGlobal: true, envFilePath: [process.cwd() + '/.env', process.cwd() + '/secrets.env'] }),
    RocketLeagueModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
// implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     // consumer.apply(LoggerMiddleware).forRoutes('cats');
//   }
// }
