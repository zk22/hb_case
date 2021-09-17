import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { Badge } from './badge';

export default {
    title: 'Example/Badge',
    component: Badge,
    decorators: [withKnobs],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Badge>;

export const BadgeCmp = () => {
    const label = text('Label', '4');

    return <Badge>
            {label}
        </Badge>
};

