import {
  IsDateString,
  IsEmail,
  IsNumber,
  IsString,
  Max,
  Min,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsDateString()
  dob: Date;

  @IsString()
  @MinLength(10)
  phone: string;

  @IsNumber()
  @Max(2)
  @Min(0)
  gender: number;

  @IsString()
  @MinLength(8)
  address: string;
}
