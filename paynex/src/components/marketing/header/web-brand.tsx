import Link from 'next/link';
import Image from 'next/image';
import Box from '@mui/material/Box';
import { Logo } from '@/assets/images';
export default function WebBrand () {
    return (
        <Box sx={{ mb: -1.5 }}>
            <Link href='/'>
                <Image 
                    src={Logo} 
                    height={50} 
                    alt='logo-paynex'
                    loading='eager'
                />
            </Link>
        </Box>
    );
};