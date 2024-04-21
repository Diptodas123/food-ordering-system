import React from 'react'
import { tokens, useMode } from '../../Admin/theme'
import { Box, Typography } from '@mui/material';

const Orders = () => {
    const [theme, colorMode] = useMode();
    const colors = tokens(theme.palette.mode);
    return (
        <>
            <Box>

                <Typography variant='h5'>Your Orders</Typography>


            </Box>
        </>
    )
}

export default Orders