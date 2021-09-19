Hepsiburada React Challenge

## Getting Started

```bash
npm install
npm run dev
```

## Tests

- Unit tests (`/**.spec.(ts|tsx)`)
- Jest and react-testing-library

```bash
npm run test
```

## Directory Structure

# hepsiburada_case

* [__mocks__/]
* [common/]         
  * [constants/]
  * [mappers/]
  * [styles/]
  * [utils/]                     - localstorage and data related utils
  * [products.json]              - Products data
* [components/]                  - Atomic ui components
  * [atoms/]
  * [molecules/]
* [pages/]
  * [_app.tsx]
  * [index.tsx]
* [partials/]                    - Components that interact with redux
* *
* *
* [public/]
* [redux/]
  * [cart/]                      - Actions and reducers for user cart 
  * [product-filters/]           - Actions and reducers for product search and filter
  * [root-reducer.ts]
  * [store.ts]
* [.editorconfig]
* [.eslintignore]
* [.eslintrc.js]
* [.gitignore]
* [.stylelintrc.json]
* [README.md]
* [jest.config.js]
* [next-env.d.ts]
* [next.config.js]
* [package-lock.json]
* [package.json]
* [test-utils.tsx]
* [tsconfig.json]
* [types.ts]

