import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Res
} from '@nestjs/common';
import { CuentasService } from 'src/services/cuentas.service';
import { Cuenta } from 'src/model/Cuenta';
import { Response } from 'express';


@Controller('cuentas')
export class CuentasController {
  constructor(private cuentaService : CuentasService) {}


  @Get()
  findAll() :Cuenta[] {
    return this.cuentaService.findAll();	
  }
  @Get(':id')
  findOne(@Param('id') id: string, @Res() res: Response):any {
    const cuenta = this.cuentaService.findOne(id);
    if(cuenta){
      return res.status(200).json(cuenta);
    }
    else{
      return res.status(499).json(
      {
        message: 'Cuenta no encontrada'
      });
    }
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
