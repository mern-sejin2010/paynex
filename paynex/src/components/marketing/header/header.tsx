import { Box, Container } from '@mui/material';
import { Flexbox } from '@/components/ui';
import WebBrand from './web-brand';
import AuthRoutes from './auth-routes';
import DesktopNavbar from './navbar/desktop';
import MobileNavbar from './navbar/mobile';
export default function Header () {
    return (
        <Box 
            component='header' 
            sx={styles.header}
        >
            <Container maxWidth='xl'>
                <Flexbox 
                    align='center' 
                    justify='space-between'
                >
                    <WebBrand/>
                    <DesktopNavbar/>
                    <MobileNavbar/>
                    <AuthRoutes/>
                </Flexbox>
            </Container>
        </Box>
    );
};
const styles = {
    header: {
        py: 2,
        background: '#fff',
        position: 'sticky',
        top: 0,
    },
};