import { v4 as uuidv4 } from 'uuid';

let users = [];

export const createUser = (req, res) => {
    const user = { id: uuidv4(), ...req.body };
    users.push(user);
    res.status(201).send('created');
};

export const getUsers = (req, res) => {
    res.status(200).send(users);
};

export const findUser = (req, res) => {
    const { id } = req.params;
    const user = users.find((user) => user.id === id);
    res.status(200).send(user);
};

export const updateUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;
    const user = users.find((user) => user.id === id);
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    res.status(200).send('updated');
};

export const deleteUser = (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id !== id);
    res.status(200).send('trashed');
};