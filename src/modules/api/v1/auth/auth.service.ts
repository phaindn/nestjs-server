import { Injectable, Logger } from '@nestjs/common';
import { AuthError } from 'src/common/errors';

@Injectable()
export class AuthService {
  // constructor() {}

  async login(payload: { username: string; password: string }) {
    Logger.log(`[Auth] Attempting ${JSON.stringify(payload)}`);
    throw new AuthError('Username or password is incorrect');
    // return {
    //   access_token: this.jwtService.sign(payload),
    // };
  }
}
