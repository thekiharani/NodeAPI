import express from 'express';

import { createUser, getUsers, findUser, updateUser, deleteUser } from '../controllers/users.js';

const router = express.Router();

// list users
router.get('/', getUsers);

// add user
router.post('/', createUser);

// find by id
router.get('/:id', findUser);

// update
router.patch('/:id', updateUser);

// delete
router.delete('/:id', deleteUser);

export default router;
