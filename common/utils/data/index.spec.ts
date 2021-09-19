import storage from '@/common/utils/storage';
import {
  sortByOrderType,
  getProductFilterValuesByType,
  getProductDetails,
} from './index';

const products = [
  {
    id: 12,
    date: 1631946258,
    name: 'iPhone 11',
    specs: {
      brand: 'Apple',
      color: 'Lacivert',
    },
    images: [
      'https://productimages.hepsiburada.net/s/49/222-222/10995125452850.jpg/format:webp',
    ],
    price: {
      currency: '₺',
      amount: 11000,
      previousAmount: 14000,
      discount: 10,
      discountType: 'percentage',
    },
  },
  {
    id: 13,
    date: 1631859858,
    name: 'iPhone 12',
    specs: {
      brand: 'Apple',
      color: 'Kirmizi',
    },
    images: [
      'https://productimages.hepsiburada.net/s/49/222-222/10995125452850.jpg/format:webp',
    ],
    price: {
      currency: '₺',
      amount: 12000,
      previousAmount: 14000,
      discount: 10,
      discountType: 'percentage',
    },
  },
];

jest.mock('@/common/utils/storage');
const getItemSpy = jest.fn();
storage.getItem = getItemSpy.mockImplementation((type) => {
  return products;
});

describe('utils/data', () => {
  describe('utils/data', () => {
    it('should test sortByOrderType', () => {
      const item1 = { date: 12, price: { amount: 100 } };
      const item2 = { date: 13, price: { amount: 110 } };
      const resultAscPrice = sortByOrderType(item1, item2, 'asc_price');
      expect(resultAscPrice).toEqual(-10);

      const resultDescPrice = sortByOrderType(item1, item2, 'desc_price');
      expect(resultDescPrice).toEqual(10);

      const resultAscDate = sortByOrderType(item1, item2, 'asc_date');
      expect(resultAscDate).toEqual(-1);

      const resultDescDate = sortByOrderType(item1, item2, 'desc_date');
      expect(resultDescDate).toEqual(1);

      const resultDefault = sortByOrderType(item1, item2, '');
      expect(resultDefault).toEqual(0);
    });

    it('should test getProductFilterValuesByType', async () => {
      const result = await getProductFilterValuesByType('color');
      const expected = [
        { count: 1, key: 'Lacivert' },
        { count: 1, key: 'Kirmizi' },
      ];
      expect(result).toEqual(expected);
    });

    it('should test getProductDetails', async () => {
      const result = await getProductDetails([products[0].id]);
      const expected = [products[0]];
      expect(result).toEqual(expected);
    });
  });
});
