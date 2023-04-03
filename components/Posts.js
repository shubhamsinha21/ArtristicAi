import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { bgcolor, Container } from '@mui/system';
import Box from '@mui/system/Box';

export default function ImgMediaCard() {
    return (
        <>

            <Container maxWidth="70%" sx={{ mt: 10, color: 'black' }}>
                <Typography variant='h4' sx={{ color: '#0664a8', textAlign: 'center', mb: 5, fontWeight: '700' }}>Latest Posts
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <Card sx={{
                        maxWidth: 400, ':hover': {
                            boxShadow: 20
                        },
                    }}>
                        <CardMedia
                            component="img"
                            alt="g-ai"
                            height="280"
                            image="https://img.freepik.com/free-vector/intelligent-interface-abstract-concept-illustration_335657-3797.jpg?w=740&t=st=1680514755~exp=1680515355~hmac=7034b07b1c7474bbaea1d94a64f96fd1b91587ad6a8de1ef66ec68489d9de380"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" sx={{ color: '#0664a8' }}>
                                Generative AI
                            </Typography>
                            <Typography variant="h7" color="#010203 " sx={{ lineHeight: 1.2 }}>
                                <span style={{ color: '#0664a8' }}>GPT-3</span>, designed by <span style={{ color: '#0664a8' }}>OPENAI</span>, is one of the most well-known generative AI models.
                                <br /> <br />
                                Generative AI is the application of AI to produce novel goods and new objects. While generative AI is mostly used to create media content like lifelike images of people and things, it may also generate code, produce synthetic tabular data, and building materials and medications with certain qualities.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Read More</Button>
                            <Button size="small"> January 21, 2023</Button>
                        </CardActions>
                    </Card>

                    <Card sx={{
                        maxWidth: 400, ':hover': {
                            boxShadow: 20
                        },
                    }}>
                        <CardMedia
                            component="img"
                            alt="mlops"
                            height="280"
                            image=" https://img.freepik.com/free-vector/scientists-studying-neural-connections-programmers-writing-codes-machine-brain_74855-14157.jpg?w=1060&t=st=1680516993~exp=1680517593~hmac=26a813de619e42958a979366c38ebab223aca7466e7ec193e023dc769159efe9"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" sx={{ color: '#0664a8' }}>
                                MLOps
                            </Typography>
                            <Typography variant="h7" color="#010203 " sx={{ lineHeight: 1.2 }}>
                                The gap between machine learning, data science, and data engineering is filled by <span style={{ color: '#0664a8' }}>MLOps</span>.
                                <br /> <br />
                                A few top MLOps trends and forecasts for 2023 that will undoubtedly become more well-known in the sector such as -<span style={{ color: '#0664a8' }}>Data-based MLOps</span> , Identify Drift, Enhancing the value of ML solutions, An increase in the amount of MLOps libraries and packages ,Transferring AutoML to AutoMLOps.  </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Read More</Button>
                            <Button size="small"> March 22, 2023</Button>
                        </CardActions>
                    </Card>

                    <Card sx={{
                        maxWidth: 400, ':hover': {
                            boxShadow: 20
                        },
                    }}>
                        <CardMedia
                            component="img"
                            alt="Llm"
                            height="280"
                            image="https://img.freepik.com/free-vector/artificial-intelligence-abstract-concept-illustration_335657-3793.jpg?w=740&t=st=1680516261~exp=1680516861~hmac=a5ada1633a37e3ed6342c87ce5386c01d849336b9c017777078bfe88cc91f0ae"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" sx={{ color: '#0664a8' }}>
                                Large Language Models (LLMs)
                            </Typography>
                            <Typography variant="h7" color="#010203 " sx={{ lineHeight: 1.2 }}>
                                <span style={{ color: '#0664a8' }}>DALL-E 2</span>, an Open AI-developed generative AI, was released in July 2022, sending global waves through the AI community and the general public.
                                <br /> <br />
                                With the introduction of ChatGPT, a new type of LLM that served as the basis for generative AI and transformative neural networks made a clear exit. They are being hailed as innovative AI disruptors, including for business applications.                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Read More</Button>
                            <Button size="small"> February 03, 2023</Button>
                        </CardActions>
                    </Card>

                </Box>
            </Container>

            <Container maxWidth="70%" sx={{ mt: 10, color: 'black' }}>

                <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <Card sx={{
                        maxWidth: 400, ':hover': {
                            boxShadow: 20
                        },
                    }}>
                        <CardMedia
                            component="img"
                            alt="agw"
                            height="280"
                            image="https://img.freepik.com/free-vector/ai-travel-transportation-abstract-concept-illustration_335657-3791.jpg?w=740&t=st=1680516649~exp=1680517249~hmac=b91a0e202b67b207a1ee81723dfca4084a8c94fa91d8e5293b574e52fd561e26"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" sx={{ color: '#0664a8' }}>
                                Augmented Working
                            </Typography>
                            <Typography variant="h7" color="#010203 " sx={{ lineHeight: 1.2 }}>
                                <span style={{ color: '#0664a8' }}>By 2023</span>, most humans will be working alongside robots and intelligent machines that were created to assist them in performing their tasks more effectively.
                                <br /> <br />
                                AI-powered virtual assistants, who can rapidly respond to inquiries and automatically offer different, more effective ways to achieve goals, will also become increasingly common in the workplace.</Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Read More</Button>
                            <Button size="small"> March 01, 2023</Button>
                        </CardActions>
                    </Card>

                    <Card sx={{
                        maxWidth: 400, ':hover': {
                            boxShadow: 20
                        },
                    }}>
                        <CardMedia
                            component="img"
                            alt="personalization"
                            height="280"
                            image="https://img.freepik.com/free-vector/conversation-chat-bot-screen-phone-customer-tiny-man-talking-with-cute-robot-online-messenger-flat-vector-illustration-chatbot-ai-virtual-support-social-media-concept_74855-24047.jpg?w=996&t=st=1680516746~exp=1680517346~hmac=89091c1e4d69f5219e9bf2f415d85e6470cd40fd8e0f53ae7652dec7d954f13c"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" sx={{ color: '#0664a8' }}>
                                Increased Personalisation
                            </Typography>
                            <Typography variant="h7" color="#010203 " sx={{ lineHeight: 1.2 }}>
                                <span style={{ color: '#0664a8' }}>Machine learning (ML)</span> and  <span style={{ color: '#0664a8' }}>Artificial intelligence (AI)</span>  prediction skills are advancing rapidly, assisting organizations in gaining additional user insights.
                                <br /> <br />
                                In 2023, AI can be utilized to continue building websites, designing user interfaces, and creating effective marketing plans tailored to individual users’ needs.</Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Read More</Button>
                            <Button size="small"> March 08, 2023</Button>
                        </CardActions>
                    </Card>

                    <Card sx={{
                        maxWidth: 400, ':hover': {
                            boxShadow: 20
                        },
                    }}>
                        <CardMedia
                            component="img"
                            alt="ethical"
                            height="280"
                            image="https://img.freepik.com/free-vector/augmented-intelligence-abstract-concept-illustration_335657-3792.jpg?w=740&t=st=1680543149~exp=1680543749~hmac=91e9ad13b3b5af374b1819d570168b5098a8ba947009074532309de3b4d1757d"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" sx={{ color: '#0664a8' }}>
                                Ethical and Explainable AI
                            </Typography>
                            <Typography variant="h7" color="#010203 " sx={{ lineHeight: 1.2 }}>
                                It is crucial to create AI models that are more moral and comprehensible. But the most important factor is trust.
                                <br /> <br />
                                For many of the most valuable and potent AI use cases, this might be extremely private data, such as health or financial information. There will be initiatives to solve the  <span style={{ color: '#0664a8' }}>"black box"  (ML) </span>issue with AI in 2023. </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Read More</Button>
                            <Button size="small"> March 18, 2023</Button>
                        </CardActions>
                    </Card>


                </Box>
            </Container>
        </>
    );
}