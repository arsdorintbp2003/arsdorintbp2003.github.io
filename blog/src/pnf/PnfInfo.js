import React from 'react';
import {
	Container, Typography, Paper, Grid, Link, Box, List, ListItem, Divider,
	Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Accordion, AccordionSummary, AccordionDetails
	} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Paper_football from '../assets/images/PNF/PaperFootball.jpg';

const theme = createTheme({
    typography: {
        fontFamily: [
            'Georgia',
            'serif'
        ].join(','),
        h1: {
            fontFamily: 'Linux Libertine, serif',
            fontSize: '3rem' // equivalent to 32px
        },
        h2: {
            fontFamily: 'Linux Libertine, serif',
            fontSize: '2.5rem' // equivalent to 24px
        },
        h3: {
            fontFamily: 'Linux Libertine, serif',
            fontSize: '2rem' // equivalent to 20px
        },
        h4: {
            fontFamily: 'Linux Libertine, serif',
            fontSize: '1.5rem' // equivalent to 16px
        },
        h5: {
            fontFamily: 'Linux Libertine, serif',
            fontSize: '1.25rem' // equivalent to 14px
        },
        h6: {
            fontFamily: 'Linux Libertine, serif',
            fontSize: '1rem' // equivalent to 12px
        },
        body1: {
            fontSize: '1rem' // equivalent to 16px
        },
        body2: {
            fontSize: '0.875rem' // equivalent to 14px
        },
    },
});

