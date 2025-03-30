import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersRepository extends Repository<User> {
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const user = this.create(createUserDto) as User;
    return this.save<User>(user);
  }

  async getAllUsers(): Promise<User[]> {
    return this.find();
  }

  async getUserById(id: number): Promise<User> {
    return this.findOneBy({ id });
  }

  async updateUser(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    await this.update(id, updateUserDto);
    return this.findOneBy({ id });
  }

  async deleteUser(id: number): Promise<void> {
    await this.delete(id);
  }
}
