import { Box, Button, Stack,
    Card, CardContent, Typography, 
    CardMedia, CardActions,
    Avatar, CardHeader, IconButton } from '@mui/material';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SendIcon from '@mui/icons-material/Send';

function Ex3_cards()    {
    return (
        <div className="Ex3_cards">
            <Stack direction='row' spacing={2}>
                <Box width='300px'>
                    <Card>
                        <CardMedia height='140'
                                component={'img'}
                                image = 'https://source.unsplash.com/random' 
                                alt='random Image'/>
                        <CardContent >
                            <Typography variant='h5' component={'div'} >
                                카드연습 1
                            </Typography>
                            <Typography variant='body1'>
                                카드내용 1
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant='contained' 
                                    size='small' 
                                    endIcon={<SendIcon />}>Prev</Button> 
                            <Button variant='contained' 
                                    size='small' 
                                    endIcon={<SendIcon />}>Go to Post</Button> 
                        </CardActions>
                    </Card>
                </Box>
                <Box width='300px'>
                    <Card>
                        <CardHeader 
                            avatar={
                                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                  R
                                </Avatar>
                              }
                              action={
                                <IconButton aria-label="settings">
                                  <MoreVertIcon />
                                </IconButton>
                              }
                              title="Shrimp and Chorizo Paella"
                              subheader="September 14, 2016"
                        />
                        <CardMedia height='140'
                                component={'img'}
                                image = 'https://source.unsplash.com/random' 
                                alt='random Image'/>
                        <CardContent >
                            <Typography variant='h5' component={'div'} >
                                카드연습 2
                            </Typography>
                            <Typography variant='body1'>
                                카드내용 2
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant='contained' 
                                    size='small' 
                                    endIcon={<SendIcon />}>Prev</Button> 
                            <Button variant='contained' 
                                    size='small' 
                                    endIcon={<SendIcon />}>Go to Post</Button> 
                        </CardActions>
                    </Card>
                </Box>
            </Stack>
        </div>
    )
}

export default Ex3_cards;