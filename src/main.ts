import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Enable CORS for the frontend
  app.enableCors({
    origin: true, // Allow all origins, can be restricted to specific domains
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });
  // Get port from environment variables or use 3000 as default
  const port = process.env.PORT || 3000;
  console.log(port, 'port');
  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}`);
}
bootstrap();
