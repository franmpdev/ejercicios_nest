import { Entity, PrimaryColumn, Column } from 'typeorm';
@Entity('users')
export class User {
  @PrimaryColumn({unique: true})
  dni: string;
  @Column()
  name: string;
  @Column({ unique: true })
  email: string;
  @Column()
  password: string;

  constructor(dni: string, name: string, email: string, password: string) {
    this.dni = dni;
    this.name = name;
    this.email = email;
    this.password = password;
  }
}