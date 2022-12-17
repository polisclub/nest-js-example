import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Testing1234 } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Testing1234])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
