import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User, Settings } from 'my-account-shared-orm-library';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    // Configure ConfigModule to load environment variables
    ConfigModule.forRoot({
      isGlobal: true, // Make config available throughout the app
    }),
    // Configure TypeORM with async factory
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST', 'localhost'),
        port: configService.get<number>('DB_PORT', 5432),
        username: configService.get('DB_USERNAME', 'postgres'),
        password: configService.get('DB_PASSWORD', 'postgres'),
        database: configService.get('DB_DATABASE', 'my-account'),
        entities: [User, Settings], // Use entities from our shared library
        synchronize: false, // Don't auto-create tables in production
      }),
    }),
    // Import our custom modules
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
