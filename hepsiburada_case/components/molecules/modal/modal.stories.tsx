import React, { useEffect, useRef } from 'react';
import { ComponentMeta } from '@storybook/react';
import { withKnobs, number, boolean } from '@storybook/addon-knobs';

import Modal from './modal';

export default {
    title: 'Example/Modal',
    component: Modal,
    decorators: [withKnobs],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

export const ModalCmp = () => {
    let open = boolean('Open', false);

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

        <Modal
            open={open}
            header={<span>Modal header</span>}
            footer={<span>Modal footer</span>}
        >
            <span>ModalContent</span>
        </Modal>

    </div>
};

