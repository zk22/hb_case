import { toFilterItemLabel, toProductFilterParams } from './index';

describe('mappers', () => {
  describe('mappers', () => {
    it('should test toFilterItemLabel', () => {
      const item = { key: 'apple', count: 1 };
      const result = toFilterItemLabel(item);
      expect(result).toEqual({ key: 'apple', label: 'apple (1)' });
    });

    it('should test toProductFilterParams', () => {
      const params = {
        searchText: 'text',
        orderBy: 'asc_price',
        color: 'red',
        brand: 'apple',
        from: 1,
        to: 5,
      };
      const result = toProductFilterParams(params);
      const expected = {
        filters: [
          {
            key: 'name',
            type: 'includes',
            value: 'text',
          },
          {
            key: 'specs.color',
            type: 'equal',
            value: 'red',
          },
          {
            key: 'specs.brand',
            type: 'equal',
            value: 'apple',
          },
        ],
        from: 1,
        orderBy: 'asc_price',
        to: 5,
      };
      expect(result).toEqual(expected);
    });
  });
});
