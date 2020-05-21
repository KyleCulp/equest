import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';

import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { RocketLeagueModule } from './rocketleague.module';

@Module({
  imports: [TerminusModule, RocketLeagueModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
// implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     // consumer.apply(LoggerMiddleware).forRoutes('cats');
//   }
// }
