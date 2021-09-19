import type { NextPage } from 'next';
import Head from 'next/head';
import {
  Header,
  ProductFilters,
  ProductBreadcrumbArea,
  ProductListArea,
} from '../partials';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Hepsiburada React Challenge</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className="container p-b-50">
        <ProductBreadcrumbArea />
        <div className="product-area">
          <ProductFilters />
          <ProductListArea />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
