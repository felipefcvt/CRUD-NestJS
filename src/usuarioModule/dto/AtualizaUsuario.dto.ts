import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';
import { EmailEhUnico } from '../validacao/email-eh-unico.validador';

export class AtualizaUsuarioDTO {
  @IsNotEmpty({ message: 'O campo NOME não pode ser vazio' })
  @IsOptional()
  nome: string;

  @IsEmail(undefined, { message: 'E-mail inválido!' })
  @EmailEhUnico({ message: 'Já existe um usuário com este email' })
  @IsOptional()
  email: string;

  @MinLength(6, { message: 'O valor minímo é de 6 caracteres' })
  @IsOptional()
  senha: string;
}
