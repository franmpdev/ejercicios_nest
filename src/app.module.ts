import { Module } from '@nestjs/common';
import { CuentasController } from './controller/cuentas.controller';
import { CuentasService } from './service/cuentas.service';
import { AuthController } from './controller/auth.controller';
import { AuthService } from './service/auth.service';

@Module({
  imports: [],
  controllers: [CuentasController, AuthController],
  providers: [CuentasService, AuthService],
})
export class AppModule {}
