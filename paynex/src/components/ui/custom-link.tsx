import Link from "next/link";
import { ReactNode } from 'react';
import { usePathname } from "next/navigation";
import Button from '@mui/material/Button';
export default function CustomLink ({
    children,
    href,
    className,
    target,
    id,
    ...props
} : {
    children?: ReactNode;
    href?: string;
    className?: string;
    target?: string;
    id?: string;
}) {
    const pathname = usePathname();
    const linkClass = '';
    return (
        <Link 
            href={href} 
            className={linkClass} 
            target={target} 
            id={id}
            {...props}
        >
            <Button>
                { children }
            </Button>
        </Link>
    );
};