import { Strategy } from 'passport-http-bearer';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class HTTPBearerStrategy extends PassportStrategy(Strategy, 'httpbearer') {
  constructor(private authenticationService: AuthenticationService) {
    super();
  }

  async validate(token: string): Promise<any> {
   this.authenticationService.validateBearerToken(token);
  }
}
