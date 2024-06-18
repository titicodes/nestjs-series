import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Anietimfon Effiong',
      email: 'anietimfoneeffiong@gmail.com',
      role: 'ADMIN',
    },
    {
      id: 2,
      name: 'Edet Akpan',
      email: 'titidev@gmail.com',
      role: 'ENGINEER',
    },
    {
      id: 3,
      name: 'Titi Effiong',
      email: 'anietimfondev@gmail.com',
      role: 'INTERN',
    },
    {
      id: 4,
      name: 'Edet Ngozi',
      email: 'titidev@gmail.com',
      role: 'ENGINEER',
    },
    {
      id: 5,
      name: 'Udeme Edet',
      email: 'anietimfondev@gmail.com',
      role: 'INTERN',
    },
  ];

  findAll(role?: 'ADMIN' | 'ENGINEER' | 'INTERN') {
    if (role) {
      const roleArray = this.users.filter((user) => user.role === role);
      if (roleArray.length === 0)
        throw new NotFoundException('User Role Not Found');
      return roleArray;
    }
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);
    if (!user) throw new NotFoundException('User Not Found');
    return user;
  }

  create(createUserDto: CreateUserDto) {
    const userByHihestId = [...this.users.sort((a, b) => b.id - a.id)];
    const newUser = {
      id: userByHihestId[0].id + 1,
      // pread other users
      ...createUserDto,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, updatedUserDto: UpdateUserDto) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updatedUserDto };
      }
      return user;
    });
    return this.findOne(id);
  }

  delete(id: number) {
    const removedUser = this.findOne(id);
    this.users = this.users.filter((user) => user.id !== id);
    return removedUser;
  }
}
