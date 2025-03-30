import { IsNumber } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class CreateTeacherDto extends CreateUserDto {
  @IsNumber()
  subject: number;
}
