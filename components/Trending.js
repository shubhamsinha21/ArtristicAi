
import { Swiper, SwiperSlide } from 'swiper/react';
import { Typography } from '@mui/material';
import Container from '@mui/material/Container';
import 'swiper/css';
import Box from '@mui/material/Box';
import { fontFamily, textAlign } from '@mui/system';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';
import SwiperCore, { Autoplay } from 'swiper'


const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});




function Slide(props) {
    return (
        <>

            <Paper
                sx={{
                    p: 2,
                    margin: 'auto',
                    maxWidth: "70%",
                    flexGrow: 1,

                }}
            >
                <Grid container spacing={2} >
                    <Grid item>
                        <ButtonBase sx={{ width: 428, height: 380 }}>
                            <Img alt="voice" src="https://img.freepik.com/free-vector/user-with-voice-controlled-smart-speaker-voice-assistant-voice-activated-digital-assistants-home-automation-hub-internet-things-concept-vector-isolated-illustration_335657-2167.jpg?size=626&ext=jpg" />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="h5" component="div" sx={{ mb: 5, fontWeight: '800', color: '#0664a8' }}>
                                    #1 Voice and language-driven intelligence
                                </Typography>
                                <Typography variant="h6" gutterBottom mb={'30px'}>
                                    By 2029, the voice and speech recognition industry is projected to have increased from $11.2 billion to $49.7 billion.
                                </Typography>
                                <Typography variant="h7" gutterBottom sx={{ fontWeight: '700', lineHeight: '20px' }}>
                                    Smart speaker use in homes significantly increased due to the remote working revolution, and speech solutions focused on streamlining corporate procedures will take center stage in 2023. As internal systems like CRM and business processes become more connected with voice assistants, they will become increasingly adapted to address unique company needs.
                                </Typography>

                            </Grid>

                            <Grid item>
                                <Typography variant="body1" component="div" sx={{ fontWeight: '700', color: '#0664a8' }} >

                                    Trending in AI
                                </Typography>

                                <Typography variant="body1" component="div" sx={{ fontWeight: '700', color: '#0664a8' }} >
                                    Author : By Dhanshree Shripad Shenwai, February 10, 2023
                                </Typography>
                            </Grid>

                        </Grid>

                    </Grid>
                </Grid>
            </Paper >

        </>

    )
}

function Slide2(props) {
    return (
        <>

            <Paper
                sx={{
                    p: 2,
                    margin: 'auto',
                    maxWidth: "70%",
                    flexGrow: 1,

                }}
            >
                <Grid container spacing={2} >
                    <Grid item>
                        <ButtonBase sx={{ width: 428, height: 380 }}>
                            <Img alt="cyber" src="https://img.freepik.com/free-vector/industrial-cybersecurity-abstract-concept-illustration_335657-3832.jpg?w=740&t=st=1680512750~exp=1680513350~hmac=de9a81a9b8f3e6e207745ae8770aee7b39cec8a4fbb68a16cbc1b30f122c34f7" />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="h5" component="div" sx={{ mb: 5, fontWeight: '800', color: '#0664a8' }}>
                                    #2 AI-powered cybersecurity
                                </Typography>
                                <Typography variant="h6" gutterBottom mb={'30px'}>
                                    AI will be applied to proactive cybersecurity projects by 2023.
                                </Typography>
                                <Typography variant="h7" gutterBottom sx={{ fontWeight: '700', lineHeight: '20px' }}>
                                    This year, it’s expected that more businesses will invest more money using advanced cybersecurity tools to protect their data. Unfortunately, thieves are breaking through traditional IT security measures to access systems that store critical customer and personal data by exploiting AI technology. But AI also aids in the battle against cyber attacks.
                                </Typography>

                            </Grid>

                            <Grid item>
                                <Typography variant="body1" component="div" sx={{ fontWeight: '700', color: '#0664a8' }} >

                                    Trending in AI
                                </Typography>

                                <Typography variant="body1" component="div" sx={{ fontWeight: '700', color: '#0664a8' }} >
                                    Author : By Dhanshree Shripad Shenwai, January 7, 2023
                                </Typography>
                            </Grid>

                        </Grid>

                    </Grid>
                </Grid>
            </Paper >

        </>

    )
}

function Slide3(props) {
    return (
        <>

            <Paper
                sx={{
                    p: 2,
                    margin: 'auto',
                    maxWidth: "70%",
                    flexGrow: 1,

                }}
            >
                <Grid container spacing={2} >
                    <Grid item>
                        <ButtonBase sx={{ width: 428, height: 380 }}>
                            <Img alt="g-ai" src="https://img.freepik.com/free-vector/intelligent-interface-abstract-concept-illustration_335657-3797.jpg?w=740&t=st=1680512702~exp=1680513302~hmac=221138db5027307937addd2414b4b1c38c08410e44b3688a92d8b81831c0468e" />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="h5" component="div" sx={{ mb: 5, fontWeight: '800', color: '#0664a8' }}>
                                    #3  Generative AI
                                </Typography>
                                <Typography variant="h6" gutterBottom mb={'30px'}>
                                    GPT-3, designed by OpenAI, is one of the most well-known generative AI models.
                                </Typography>
                                <Typography variant="h7" gutterBottom sx={{ fontWeight: '700', lineHeight: '20px' }}>
                                    It is capable of producing text and prose that is almost identical to human-written text and writing. Images are created using a GPT-3 variation called DALL-E. Generative AI is the application of AI to produce novel goods and new objects. While generative AI is mostly used to create media content like lifelike images of people and things, it may also generate code, produce synthetic tabular data, and building materials and medications with certain qualities.

                                </Typography>

                            </Grid>

                            <Grid item>
                                <Typography variant="body1" component="div" sx={{ fontWeight: '700', color: '#0664a8' }} >

                                    Trending in AI
                                </Typography>

                                <Typography variant="body1" component="div" sx={{ fontWeight: '700', color: '#0664a8' }} >
                                    Author : By Dhanshree Shripad Shenwai, January 21, 2023
                                </Typography>
                            </Grid>

                        </Grid>

                    </Grid>
                </Grid>
            </Paper >

        </>

    )
}



export default function Trending() {

    SwiperCore.use([Autoplay])

    return (
        <>

            <Container maxWidth="70%" sx={{ mt: 20, color: 'black' }}>
                <Typography variant='h4' sx={{ color: '#0664a8', textAlign: 'center', mb: 4, fontWeight: '700' }}>Trending
                </Typography>

                <Swiper


                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 2000

                    }}
                >
                    <SwiperSlide > {Slide()}</SwiperSlide>
                    <SwiperSlide > {Slide2()}</SwiperSlide>
                    <SwiperSlide > {Slide3()}</SwiperSlide>


                </Swiper>

            </Container>


        </>
    )
}
