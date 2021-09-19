import React, { ReactElement } from 'react';
import { Headline } from '@/components/atoms/headline/headline';
import { FilterItem } from '@/components/atoms/filter-item/filter-item';

import styles from './filter.module.scss';

type FilterValue = { key: string; label: string };

interface FilterProps {
  className?: string;
  label: string;
  items?: FilterValue[];
  selected?: string;
  onSelectChange?: (key: string) => void;
}

export const Filter = ({
  className = '',
  label,
  items = [],
  selected,
  onSelectChange = () => {},
  ...props
}: FilterProps & React.HtmlHTMLAttributes<HTMLElement>): ReactElement => {
  return (
    <div className={`${styles.filter} ${className}`}>
      <Headline level={3} className={styles.filterLabel}>
        {label}
      </Headline>
      <div className={styles.filterItems}>
        {items.map((f, i) => {
          return (
            <FilterItem
              key={f.key}
              selected={selected === f.key}
              className={styles.filterItem}
              onClick={() => onSelectChange(f.key)}
            >
              {f.label}
            </FilterItem>
          );
        })}
      </div>
    </div>
  );
};
