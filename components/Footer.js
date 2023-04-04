import { Container } from '@mui/system'
import { Typography } from '@mui/material'
import React from 'react'

export default function Footer() {
    return (
        <>
            <Container maxWidth="70%" sx={{ mt: 10, color: 'black', bgcolor: 'whitesmoke', height: '10vh', textAlign: 'center' }}>
                <Typography variant="h6" color="#5885AF" sx={{ fontWeight: 600, pt: 3 }}>
                    Copyright by @ <span style={{ color: 'Orange' }}>A</span>rtristic<span style={{ color: 'Orange' }}>A</span>i
                </Typography>
            </Container >
        </>
    )
}
