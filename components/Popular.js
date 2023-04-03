import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Container, Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore, { Autoplay } from 'swiper'


function Slide(props) {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <Card sx={{ maxWidth: 445 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="240"
                        image="https://img.freepik.com/free-vector/user-with-voice-controlled-smart-speaker-voice-assistant-voice-activated-digital-assistants-home-automation-hub-internet-things-concept-vector-isolated-illustration_335657-2167.jpg?size=626&ext=jpg"
                        alt="voice"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div" sx={{ mb: 5, fontWeight: '700', color: '#0664a8' }}>
                            Voice and language-driven intelligence
                        </Typography>
                        <Typography variant="body2" color="black">
                            By 2029, the voice and speech recognition industry is projected to have increased from $11.2 billion to $49.7 billion.

                        </Typography>
                    </CardContent>
                </CardActionArea>

            </Card>

            <Card sx={{ maxWidth: 445 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="240"
                        image="https://img.freepik.com/free-vector/modern-artist-sculpt-3d-model-with-vr-simulation-glasses_1150-48144.jpg?w=900&t=st=1680542923~exp=1680543523~hmac=74f0dccaeeb1e4d0ec0d1e9a332cb62cfaade33f89e7da9822ea8aae45e4d2d8"
                        alt="augmented"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div" sx={{ mb: 5, fontWeight: '700', color: '#0664a8' }}>
                            Augmented Working
                        </Typography>
                        <Typography variant="body2" color="black">
                            AI-powered virtual assistants, who can rapidly respond to inquiries and automatically offer different, more effective ways to achieve goals, will also become increasingly common in the workplace.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    )
}


function Slide2(props) {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <Card sx={{ maxWidth: 445 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="240"
                        image="https://img.freepik.com/free-vector/augmented-intelligence-abstract-concept-illustration_335657-3792.jpg?w=740&t=st=1680543149~exp=1680543749~hmac=91e9ad13b3b5af374b1819d570168b5098a8ba947009074532309de3b4d1757d"
                        alt="ethics"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div" sx={{ mb: 5, fontWeight: '700', color: '#0664a8' }}>
                            Ethical and Explainable AI
                        </Typography>
                        <Typography variant="body2" color="black">
                            It is crucial to create AI models that are more moral and comprehensible. But the most important factor is trust.
                        </Typography>
                    </CardContent>
                </CardActionArea>

            </Card>

            <Card sx={{ maxWidth: 445 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="240"
                        image="https://img.freepik.com/free-vector/chatbot-voice-controlled-virtual-assistant-abstract-concept-illustration_335657-3681.jpg?w=740&t=st=1680543437~exp=1680544037~hmac=11f3118de4774b47c184dbe1fa9e66c6a0c78e429c2044db8140021fd8f2d871"
                        alt="mlops"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div" sx={{ mb: 5, fontWeight: '700', color: '#0664a8' }}>
                            MLOps
                        </Typography>
                        <Typography variant="body2" color="black">
                            A few top MLOps trends and forecasts for 2023 that will undoubtedly become more well-known in the sector such as -<span style={{ color: '#0664a8' }}>Data-based MLOps</span> , Identify Drift, Enhancing the value of ML solutions, An increase in the amount of MLOps libraries and packages ,Transferring AutoML to AutoMLOps.
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Box>
    )
}
export default function MultiActionAreaCard() {


    SwiperCore.use([Autoplay])
    return (
        <>
            <Container maxWidth="70%" sx={{ mt: 10, color: 'black' }}>
                <Typography variant='h4' sx={{ color: '#0664a8', textAlign: 'center', mb: 4, fontWeight: '700' }}>Most Popular
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
                </Swiper>

            </Container>
        </>
    );
}