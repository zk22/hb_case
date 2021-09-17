import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { withKnobs, text, number } from '@storybook/addon-knobs';

import { Headline } from './headline';

export default {
    title: 'Example/Headline',
    component: Headline,
    decorators: [withKnobs],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Headline>;

export const HeadlineCmp = () => {
    const level = number('Level', 1);
    const label = text('Label', 'Hello asdasd');

    return <Headline 
        level={level} 
        >
            {label}
        </Headline>
};

