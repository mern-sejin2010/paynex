import Typography from '@mui/material/Typography';
import { CustomLink, Flexbox } from '@/components/ui';
import { TbUser, BsBoxArrowRight } from '@/assets/icons';
export default function AuthRoutes ({
    direction = 'row',
    display = { xs: 'none', lg: 'flex' },
    sx,
} : {
    direction?: 'row' | 'column' | 'column-reverse' | 'row-reverse';
    display?: string | object;
    sx?: object;
}) {
    return (
        <Flexbox 
            gap={2} 
            direction={direction}
            display={display}
        >
            <CustomLink 
                href='/login' 
                sx={{
                    ...styles.login,
                    ...sx,
                }}
            >
                <TbUser size={20} color='var(--black)'/>
                <Typography 
                    component='span' 
                    sx={{ fontWeight: 500 }}
                >
                    Login
                </Typography>
            </CustomLink>
            <CustomLink 
                href='/register' 
                sx={{
                    ...styles.register,
                    ...sx,
                }}
            >
                    <BsBoxArrowRight size={20}/>
                    <Typography 
                        component='span' 
                        sx={{ 
                            color: '#fff', 
                            fontWeight: 500, 
                        }}
                    >
                        Create Account
                    </Typography>
            </CustomLink>
        </Flexbox>
    );
};
const styles = {
    login: {
        py: 1,
        gap: 1,
        border: '1px solid var(--border)', 
    },
    register: { 
        py: 1, 
        gap: 1, 
        background: 'var(--primary)', 
        color: '#fff',
    },
};