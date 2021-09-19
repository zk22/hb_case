import storage from './index';

beforeEach(() => {
  jest.spyOn(localStorage, 'getItem');
  jest.spyOn(localStorage, 'clear');
  // jest.mock('universal-cookie', () => {
  //   const mCookie = {
  //     get: cookieGetSpy,
  //     set: cookieSetSpy,
  //     remove: cookieRemoveSpy,
  //   };
  //   return jest.fn(() => mCookie);
  // });
});

describe('storage', () => {
  test('should save to localStorage', () => {
    const spy = jest.spyOn(window.localStorage.__proto__, 'setItem');
    const key = 'foo';
    const value = 'bar';
    storage.setItem(key, value);
    expect(spy).toHaveBeenCalled();
  });

  test('should get from localStorage', () => {
    const spy = jest.spyOn(window.localStorage.__proto__, 'getItem');
    const key = 'foo';
    storage.getItem(key);
    expect(spy).toHaveBeenCalled();
  });

  test('should remove from localStorage', () => {
    const spy = jest.spyOn(window.localStorage.__proto__, 'removeItem');
    const key = 'foo';
    storage.removeItem(key);
    expect(spy).toHaveBeenCalled();
  });
});
