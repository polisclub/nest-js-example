/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Testing1234 } from './user/entities/user.entity';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: '',
      password: '',
      database: '',
      entities: [Testing1234],
      synchronize: true,
      logging: true,
      subscribers: [],
      migrations: [],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
