import { createTheme } from '@mui/material';
export const theme = createTheme({
    palette: {
        primary: {
            main: '#1964fb',
        },
    },
    components: {
        MuiButton: {
            defaultProps: {
                variant: 'text',
            },
            styleOverrides: {
                root: {
                    textTransform: 'capitalize',
                    fontFamily: 'var(--space-grotesk)',
                    borderRadius: '6px',
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: '#1f2640',
                    fontFamily: 'var(--space-grotesk)',
                    fontSize: 15,
                    fontWeight: 400,
                },
            },
        },
    },
});