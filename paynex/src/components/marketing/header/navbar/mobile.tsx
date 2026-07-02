'use client';
import { links } from './links';
import { useState } from 'react';
import { Box, Divider, Drawer, Typography, IconButton } from '@mui/material';
import { CustomLink, Flexbox } from '@/components/ui';
import WebBrand from '../web-brand';
import AuthRoutes from '../auth-routes';
import { RiMenu3Fill } from '@/assets/icons';
export default function MobileNavbar () {
    const [open, setOpen] = useState(false);
    return (
        <Box sx={{
            display: { xs: 'inherit', lg: 'none' },
        }}>
            <IconButton onClick={() => setOpen(true)}>
                <RiMenu3Fill color='#000'/>
            </IconButton>
            <Drawer 
                open={open} 
                onClose={() => setOpen(false)}
                anchor='right'
                closeAfterTransition={false}
                sx={styles.drawer}
            >
                <WebBrand/>
                <Flexbox 
                    direction='column' 
                    gap={0.5} 
                    sx={{ py: 3 }}
                >
                    { links.map(({ href, label, icon: Icon }, i) => 
                        <CustomLink 
                            href={href} 
                            sx={styles.link}
                            key={i} 
                        >
                            <Icon 
                                size={20} 
                                color='var(--black)'
                            />
                            <Typography
                                component='span' 
                                sx={{ fontWeight: 500 }}
                            >
                                { label }
                            </Typography>
                        </CustomLink>
                    )}
                    <Divider/>
                    <AuthRoutes 
                        direction='column' 
                        display='inherit' 
                        sx={{ width: '100%' }}
                    />
                </Flexbox>
            </Drawer>
        </Box>
    );
};
const styles = {
    drawer: {
        '& .MuiDrawer-paper': {
            p: 2,
            width: 210,
            background: '#fff',
        },
    },
    link: { 
        width: '100%', 
        justifyContent: 'start',
        gap: 1,
    },
};