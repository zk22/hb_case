import React from 'react';
import classnames from 'classnames';

import './pagination.scss';

interface PaginationProps {
    className?: string;
    page?: number;
    count: number;
    onChange(page: number): void;
}

interface PaginationItemProps {
    className?: string;
    value: number | string;
    selected?: boolean;
    disabled?: boolean;
    onClick(): void;
}

const PaginationItem = ({ className, value, selected, disabled, onClick }: PaginationItemProps & React.HTMLAttributes<HTMLLIElement>) => {
    const classes = classnames({
        'pagination__item': true,
        'pagination__item--selected': selected,
        'pagination__item--disabled': disabled
    }, className);
    return <li
        onClick={onClick}
        className={classes}>
        {value}
    </li>
}

export const Pagination = ({
    className = '',
    page = 1,
    count = 1,
    onChange,
    children,
    ...props
}: PaginationProps & React.HTMLAttributes<HTMLElement>) => {
    const classes = classnames({
        pagination: true,
    }, className);

    const pages = Array.from(Array(count).keys());

    return (
        <ul className={classes}>
            <PaginationItem value={'<'} onClick={() => onChange(page - 1)} disabled={page <= 1} />
            {
                pages.map((idx) => {
                    return <PaginationItem key={`pagination-item-${idx}`} value={idx + 1} selected={page === idx + 1} onClick={() => onChange(idx + 1)} />
                })
            }
            <PaginationItem value={'>'} onClick={() => onChange(page + 1)} disabled={page >= count} />
        </ul>
    );
};
