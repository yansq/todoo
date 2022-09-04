import { openDB } from 'idb';
import type { DBSchema } from 'idb';

interface MainDB extends DBSchema {
  'task': {
    key: string;
    value: string;
  };
}


const dbName = 'main-db';
// like table in database
const taskObjectStore = 'task';
const dbPromise = openDB<MainDB>(dbName, 1, {
  upgrade(db) {
    db.createObjectStore(taskObjectStore);
  },
});

async function get(objectStore ,key) {
  return (await dbPromise).get(objectStore, key);
}


async function set(objectStore, key, val) {
  return (await dbPromise).put(objectStore, val, key);
}

async function keys(objectStore) {
  return (await dbPromise).getAllKeys(objectStore);
}

async function getAll(objectStore) {
  return (await dbPromise).getAll(objectStore);
}

module.exports = { get, set, keys, getAll };