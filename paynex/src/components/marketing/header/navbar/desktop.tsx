import { links } from './links';
import Typography from '@mui/material/Typography';
import { CustomLink, Flexbox } from '@/components/ui';
export default function DesktopNavbar () {
    return (
        <Flexbox 
            display={{ xs: 'none', lg: 'flex' }}
            gap={2}
            className='navbar'
        >
            { links.map(({ href, label }, i) => 
                <CustomLink href={href} key={i}>
                    <Typography 
                        component='span' 
                        sx={{ fontWeight: 500 }}
                    >
                        { label }
                    </Typography>
                </CustomLink>
            )}
        </Flexbox>
    );
};