import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { Container } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

export default function ComplexGrid() {
    return (
        <>
            <Header />
            <Container maxWidth="70%" sx={{ mt: 20, color: 'black' }}>

                <Paper
                    sx={{
                        p: 2,
                        margin: 'auto',
                        maxWidth: 500,
                        flexGrow: 1,
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                    }}
                >
                    <Grid container spacing={2} direction='column'>
                        <Box sx={{ display: 'flex' }}>
                            <Avatar
                                alt="author"
                                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                                sx={{ width: 76, height: 76 }}
                            />
                            <Typography variant="h7" sx={{ color: 'black', m: '20px', fontWeight: '600' }}><span style={{ color: 'Orange' }}>Dhanashree Shripad George</span></Typography>
                        </Box>
                        <Grid item>
                            <ButtonBase sx={{ width: 428, height: 300 }}>
                                <Img alt="g-ai" src="https://img.freepik.com/free-vector/intelligent-interface-abstract-concept-illustration_335657-3797.jpg?w=740&t=st=1680512702~exp=1680513302~hmac=221138db5027307937addd2414b4b1c38c08410e44b3688a92d8b81831c0468e" />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1" component="div" sx={{ mb: 5, fontWeight: '800', color: '#0664a8' }}>
                                        Generative AI
                                    </Typography>
                                    <Typography variant="h6" gutterBottom mb={'30px'}>
                                        GPT-3, designed by OpenAI, is one of the most well-known generative AI models.
                                    </Typography>
                                    <Typography variant="h7" sx={{ fontWeight: '700', lineHeight: '20px' }}>
                                        It is capable of producing text and prose that is almost identical to human-written text and writing. Images are created using a GPT-3 variation called DALL-E. Generative AI is the application of AI to produce novel goods and new objects. While generative AI is mostly used to create media content like lifelike images of people and things, it may also generate code, produce synthetic tabular data, and building materials and medications with certain qualities.
                                        <br /><br />
                                        The technique has gained widespread attention thanks to experiments like the well-known deep-faked Tom Cruise films and the Metaphysic act, which dominated this year’s America’s Got Talent. But by 2023, it will be utilized more regularly to generate fake data that organizations may use for various things.
                                    </Typography>
                                    <br /><br />
                                    <Typography>Using existing data, such as video, photos, sounds, or even computer code, by generative AI algorithms creates new material that has never been in the non-digital world.</Typography>

                                </Grid>
                                <Grid item>
                                    <Typography sx={{ cursor: 'pointer' }} variant="body2">
                                        January 21, 2023
                                    </Typography>
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                </Paper>
            </Container>
            <Footer />
        </>
    );
}