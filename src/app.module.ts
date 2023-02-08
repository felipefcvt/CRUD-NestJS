import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuarioModule/usuario.module';

@Module({
  imports: [UsuarioModule],
})
export class AppModule {}
