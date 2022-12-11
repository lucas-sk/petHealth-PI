import { Router } from 'express';
import * as C from '../controller';

const routerAuth = Router();

// routa de login de usuario
routerAuth.post('/login', C.signInUser.handle);

routerAuth.get('/', (req, res) => {
  return res.json({
    message: 'falta apenas inic',
  });
});


// routa de login de usuario
routerAuth.post('/login', C.signInUser.handle);


routerAuth.all('*', (req, res) => {
  res.status(404).send('<h1>404! Page not found</h1>');
});

export { routerAuth };
