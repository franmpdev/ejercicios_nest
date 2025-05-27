import { Module } from '@nestjs/common';
import { CuentasController } from './controller/cuentas.controller';
import { CuentasService } from './service/cuentas.service';
import { AuthController } from './controller/auth.controller';
import { AuthService } from './service/auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './model/User';

@Module({
  imports: [
      TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'franmp',
        password: '30092001',
        database: 'db_peluqueria',
        entities: [User],
        synchronize: true,
    }),
    TypeOrmModule.forFeature([User,]),
    
  ],
  controllers: [CuentasController, AuthController],
  providers: [CuentasService, AuthService],
})
export class AppModule {}
