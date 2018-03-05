import { db } from './firebase';

// User API

export const doCreateUser = (id, username, email, favorites) =>
  db.ref(`users/${id}`).set({
    username,
    email,
    favorites
  });

export const onceGetUsers = () =>
  db.ref('users').once('value');

// Other db APIs ...
