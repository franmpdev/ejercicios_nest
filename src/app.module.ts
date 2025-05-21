import { Module } from '@nestjs/common';
import { CuentasController } from './controller/cuentas.controller';
import { CuentasService } from './services/cuentas.service';

@Module({
  imports: [],
  controllers: [CuentasController],
  providers: [CuentasService],
})
export class AppModule {}
