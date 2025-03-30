import { IsNumber } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class CreateStaffDto extends CreateUserDto {
  @IsNumber()
  role: number;
}
