import { Router } from 'express';
import * as C from '../controller';

const router = Router();

// ROUTES USER
// cria usuário
router.post('/users', C.createUser.handle);
// routa de login de usuario
router.post('/login', C.signInUser.handle);
// lita todos os usuarios
router.get('/users', C.findAllUsers.handle);
// pega usuario pelo id
router.get('/users/:id', C.findUser.handle);
// atualiza usuário
router.put('/users/:id', C.updateUser.handle);
// ----------------------------------------------------------------
// ROUTES PET
// cria pet
router.post('/users/:userId/pets', C.createPet.handle);
// pega pet pelo ID do usuario
router.get('/users/:userId/pets', C.findAllPets.handle);
// pega pet baseado uuid do pet cadastrado no usuario
router.get('/users/:userId/pet/:petId', C.findPet.handle);
//atualiza o pet pelo ID
router.put('/pets/:id', C.updatePet.handle);
// create vacina pet
router.post('/pets/:petid/vaccines', C.createVaccine.handle)
// create consult pet
router.post('/pets/:petid/consults', C.createConsult.handle)
// create prescription pet
router.post('/pets/:petid/prescriptions', C.createPrescription.handle)
// List vacina pet
router.get('/pets/:id/vaccines', C.listVaccines.handle)
// List consult pet
router.get('/pets/:id/consults', C.listConsults.handle)
// List prescription pet
router.get('/pets/:id/prescriptions', C.listPrescriptions.handle)


//-----------------------------------------------------------------
// ROUTE DEFAULT TESTE
router.get('/', (req, res) => {
  return res.json({
    message: 'falta apenas inic',
  });
});

router.all('*', (req, res) => {
  res.status(404).send('<h1>404! Page not found</h1>');
});

export { router };
