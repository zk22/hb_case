import React, { ReactElement } from 'react';
import Image from 'next/image';
import { Search } from '../search';
import { UserCart } from '../user-cart';

import styles from './index.module.scss';

export const Header = ({
  children,
  ...props
}: React.HtmlHTMLAttributes<HTMLElement>): ReactElement => {
  return (
    <div className={styles.header__wrapper}>
      <div className="container">
        <div className={styles.header}>
          <Image alt="logo" src="/logo.svg" width={212} height={35} />
          <div className={styles.header__search}>
            <Search />
          </div>
          <UserCart />
        </div>
      </div>
    </div>
  );
};
