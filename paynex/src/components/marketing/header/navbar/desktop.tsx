import Link from 'next/link';
import { links } from './links';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Flexbox } from '@/components/ui';
export default function DesktopNavbar () {
    return (
        <Flexbox 
            display={{ xs: 'none', lg: 'flex' }}
            gap={2}
        >
            { links.map(({ href, label }, i) => 
                <Link href={href} key={i}>
                    <Button>
                        <Typography 
                            component='span' 
                            sx={{ fontWeight: 500 }}
                        >
                            { label }
                        </Typography>
                    </Button>
                </Link>
            )}
        </Flexbox>
    );
};