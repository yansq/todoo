/**
 * @module preload
 */

import electronStoreApi from './electronStore';

export const api = electronStoreApi;
export {sha256sum} from './nodeCrypto';
export {versions} from './versions';
