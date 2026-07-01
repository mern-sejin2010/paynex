import Image from 'next/image';
import Box from '@mui/material/Box';
import { Logo } from '@/assets/images';
export default function WebBrand () {
    return (
        <Box>
            <Image src={Logo} height={50} alt='logo-paynex'/>
        </Box>
    );
};