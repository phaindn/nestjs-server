import { Controller, Get, Req, Response, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from 'src/common/guards/jwt-auth.guard';
import { AuthError } from 'src/common/errors';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get('info')
  async getUserInfo(@Req() req: Request) {
    const userId = req?.['user']?.['id'];

    if (!userId) {
      throw new AuthError('Authentication required');
    }

    const user = await this.userService.getOne(userId);

    if (!user) {
      throw new AuthError('User not found');
    }

    return user;
  }
}
