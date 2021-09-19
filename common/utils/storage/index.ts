import Cookies from 'universal-cookie';

const STORAGE_NAMESPACE = 'HB_';
export const STORAGE_KEYS = {
  PRODUCTS: 'PRODUCTS',
  CART: 'CART',
};

let isLocalStorageSupported = false;

if ('localStorage' in global) {
  try {
    global.localStorage.setItem(`${STORAGE_NAMESPACE}test`, '1');
    global.localStorage.removeItem(`${STORAGE_NAMESPACE}test`);
    isLocalStorageSupported = true;
  } catch (e) {
    isLocalStorageSupported = false;
  }
}

const getItem = (key: string): any => {
  try {
    if (isLocalStorageSupported) {
      return JSON.parse(
        global.localStorage.getItem(`${STORAGE_NAMESPACE}${key}`) || ''
      );
    }
    const cookies = new Cookies();
    return JSON.parse(cookies.get(key));
  } catch (e) {
    return null;
  }
};

const setItem = (key: string, value: any): void => {
  if (isLocalStorageSupported) {
    global.localStorage.setItem(
      `${STORAGE_NAMESPACE}${key}`,
      JSON.stringify(value)
    );
  } else {
    const cookies = new Cookies();
    cookies.set(key, JSON.stringify(value));
  }
};

const removeItem = (key: string): void => {
  if (isLocalStorageSupported) {
    global.localStorage.removeItem(`${STORAGE_NAMESPACE}${key}`);
  } else {
    const cookies = new Cookies();
    cookies.remove(key);
  }
};

const Storage = {
  getItem,
  setItem,
  removeItem,
};

export default Storage;
