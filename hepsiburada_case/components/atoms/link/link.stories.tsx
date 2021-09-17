import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

import { Link } from './link';

export default {
    title: 'Example/Link',
    component: Link,
    decorators: [withKnobs],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Link>;

export const LinkCmp = () => {
    const label = text('Label', 'Hello Storybook');
    const href = text('Href', 'https://www.google.com.tr');

    return <Link 
        href={href}
        onClick={() => { console.log('click') }}
        >
            {label}
        </Link>
};

