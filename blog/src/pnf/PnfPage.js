import React from 'react';
import { Container, Typography, Paper, Grid, Link, Box } from '@mui/material';

const PnfPage = () => {
    return (
        <Container maxWidth="lg">
            <Paper elevation={3} sx={{ padding: 2, marginBottom: 4, backgroundColor: '#f9f9f9' }}>
                <Box textAlign="center" my={4}>
                    <Typography variant="h4" component="h1" fontSize="4.5vh" gutterBottom>
                        Welcome to the <Link href="/blog/#/pnf/Paper-football" underline="hover" color="primary">PNF Paper Football Page</Link>.
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        My paper football (based on ETS Paper Foot Game) corner with all stats of the tournaments, players in the "PNF Universe"
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        17 articles in English and Vietnamese
                    </Typography>
                </Box>
            </Paper>


            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    {/* Featured Article */}
                    <Paper elevation={3} sx={{ padding: 2, marginBottom: 4 }}>
                        <Typography variant="h5" component="h2" gutterBottom>
                            From today's featured article
                        </Typography>
                        <Typography variant="h6" component="h3" gutterBottom>
                            History of Paper Football
                        </Typography>
                        <Typography variant="body1" paragraph>
                            Paper football, a simple yet engaging game, has entertained school children for decades. It replicates football, with 11 players from each team playing to win by kicking the ball into the net...
                        </Typography>
                        <Link href="#" underline="hover">Read more...</Link>
                    </Paper>

                    {/* Did You Know */}
                    <Paper elevation={3} sx={{ padding: 2, marginBottom: 4 }}>
                        <Typography variant="h5" component="h2" gutterBottom>
                            Did you know...
                        </Typography>
                        <ul>
                            <li>
                                <Typography variant="body1">
                                    ... that paper football has a been widely introduced through the cartoon "Upin & Ipin".
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="body1">
                                    ... that players take turns by passing the balls to the teammates, dribbling, or kicking the ball.
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="body1">
                                    ... that the game can be played with different variations of rules?
                                </Typography>
                            </li>
                        </ul>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                    {/* In the News */}
                    <Paper elevation={3} sx={{ padding: 2, marginBottom: 4 }}>
                        <Typography variant="h5" component="h2" gutterBottom>
                            In the news
                        </Typography>
                        <Typography variant="body1" paragraph>
                            2 consecutive Friendly Matches has been conducted between Vietnam 2013 Team & BlackPink FC, to celebrates Born Pink Hanoi 1st Anniversary...
                        </Typography>
                        <Typography variant="body1" paragraph>
                            World Team has won their 1st Title in PNF Copa America 2024 after an emotional final against Brazil...
                        </Typography>
                        <Link href="#" underline="hover">Read more...</Link>
                    </Paper>

                    {/* On This Day */}
                    <Paper elevation={3} sx={{ padding: 2 }}>
                        <Typography variant="h5" component="h2" gutterBottom>
                            On this day
                        </Typography>
                        <Typography variant="body1" paragraph>
                            <strong>July 30th</strong>
                        </Typography>
                        <Typography variant="body1" paragraph>
                            2023: Born Pink Hanoi World Tour has been conducted, which is the inspiration for the establishment of Black Pink FC
                        </Typography>
                        <Link href="#" underline="hover">Read more...</Link>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
}

export default PnfPage;
