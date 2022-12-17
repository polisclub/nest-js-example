/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Testing1234 } from './entities/user.entity';
import { Repository } from 'typeorm/repository/Repository';

@Injectable()
export class UserService {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(
    @InjectRepository(Testing1234)
    private readonly testing: Repository<Testing1234>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = await this.testing.save(createUserDto);

    return user;
  }

  async findAll(): Promise<Testing1234[]> {
    const allUsers = this.testing.find();

    return allUsers;
  }

  async findOne(id: number) {
    return this.testing.findOne({ where: { id: id } });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
