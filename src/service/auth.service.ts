import { Injectable } from '@nestjs/common';
import { User } from 'src/model/User';


@Injectable()
export class AuthService {
  users: User[] = [
    {
      id: 'U001',
      name: 'franmp',
      email: 'franmorenopecofmp@gmail.com',
      password: '30092001',
      role: 'admin',
    }
  ];
  create(user: User): User | Error {
    const usuarioRepetido = this.users.find((u) => u.email === user.email);
    if (usuarioRepetido) {
      return new Error('El usuario ya existe');
    }
    this.users.push(user)
    return user;
  }

  findOne(email: string, password: string):User | Error {
    return this.users.find(
      (user) => user.email === email && user.password === password,
    );
  }

  update(email: string, user: User) {
    
    const userIndex = this.users.findIndex((user) => user.email === email);
    if (userIndex !== -1) {
      return this.users[userIndex] = { ...this.users[userIndex], ...user };
    }
    return this.users[userIndex];
  }
  updateField(email: string, newProperty: Partial<User>):User | Error {
    
    const userIndex = this.users.findIndex((user) => user.email === email);
    if (userIndex !== -1) {
      this.users[userIndex] = { ...this.users[userIndex], ...newProperty };
      return this.users[userIndex];
    }
  }

  remove(id: number) {
    return `This action removes a #id auth`+id;
  }
}
