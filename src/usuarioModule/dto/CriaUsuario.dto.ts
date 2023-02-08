import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { EmailEhUnico } from '../validacao/email-eh-unico.validador';

export class CriaUsuarioDTO {
  @IsNotEmpty({ message: 'O campo NOME não pode ser vazio' })
  nome: string;

  @IsEmail(undefined, { message: 'E-mail inválido!' })
  @EmailEhUnico({ message: 'Já existe um usuário com este email' })
  email: string;

  @MinLength(6, { message: 'O valor minímo é de 6 caracteres' })
  senha: string;
}