const PnfInfo = () => {
    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="lg">
                <Box my={4}>
                    <Typography variant="h3" component="h1" gutterBottom>
                        Paper Football
                    </Typography>
                    <Divider />
                    <Typography variant="h6" component="h2" gutterBottom>
                        From Namkeypedia
                    </Typography>
                </Box>

                <Grid container spacing={4}>
                    <Grid item xs={12} md={8}>
                        <Typography variant="body1" paragraph>
                            <a style={{ fontWeight: 'bold' }}>Paper football</a>, also known as <a style={{ fontWeight: 'bold' }}>Paper Foot Game</a>,
                            is a team game played between two teams of 11 players each. The game is played inside a
                            rectangular field called a pitch, which can be placed on a table top, or on the ground,
                            using a small paper ball. The objective is to score goals by flicking the paper player
                            inside the opponent's goal, which are made by different materials. The game is a replica
                            of <Link href="https://en.wikipedia.org/wiki/Association_football" underline="hover" color="primary">Association football</Link>,
							where the players are made from paper-related material. The game, similar to football, is
							divided into 2 halves, each half's period varies from 5 to 10 minutes depends on the rules.
                        </Typography>

                        <Typography variant="body1" paragraph>
                            In terms of law, due to the unique of the paper players' body, which is folded into 2 parts,
                            the "hole" between 2 sides is considered the player's hands. Hence, a player would be
                            considered to conduct a fault if the ball comes into that hole, except the goalkeepers. A
                            goalkeeper himself can "collect" or catch the ball by holding the ball inside his hole, and
                            can just use the hand inside the <Link href="https://en.wikipedia.org/wiki/Penalty_area" underline="hover" color="primary">penalty area</Link>.
                        </Typography>

                        <Typography variant="body1" paragraph>
                            In the PNF Universe, paper football is governed by PNF. Similar to <Link href="https://en.wikipedia.org/wiki/FIFA" underline="hover" color="primary">FIFA</Link>,
                            PNF has two types of competitions, International Competitions and Club Competitions. But
                            unlike FIFA, players from both genders can play together in the same competitions. The
                            highest rank competitions are PNF World Cup and PNF Champions League.
                        </Typography>


	                    <Paper elevation={3} sx={{ padding: 3, marginBottom: 4, width: "50%", backgroundColor: "#f5f5f5" }}>
	                        <Accordion>
	                            <AccordionSummary
	                                expandIcon={<ExpandMoreIcon />}
	                                aria-controls="contents-content"
	                                id="contents-header"
	                            >
	                                <Typography variant="h4">Contents</Typography>
	                                <Divider />
	                            </AccordionSummary>
	                            <AccordionDetails>
	                                <List>
	                                    <ListItem><Link href="#/pnf/Paper-football#name" underline="hover">Name</Link></ListItem>
	                                    <ListItem><Link href="#/pnf/Paper-football#history" underline="hover">History</Link></ListItem>
	                                    <ListItem><Link href="#gameplay" underline="hover" display='none'>Gameplay</Link></ListItem>
	                                    <ListItem><Link href="#laws" underline="hover" display='none'>Laws</Link></ListItem>
	                                    <ListItem><Link href="#players-equipment-officials" underline="hover" display='none'>Players, equipment, and officials</Link></ListItem>
	                                    <ListItem><Link href="#governing-bodies" underline="hover" display='none'>Governing bodies</Link></ListItem>
	                                    <ListItem><Link href="#competitions" underline="hover" display='none'>Competitions</Link></ListItem>
	                                    <ListItem><Link href="#see-also" underline="hover" display='none'>See also</Link></ListItem>
	                                    <ListItem><Link href="#notes" underline="hover" display='none'>Notes</Link></ListItem>
	                                    <ListItem><Link href="#references" underline="hover" display='none'>References</Link></ListItem>
	                                    <ListItem><Link href="#external-links" underline="hover" display='none'>External links</Link></ListItem>-->
	                                </List>
	                            </AccordionDetails>
	                        </Accordion>
	                    </Paper>

                        <Box id="name" my={4}>
                            <Typography variant="h4" component="h2" gutterBottom fontWeight='bold'>
                                Name
                            </Typography>
                            <Divider />
                            <Typography variant="body1" paragraph>
                                The game is known as paper football, or paper foot game. The name is based on the material
                                of the ball, which is the tissue, or players' material, which is made from carton or papers.
                            </Typography>
                        </Box>

                        <Box id="history" my={4}>
                            <Typography variant="h4" component="h2" gutterBottom fontWeight='bold'>
                                History
                            </Typography>
                            <Divider />
                            <Typography variant="body1" paragraph>
                                There is no clear evidence for the origin of paper football. But it has been received
                                significant attention after its feature in Season 4, episode "Anak Harimau" (meaning "Tiger Cubs")
                                of the cartoon series "Upin and Ipin.". With the simple rules and minimal material needed
                                to create the players, the game was getting attractiveness during that time to many people,
                                especially children and football fans.
                            </Typography>

                            <Typography variant="body1" paragraph>
                                In Vietnam, especially in the city, the lack of entertainment for children, including
                                football fields, had become a major issue. With a modern living lifestyle, parents can't
                                spend enough time to bring their children to the entertaining places, or at least play
                                with their children that often. Hence, paper football has been one of the most popular
                                game for children, which not only brought them the joy and competitiveness similar to football,
                                but also removed the parents fear of their children injury.
                            </Typography>
                            <Typography variant="h5" component="h4" gutterBottom fontWeight='bold'>
                                Adaptation in my neighbor area
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Although I have known the game from 'Upin & Ipin', I had just started playing the game
                                since my neighbor's friend builds different teams of his own. For 5 Years (2009 - 2014),
                                hundred of matches has been played among us and other friends, being an important part
                                of our childhood memory.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                There are many strong teams in this period, two of those are "Pulu" and "Izz" Team. Pulu
                                is an adaptation of the Pulu team in Upin & Ipin, the team that has faced Malaysia in
                                the imaginary World Cup in this cartoon. Izz is the strongest rival of Pulu, and also my
                                most used team during this period.
                            </Typography>
                            <Typography variant="h5" component="h4" gutterBottom fontWeight='bold'>
                                Foundation of PNF and the first 12 clubs
                            </Typography>
                            <Typography variant="body1" paragraph>
                                ... To be continued ...
                            </Typography>
                        </Box>

                        <Box id="gameplay" my={4} display='none'>
                            <Typography variant="h4" component="h2" gutterBottom fontWeight='bold' >
                                Gameplay
                            </Typography>
                            <Divider />
                            <Typography variant="body1" paragraph>
                                The game is played by flicking a triangular paper football across a table, aiming to score points by landing it on the opponent's side or through goalposts formed by the opponent's fingers.
                            </Typography>
                        </Box>

                        <Box id="laws" my={4} display='none'>
                            <Typography variant="h4" component="h2" gutterBottom fontWeight='bold'>
                                Laws
                            </Typography>
                            <Divider />
                            <Typography variant="body1" paragraph>
                                The laws of paper football vary, but generally include rules on scoring, fouls, and the dimensions of the playing field.
                            </Typography>
                            <Typography variant="h5" component="h3" gutterBottom>
                                Players, equipment, and officials
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Paper football requires minimal equipment: just a folded piece of paper and a table. There are no officials in casual play, but formal competitions may have referees.
                            </Typography>
                        </Box>

                        <Box id="governing-bodies" my={4} display='none'>
                            <Typography variant="h4" component="h2" gutterBottom fontWeight='bold'>
                                Governing bodies
                            </Typography>
                            <Divider />
                            <Typography variant="body1" paragraph>
                                While there is no official governing body for paper football, several informal associations and leagues exist worldwide.
                            </Typography>
                        </Box>

                        <Box id="competitions" my={4} display='none'>
                            <Typography variant="h4" component="h2" gutterBottom fontWeight='bold'>
                                Competitions
                            </Typography>
                            <Divider />
                            <Typography variant="body1" paragraph>
                                Various competitions are held for paper football, ranging from school tournaments to larger events organized by enthusiasts.
                            </Typography>
                        </Box>

                        <Box id="see-also" my={4} display='none'>
                            <Typography variant="h4" component="h2" gutterBottom fontWeight='bold'>
                                See also
                            </Typography>
                            <Divider />
                            <List>
                                <ListItem><Link href="#" underline="hover">Finger football</Link></ListItem>
                                <ListItem><Link href="#" underline="hover">Tabletop games</Link></ListItem>
                            </List>
                        </Box>

                        <Box id="notes" my={4} display='none'>
                            <Typography variant="h4" component="h2" gutterBottom fontWeight='bold'>
                                Notes
                            </Typography>
                            <Divider />
                            <Typography variant="body1" paragraph>
                                [a] Also known as finger football.
                            </Typography>
                        </Box>

                        <Box id="references" my={4} display='none'>
                            <Typography variant="h4" component="h2" gutterBottom fontWeight='bold'>
                                References
                            </Typography>
                            <Divider />
                            <Typography variant="body1" paragraph>
                                [1] "The History of Paper Football". Archived from the original on January 1, 2020.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                [2] "How to Play Paper Football". Retrieved February 2, 2021.
                            </Typography>
                        </Box>

                        <Box id="external-links" my={4} display='none'>
                            <Typography variant="h4" component="h2" gutterBottom fontWeight='bold'>
                                External links
                            </Typography>
                            <Divider />
                            <List>
                                <ListItem><Link href="https://en.wikipedia.org/wiki/Paper_football" underline="hover">Paper football on Wikipedia</Link></ListItem>
                                <ListItem><Link href="https://www.wikihow.com/Play-Paper-Football" underline="hover">How to Play Paper Football on WikiHow</Link></ListItem>
                            </List>
                        </Box>
                    </Grid>

	                <Grid item xs={12} md={4}>
                        <Box display="flex" justifyContent="center" marginBottom="1vh">
                            <a variant="body1" style={{ fontWeight: 'bold', textAlign: 'center'}}>Paper football</a>
                        </Box>
                        <Paper elevation={3} sx={{ padding: 3, marginBottom: 4, backgroundColor: "#f5f5f5" }}>
                            <img
                                src={Paper_football}
                                alt="Paper Football"
                                style={{ width: '100%', maxWidth: '500px', height: 'auto', margin: '1vh 0 0 0' }}
                            />
                            <Typography variant="h6" component="h3" gutterBottom textAlign="center">
                                The attacking player (No. 22) attempts to take a free-kick and scores the goal.
                            </Typography>
							<Table>
				                <TableBody>
				                    <TableRow>
				                        <TableCell><strong>Highest governing body</strong></TableCell>
				                        <TableCell>PNF (Paper-football Novel Federation)</TableCell>
				                    </TableRow>
				                    <TableRow>
				                        <TableCell><strong>Other names</strong></TableCell>
				                        <TableCell>Paper Foot Game</TableCell>
				                    </TableRow>
				                    <TableRow>
				                        <TableCell><strong>Being well-known for</strong></TableCell>
				                        <TableCell>Appearing in 'Upin & Ipin'</TableCell>
				                    </TableRow>
				                    <TableRow>
				                        <TableCell><strong>Equipment</strong></TableCell>
				                        <TableCell>Paper ball</TableCell>
				                    </TableRow>
				                    <TableRow>
				                        <TableCell><strong>Venue</strong></TableCell>
				                        <TableCell>
				                            <a>Table</a><br/>
				                            <a>Ground</a>
				                        </TableCell>
				                    </TableRow>
				                    <TableRow>
				                        <TableCell><strong>Country or region</strong></TableCell>
				                        <TableCell>Worldwide</TableCell>
				                    </TableRow>
				                </TableBody>
				            </Table>
                        </Paper>
                    </Grid>
	            </Grid>
	        </Container>
	    </ThemeProvider>
    );
}

export default PnfInfo;
