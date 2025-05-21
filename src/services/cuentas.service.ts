import { Injectable } from '@nestjs/common';
import { Cuenta } from 'src/model/Cuenta';

@Injectable()
export class CuentasService {
  private cuentas: Cuenta[] = [];
  constructor() {
    this.cuentas = [
      {
        numeroCuenta: '1111111111',
        saldo: 3000,
        titular: 'Juan Perez',
        tipo: 'Ahorros',
      },
      {
        numeroCuenta: '2222222222', 
        saldo: 5000,
        titular: 'Maria Lopez',
        tipo: 'Corriente',
      },
      {
        numeroCuenta: '3333333333',
        saldo: 10000,
        titular: 'Carlos Sanchez',
        tipo: 'Ahorros',
      }
    ];
  }

  findAll() :Cuenta[] {
    return this.cuentas;
  }
  findOne(id: string):Cuenta { 
    return this.cuentas.filter(c => c.numeroCuenta === id)[0];
  }
  create(cuenta: Cuenta):Cuenta[] | Error {
    if(this.cuentas.filter(c => c.numeroCuenta === cuenta.numeroCuenta).length > 0) {
      return new Error('La cuenta ya existe');
    }
    else{
      this.cuentas.push(cuenta);
      return this.cuentas;
    }
     
  }
  update(numeroCuenta: string, cuenta: Cuenta) :Cuenta | Error {
    let encontrado = false;
    for(let i = 0; i < this.cuentas.length; i++) {
      if(this.cuentas[i].numeroCuenta === numeroCuenta) {
        this.cuentas[i] = cuenta;
        encontrado = true;
        return this.cuentas[i];
      }
    }
    if(!encontrado) {
      return new Error('La cuenta no existe');
    }
  }
  updateField(numeroCuenta: string, updateCuentasDto: Partial<Cuenta>) :Cuenta | Error {
    let encontrado = false;
    for(let i = 0; i < this.cuentas.length; i++) {
      if(this.cuentas[i].numeroCuenta === numeroCuenta) {
        this.cuentas[i] = { ...this.cuentas[i], ...updateCuentasDto };
        encontrado = true;
        return this.cuentas[i];
      }
    }
    if(!encontrado) {
      return new Error('La cuenta no existe');
    }
  }

  remove(numeroCuenta: string) :Cuenta | Error {
    let encontrado = false;
    for(let i = 0; i < this.cuentas.length; i++) {
      if(this.cuentas[i].numeroCuenta === numeroCuenta) {
        this.cuentas.splice(i, 1);
        encontrado = true;
        return this.cuentas[i];
      }
    }
    if(!encontrado) {  
      return new Error('La cuenta no existe');
    }
  }


/*
  




*/
}
