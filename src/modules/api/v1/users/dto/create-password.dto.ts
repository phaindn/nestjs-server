import { MinLength } from 'class-validator';

export class CreatePasswordDto {
  @MinLength(8)
  password: string;
}
