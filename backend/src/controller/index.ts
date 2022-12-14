import { CreateConsultController } from './CreateConsultController';
import { CreatePetController } from './CreatePetController';
import { CreatePrescriptionController } from './CreatePrescriptionController';
import { CreateUserController } from './CreateUserController';
import { CreateVaccineController } from './CreateVaccineController';
import { FindAllPetsController } from './FindAllPetsController';
import { FindAllUsersController } from './FindAllUsersController';
import { FindPetController } from './FindPetController';
import { FindUserController } from './FindUserController';
import { ListConsultsController } from './ListConsultsController';
import { ListPrescriptionsController } from './ListPrescriptionsController';
import { ListVaccinesController } from './ListVaccinesController';
import { signInUserController } from './signInUserController';
import { UpdatePetController } from './UpdatePetController';
import { UpdateUserController } from './UpdateUserController';

const signInUser = new signInUserController();
const createUser = new CreateUserController();
const createPet = new CreatePetController();
const findUser = new FindUserController();
const findAllUsers = new FindAllUsersController();
const findPet = new FindPetController();
const findAllPets = new FindAllPetsController();
const updateUser = new UpdateUserController();
const updatePet = new UpdatePetController();
const createConsult = new CreateConsultController();
const createVaccine = new CreateVaccineController();
const createPrescription = new CreatePrescriptionController();
const listConsults = new ListConsultsController();
const listVaccines = new ListVaccinesController();
const listPrescriptions = new ListPrescriptionsController();

export {
  signInUser,
  createUser,
  createPet,
  findUser,
  findAllUsers,
  findPet,
  findAllPets,
  updateUser,
  updatePet,
  createConsult,
  createVaccine,
  createPrescription,
  listConsults,
  listVaccines,
  listPrescriptions,
};

