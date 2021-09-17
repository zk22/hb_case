import React from 'react';
import classnames from 'classnames';

import './spec.scss';


interface SpecProps {
    className?: string;
    name: string;
    value: string;
}

export const Spec = ({
    className = '',
    name,
    value,
    ...props
}: SpecProps) => {
    const classes = classnames({
        spec: true,
    }, className);

    return (
        <div className={classes} {...props}>
            <div className="spec__key">{name}:</div>
            <div className="spec__value">{value}</div>
        </div>
    );
};
