'use client';
import { theme } from '@/theme';
import { ReactNode } from 'react';
import { ThemeProvider } from '@mui/material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
export default function AppThemeProvider ({
    children
} : {
    children: ReactNode;
}) {
    return (
        <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
                { children }
            </ThemeProvider>
        </AppRouterCacheProvider>
    );
};