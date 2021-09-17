import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import { Input } from './input';

export default {
    title: 'Example/Input',
    component: Input,
    decorators: [withKnobs],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Input>;

export const InputCmp = () => {
    const disabled = boolean('Disabled', false);
    const round = boolean('Round', false);
    const fullWidth = boolean('Full Width', false);
    const placeholder = text('Placeholder', 'Placeholder');
    const value = text('Value', 'Value');

    return <Input 
            disabled={disabled}
            round={round}
            fullWidth={fullWidth}
            value={value}
            placeholder={placeholder}
        ></Input>
};

