/**
 * @module preload
 */

import electronStoreApi from './electronStore'

export const storeApi = electronStoreApi
export { sha256sum } from './nodeCrypto'
export { versions } from './versions'
