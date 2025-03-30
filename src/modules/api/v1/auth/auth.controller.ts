import { Controller, Post, Request, Response } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request as IRequest, Response as IResponse } from 'express';
import { AuthError } from 'src/common/errors';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('')
  async login(@Request() req: IRequest, @Response() res: IResponse) {
    const { usr: username, pwd: password } = req.body;

    try {
      const info = await this.authService.login({ username, password });
      res.sendStatus(200).json(info);
    } catch (error) {
      res.sendStatus(error.code);
      if (error instanceof AuthError) {
        res.json({
          message: error.message,
        });
      }
    }
  }
}
