import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

import { Card } from './card';

export default {
    title: 'Example/Card',
    component: Card,
    decorators: [withKnobs],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Card>;

export const CardCmp = () => {
    const size = select('Size', ['tiny', 'small', 'medium', 'large'], 'medium');

    return <Card 
        size={size}
        >
            content
        </Card>
};

