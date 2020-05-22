import { NestFactory } from '@nestjs/core';

import { AppModule } from './modules/app.module';
import { UI } from 'bull-board';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api');
  app.enableShutdownHooks();

  // const options = new DocumentBuilder()
  //   .setTitle('Equest API')
  //   .setDescription('Business logic of equest.')
  //   .setVersion('1.0')
  //   .build();

  // const document = SwaggerModule.createDocument(app, options);
  // SwaggerModule.setup('api', app, document);

  await app.listen(3000);

  // if (module.hot) {
  //   module.hot.accept();
  //   module.hot.dispose(() => app.close());
  // }
}

bootstrap();
