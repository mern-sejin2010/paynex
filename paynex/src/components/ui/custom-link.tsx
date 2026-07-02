'use client';
import Link from 'next/link';
import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Button from '@mui/material/Button';
import { SxProps } from '@mui/material';
export default function CustomLink ({
    children,
    href,
    className = 'link',
    target,
    id,
    sx,
    ...props
} : {
    children?: ReactNode;
    href: string;
    className?: string;
    target?: string;
    id?: string;
    sx?: SxProps;
}) {
    const pathname = usePathname();
    const isActive = (href === pathname) || pathname.startsWith(`${href}/`);
    const linkClass = isActive ? `${className} active` : className;
    return (
        <Link 
            href={href} 
            className={linkClass} 
            target={target} 
            id={id}
            {...props}
        >
            <Button sx={sx}>
                { children }
            </Button>
        </Link>
    );
};