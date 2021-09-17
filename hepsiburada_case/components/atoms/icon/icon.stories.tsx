import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';

import { Icon, IconSize, IconType } from './icon';

export default {
    title: 'Example/Icon',
    component: Icon,
    decorators: [withKnobs],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Icon>;

const sizes = {
    small: 'small',
    medium: 'medium',
    large: 'large'
};

export const IconCmp = () => {
    const type = select('Type', ['search', 'close', 'arrowDown'], 'close');
    const size = select('Size', sizes, 'medium');

    return <Icon 
        size={size as IconSize} 
        type={type as IconType} 
        />
};

