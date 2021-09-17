import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { Spec } from './spec';

export default {
    title: 'Example/Spec',
    component: Spec,
    decorators: [withKnobs],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Spec>;

export const SpecCmp = () => {
    const name = text('Name', 'Brand');
    const value = text('Value', 'Apple');

    return <Spec 
        name={name}
        value={value}
        />
};

