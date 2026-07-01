import Link from 'next/link';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Flexbox } from '@/components/ui';
import { TiUserOutline, FaArrowRight } from '@/assets/icons';
export default function AuthRoutes () {
    return (
        <Flexbox 
            gap={2} 
            display={{ xs: 'none', lg: 'flex' }}
        >
            <Link href='/login'>
                <Button sx={{ 
                    py: 1,
                    gap: 1, 
                    border: '1px solid var(--border)', 
                }}>
                    <TiUserOutline size={20} color='var(--black)'/>
                    <Typography 
                        component='span' 
                        sx={{ fontWeight: 500 }}
                    >
                        Login
                    </Typography>
                </Button>
            </Link>
            <Link href='/register'>
                <Button sx={{ 
                    py: 1, 
                    gap: 1, 
                    background: 'var(--primary)', 
                    color: '#fff',
                }}>
                    <FaArrowRight size={20}/>
                    <Typography 
                        component='span' 
                        sx={{ color: '#fff', fontWeight: 500 }}
                    >
                        Create Account
                    </Typography>
                </Button>
            </Link>
        </Flexbox>
    );
};