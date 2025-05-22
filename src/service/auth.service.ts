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
    const usuario = this.users.find(
      (user) => user.email === email && user.password === password,
    );
    if(usuario){
      return usuario;
    }
    else{
      return new Error('Cuenta no encontrada');
    }
  }

  update(email: string, user: User):User | Error {
    
    const userIndex = this.users.findIndex((user) => user.email === email);
    if (userIndex !== -1) {
      this.users[userIndex] = { ...this.users[userIndex], ...user };
      return this.users[userIndex];
    }
    else {
      return new Error('El usuario no existe');
    }
  }
  updateField(email: string, newProperty: Partial<User>):User | Error {
    
    const userIndex = this.users.findIndex((user) => user.email === email);
    if (userIndex !== -1) {
      this.users[userIndex] = { ...this.users[userIndex], ...newProperty };
      return this.users[userIndex];
    }
    else {
      return new Error('El usuario no existe');
    }
  }

  remove(email: string): User | Error {
    const userIndex = this.users.findIndex((user) => user.email === email);
    if (userIndex !== -1) {
      this.users.splice(userIndex, 1);
      return this.users[userIndex];
    }
    return new Error('El usuario no existe');
  }
}
