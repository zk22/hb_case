import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

import { Select } from './select';

export default {
    title: 'Example/Select',
    component: Select,
    decorators: [withKnobs],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Select>;

export const SelectCmp = () => {
    const value = select('Value', ['elma', 'armut', 'havuç', 'muz'], 'elma');

    return <Select 
        value={value}
        >
            <option value="elma">Elma</option>
            <option value="armut">Armut</option>
            <option value="havuç">Havuç</option>
            <option value="muz">Muz</option>
        </Select>
};

