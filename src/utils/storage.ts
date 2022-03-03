/**
 * An interface for browser storage
 */
class BrowserStorage {
  public length = 0;
  private values = {};
  public clear() {
    for (const key of Object.keys(this.values)) {
      this.removeItem(key);
    }
  }
  public getItem(key: string) {
    return this.values[key];
  }
  public key(index: number) {
    return this.values[index];
  }
  public removeItem(key: string) {
    delete this.values[key];
    this.length -= 1;
  }
  public setItem(key: string, value: string) {
    this.values[key] = value;
    this.length += 1;
  }
}

/**
 * A persistent copy of browser local storage
 */
const localStorage = new BrowserStorage();

/**
 * A persistent copy of browser session storage
 */
const sessionStorage = new BrowserStorage();

/**
 * Safely get the browser local storage
 */
function getLocalStorage() {
  if (typeof window === 'undefined') {
    return localStorage;
  }

  return window.localStorage;
}

/**
 * Safely get the browser session storage
 */
function getSessionStorage(): Storage {
  if (typeof window === 'undefined') {
    return sessionStorage;
  }

  return window.sessionStorage;
}

/**
 * An interface through which browser storage can be accessed
 */
class Store {
  private storage: Storage;

  constructor(getStore: () => Storage) {
    this.storage = getStore();
  }

  public get(key: string) {
    return this.storage.getItem(key);
  }

  public set(key: string, value: string) {
    return this.storage.setItem(key, value);
  }

  public del(key: string) {
    return this.storage.removeItem(key);
  }
}

/**
 * Access browser local storage through this store
 */
export const local = new Store(getLocalStorage);

/**
 * Access browser session storage through this store
 */
export const session = new Store(getSessionStorage);
