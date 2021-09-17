import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

import { Button, ButtonSize, ButtonVariant } from './button';

export default {
    title: 'Example/Button',
    component: Button,
    decorators: [withKnobs],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const sizes = {
    small: 'small',
    medium: 'medium',
    large: 'large'
};

const variants = {
    primary: 'primary',
    secondary: 'secondary',
    tertiary: 'tertiary'
};

export const ButtonCmp = () => {
    const size = select('Size', sizes, 'medium');
    const variant = select('Variant', variants, 'primary');
    const disabled = boolean('Disabled', false);
    const fullWidth = boolean('Full Width', false);
    const outlined = boolean('Outlined', false);
    const label = text('Label', 'Hello Storybook');

    return <Button 
        size={size as ButtonSize} 
        variant={variant as ButtonVariant} 
        disabled={disabled}
        fullWidth={fullWidth}
        outlined={outlined}
        >
            {label}
        </Button>
};

