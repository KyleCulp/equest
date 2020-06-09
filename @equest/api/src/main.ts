import { NestFactory } from '@nestjs/core';
import '@equest/config';
import { AppModule } from './modules/app.module';
import { importEnv, isDev } from '@equest/config';
import { rlReplaysQueue } from './lib/queues';
import { UI, setQueues } from 'bull-board';
import { postgraphileMiddleware } from './middleware/postgraphile.middleware';
import { sessionMiddleware } from './middleware/session.middleware';
import { passportInitializeMiddleware, passportSessionMiddleware } from './middleware/passport.middleware';

if (isDev) {
  importEnv(process.cwd() + '/.env');
  importEnv(process.cwd() + '/secrets.env');
}

setQueues([rlReplaysQueue]);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableShutdownHooks();

  app.use(sessionMiddleware);
  app.use(passportInitializeMiddleware);
  app.use(passportSessionMiddleware);
  app.use(postgraphileMiddleware);

  app.use('/admin/queues', UI);

  // const options = new DocumentBuilder()
  //   .setTitle('Equest API')
  //   .setDescription('Business logic of equest.')
  //   .setVersion('1.0')
  //   .build();

  // const document = SwaggerModule.createDocument(app, options);
  // SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}

bootstrap();
