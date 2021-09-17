import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { withKnobs, text, select, boolean, number } from '@storybook/addon-knobs';

import { Price } from './price';

export default {
    title: 'Example/Price',
    component: Price,
    decorators: [withKnobs],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Price>;

export const PriceCmp = () => {

    const amount = number('Amount', 12000);
    const variant = select('Variant', ['default', 'line-through', 'discount', 'profit'], 'default');
    const showSignum = boolean('Signum', false);
    const suffix = text('Suffix', '₺');

    return <Price 
        amount={amount}
        variant={variant}
        showSignum={showSignum}
        suffix={suffix}
        />
};

