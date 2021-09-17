import React, { useEffect, useRef } from 'react';
import { ComponentMeta } from '@storybook/react';
import { withKnobs, number, boolean, select } from '@storybook/addon-knobs';

import Popper from './popper';

export default {
    title: 'Example/Popper',
    component: Popper,
    decorators: [withKnobs],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Popper>;

export const PopperCmp = () => {
    const open = boolean('Open', false);
    const alignment = select('Alignment', ['left' , 'right'], 'left');
    let test = useRef(null);

    return <div>
        <div>testetsete thsgdhjghgh gjhkghgjhghj asdasdasdadhj hgjkghgjh assds </div>
        <div>testetsete thsgdhjghgh gjhkghgjhghj asdasdasdadhj hgjkghgjh assds </div>
        <div>testetsete thsgdhjghgh gjhkghgjhghj asdasdasdadhj hgjkghgjh assds </div>
        <div>testetsete thsgdhjghgh gjhkghgjhghj asdasdasdadhj hgjkghgjh assds </div>
        <div>testetsete thsgdhjghgh gjhkghgjhghj asdasdasdadhj hgjkghgjh assds </div>
        <div>testetsete thsgdhjghgh gjhkghgjhghj asdasdasdadhj hgjkghgjh assds </div>
        <div>testetsete thsgdhjghgh gjhkghgjhghj asdasdasdadhj hgjkghgjh assds </div>
        <div>testetsete thsgdhjghgh gjhkghgjhghj asdasdasdadhj hgjkghgjh assds </div>
        <div>testetsete thsgdhjghgh gjhkghgjhghj asdasdasdadhj hgjkghgjh assds </div>
        <div>testetsete thsgdhjghgh gjhkghgjhghj asdasdasdadhj hgjkghgjh assds </div>
        <div>testetsete thsgdhjghgh gjhkghgjhghj asdasdasdadhj hgjkghgjh assds </div>
        <div>testetsete thsgdhjghgh gjhkghgjhghj asdasdasdadhj hgjkghgjh assds </div>
        <div>testetsete thsgdhjghgh gjhkghgjhghj asdasdasdadhj hgjkghgjh assds </div>
        <div>testetsete thsgdhjghgh gjhkghgjhghj asdasdasdadhj hgjkghgjh assds </div>
        <div>testetsete thsgdhjghgh gjhkghgjhghj asdasdasdadhj hgjkghgjh assds </div>
        <div>testetsete thsgdhjghgh gjhkghgjhghj asdasdasdadhj hgjkghgjh assds </div>
        <div>testetsete thsgdhjghgh gjhkghgjhghj asdasdasdadhj hgjkghgjh assds </div>
        <div>testetsete thsgdhjghgh gjhkghgjhghj asdasdasdadhj hgjkghgjh assds </div>
        <div>testetsete thsgdhjghgh gjhkghgjhghj asdasdasdadhj hgjkghgjh assds </div>
        <div>testetsete thsgdhjghgh gjhkghgjhghj asdasdasdadhj hgjkghgjh assds </div>
        <div>testetsete thsgdhjghgh gjhkghgjhghj asdasdasdadhj hgjkghgjh assds </div>
        <div>testetsete thsgdhjghgh gjhkghgjhghj asdasdasdadhj hgjkghgjh assds </div>
        <div>testetsete thsgdhjghgh gjhkghgjhghj asdasdasdadhj hgjkghgjh assds </div>
        <div>testetsete thsgdhjghgh gjhkghgjhghj asdasdasdadhj hgjkghgjh assds </div>
        <div>testetsete thsgdhjghgh gjhkghgjhghj asdasdasdadhj hgjkghgjh assds </div>
        <div>testetsete thsgdhjghgh gjhkghgjhghj asdasdasdadhj hgjkghgjh assds </div>
        <div>testetsete thsgdhjghgh gjhkghgjhghj asdasdasdadhj hgjkghgjh assds </div>
        <div style={{ display: "flex" }}>
            <div>asdasdadsads</div>
            <div ref={test}>testetsete thsgdhjghgh gjhkghgjhghj asdasdasdadhj hgjkghgjh assds </div>
            <div>asdasdadsads</div>
        </div>
        <div>testetsete thsgdhjghgh gjhkghgjhghj asdasdasdadhj hgjkghgjh assds </div>
        <div>testetsete thsgdhjghgh gjhkghgjhghj asdasdasdadhj hgjkghgjh assds </div>
        <div>testetsete thsgdhjghgh gjhkghgjhghj asdasdasdadhj hgjkghgjh assds </div>
        <div>testetsete thsgdhjghgh gjhkghgjhghj asdasdasdadhj hgjkghgjh assds </div>
        <div>testetsete thsgdhjghgh gjhkghgjhghj asdasdasdadhj hgjkghgjh assds </div>
        <div>testetsete thsgdhjghgh gjhkghgjhghj asdasdasdadhj hgjkghgjh assds </div>
        <div>testetsete thsgdhjghgh gjhkghgjhghj asdasdasdadhj hgjkghgjh assds </div>
        <div>testetsete thsgdhjghgh gjhkghgjhghj asdasdasdadhj hgjkghgjh assds </div>
        <div>testetsete thsgdhjghgh gjhkghgjhghj asdasdasdadhj hgjkghgjh assds </div>
        <div>testetsete thsgdhjghgh gjhkghgjhghj asdasdasdadhj hgjkghgjh assds </div>
        <div>testetsete thsgdhjghgh gjhkghgjhghj asdasdasdadhj hgjkghgjh assds </div>
        <div>testetsete thsgdhjghgh gjhkghgjhghj asdasdasdadhj hgjkghgjh assds </div>
        <div>testetsete thsgdhjghgh gjhkghgjhghj asdasdasdadhj hgjkghgjh assds </div>
        <div>testetsete thsgdhjghgh gjhkghgjhghj asdasdasdadhj hgjkghgjh assds </div>
        <div>testetsete thsgdhjghgh gjhkghgjhghj asdasdasdadhj hgjkghgjh assds </div>

        <Popper
            open={open}
            alignment={alignment}
            anchorEl={test}
        >
            <span>Popper Content</span>
        </Popper>

    </div>
};

