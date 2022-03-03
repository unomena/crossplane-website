import { SESSION_STORE_AUTH_KEY } from '../constants/session';
import { local, session } from './storage';

/**
 * Save the given string to the session store (and the local store when remember is `true`).
 * Delete key from the stores when the value is `undefined`.
 * @param value The value to save in storage
 * @param remember Save to local storage
 * @returns void
 */
export function setAuthenticated(value: 'true' | undefined, remember?: boolean) {
  if (value === undefined) {
    session.del(SESSION_STORE_AUTH_KEY);
    local.del(SESSION_STORE_AUTH_KEY);
    return;
  }

  session.set(SESSION_STORE_AUTH_KEY, value);

  if (remember) {
    local.set(SESSION_STORE_AUTH_KEY, value);
  }
}

/**
 * Returns `true` if the auth key is in either the session store or the local store
 */
export function isAuthenticated() {
  return !!session.get(SESSION_STORE_AUTH_KEY) || !!local.get(SESSION_STORE_AUTH_KEY);
}
