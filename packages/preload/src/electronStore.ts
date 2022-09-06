// import Store from 'electron-store';

// const store = new Store();

// export function getStore() {
//   return store;
// }

const ConfigStore = require('electron-store');
const configStore = new ConfigStore();

const electronStoreApi = {
  versions: process.versions,
  configStore: {
    get: (key: string, def?: any) => configStore.get(key, def),
    set: (key: string, val?: any) => configStore.set(key, val),
    clear: () => configStore.clear(),
    delete: (key: string) => configStore.delete(key),
    has: (key: string) => configStore.has(key),
  },
};
export default electronStoreApi;
