import { RedisStore as IRedisStore } from 'connect-redis';
import session = require('express-session');
import { Application } from 'express';
import { Redis } from 'ioredis';
import { redisInstance } from '@equest/utils';
const RedisStore = require('connect-redis')(session);

const { REDIS_SESSION_DB } = process.env;

const redisClient = redisInstance(parseInt(REDIS_SESSION_DB!));
const sessionStore: IRedisStore = new RedisStore({
  client: redisClient,
});

export const sessionMiddleware = session({
  name: 'equestsid',
  rolling: false,
  saveUninitialized: false,
  resave: false,
  cookie: {
    maxAge: 10000000,
    sameSite: true,
    httpOnly: true,
  },
  store: sessionStore,
  secret: process.env.JWT_SECRET!,
});
