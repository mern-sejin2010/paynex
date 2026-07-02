import { ReactNode } from 'react';
import { Stack } from '@mui/material';
export default function Flexbox ({
    children,
    direction = 'row',
    display = '',
    align = '',
    justify = '',
    gap = 0,
    className,
    sx,
} : {
    children?: ReactNode;
    direction?: 'row' | 'column' | 'column-reverse' | 'row-reverse';
    display?: string | object;
    align?: string | object | 'start' | 'center' | 'end';
    justify?: string | object;
    gap?: number | string | object;
    className?: string;
    sx?: object;
}) {
    return (
        <Stack
            direction={direction}
            className={className}
            sx={{
                display: display,
                alignItems: align,
                justifyContent: justify,
                gap: gap,
                ...sx,
            }}
        >
            { children }
        </Stack>
    );
};