import { Router } from 'express';
import {nameController} from '../controllers/names'

const namesRouter: Router = Router();

namesRouter.get('/:name', nameController)

export default namesRouter;