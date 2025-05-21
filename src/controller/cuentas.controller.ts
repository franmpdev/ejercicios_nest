import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put
} from '@nestjs/common';
import { CuentasService } from 'src/services/cuentas.service';
import { Cuenta } from 'src/model/Cuenta';


@Controller('cuentas')
export class CuentasController {
  constructor(private cuentaService : CuentasService) {}


  @Get()
  findAll() :Cuenta[] {
    return this.cuentaService.findAll();	
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cuentaService.findOne(id);
  }
  @Post('create')
  create(@Body() cuenta: Cuenta):Cuenta[] | Error {
    return this.cuentaService.create(cuenta);
  }
  @Put('actualizar/:id')
  update(@Param('id') id: string, @Body() cuenta: Cuenta) {
    return this.cuentaService.update(id, cuenta);
  }
  @Patch('editarCampo/:id')
  updateField(@Param('id') id: string, @Body() updateCuentasDto: Partial<Cuenta>) {
    return this.cuentaService.updateField(id, updateCuentasDto);
  }
  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.cuentaService.remove(id);
  } 

/*







*/
}
