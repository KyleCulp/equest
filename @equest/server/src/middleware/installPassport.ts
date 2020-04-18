import { Application, Request, Response } from 'express';
import passport from 'passport';
import { Pool } from 'pg';

async function getUserByIdentifier(
  pgMasterAdminPool: Pool,
  identifier: string
) {
  const {
    rows: [user],
  } = await pgMasterAdminPool.query(
    `
    select user_account.* from app_public.user_account
      where user_account.user_id = $1
		`,
    [identifier]
  );

  if (!user) return false; // This MUST be 'false', not 'null', due to how Passport works

  return user;
}

export const installPassport = async (app: Application) => {
  const pgMasterAdminPool: Pool = app.get('pgMasterAdminPool');

  passport.serializeUser<any, any>((user, done) => {
    done(null, user['user_id']);
  });

  passport.deserializeUser((identifier: string, done) => {
    getUserByIdentifier(pgMasterAdminPool, identifier).then(
      (user) => done(null, user),
      (e) => done(e)
    );
  });

  const passportInitializeMiddleware = passport.initialize();
  app.use(passportInitializeMiddleware);
  app.get('websocketMiddlewares').push(passportInitializeMiddleware);

  const passportSessionMiddleware = passport.session();
  app.use(passportSessionMiddleware);
  app.get('websocketMiddlewares').push(passportSessionMiddleware);

  app.get('/logout', (req: Request, res: Response) => {
    req.logout();
    res.redirect('/');
  });
};

export const getUserClaimsFromRequest = async (req: Request) => ({
  ...(req['user'] ? { ['user_id']: req['user']['user_id'] } : null),
});
