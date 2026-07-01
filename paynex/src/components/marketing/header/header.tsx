import { Logo } from "@/assets/images";
import { Flexbox } from "@/components/ui";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

import WebBrand from "./web-brand";
import Navbar from "./navbar/desktop";
import AuthRoutes from "./auth-routes";
import DesktopNavbar from "./navbar/desktop";

export default function Header () {
    return (
        <Box component='header' sx={{
            py: 1,
            background: '#fff',
            position: 'sticky',
            top: 0,
        }}>
            <Container maxWidth='xl'>
                <Flexbox 
                    align='center' 
                    justify='space-between'
                >
                    <WebBrand/>
                    <DesktopNavbar/>
                    <AuthRoutes/>
                </Flexbox>
            </Container>
        </Box>
    );
};