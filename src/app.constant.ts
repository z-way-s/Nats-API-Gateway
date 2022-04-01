import { genSalt } from 'bcrypt';

export const USER_SERVICE = 'USER_SERVICE';
export const AUTH_SERVICE = 'AUTH_SERVICE';

export const jwtConstants = {
  secret: 'secretKey',
};
export const rounds = 10;
export const salt = genSalt(rounds);
