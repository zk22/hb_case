import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';

import { Pagination } from './pagination';

export default {
    title: 'Example/Pagination',
    component: Pagination,
    decorators: [withKnobs],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Pagination>;

export const PaginationCmp = () => {
    const count = number('Count', 5);
    const page = number('Page', 5);

    return <Pagination 
        count={count}
        page={page}
        onChange={(i) => console.log('page clicked! ', i)}
        >
        </Pagination>
};

