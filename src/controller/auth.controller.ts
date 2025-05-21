import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Put,
  Res,
  Post,
} from '@nestjs/common';
//IMPORTANTE IMPORTAR RESPONSE
import { Response } from 'express';
import { AuthService } from '../service/auth.service';
import { User } from 'src/model/User';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('create')
    create(@Body() user: User, @Res() res: Response):Response{
        const respuesta = this.authService.create(user);
        if(respuesta instanceof Error){
          return res.status(499).json(
            {
              message: 'El usuario ya existe',
            });
        }
        else{
          return res.status(201).json(
            {
              message: 'Usuario creado',
              user: respuesta,
            });
        }
    }

  @Get(':email,:password')
    findOne(@Param('email') email: string, @Param('password') password: string, @Res() res: Response):Response {
      const user = this.authService.findOne(email, password);
      if(user){
        return res.status(200).json(user);
      }
      else{
        return res.status(499).json(
        {
          message: 'Cuenta no encontrada'
        });
    }
    }
  @Put('update/:email')
  update(@Param('email') email: string, @Body() user: User, @Res() res: Response): Response {
    const usuario: User = this.authService.update(email, user);
    if (usuario) {
      return res.status(200).json({
        message: 'Usuario actualizado',
        user: usuario,
      });
    } else {
      return res.status(404).json({
        message: 'Usuario no encontrado',
      });
    }
  }

  @Patch('updateField/:email')
    updateField(@Param('email') email: string, @Body() newProperty:Partial<User>){
      return this.authService.updateField(email, newProperty);
    }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
}
