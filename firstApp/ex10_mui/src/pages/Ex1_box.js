import React from 'react';
import {Box, Stack, Divider, Grid, Paper } from '@mui/material';

export default function Ex1_box()  {
    return (
        <div className='Ex1_box' style={{padding: '20px'}}>
            {/* stack */}
            <Stack sx={{
                border: '1px solid black',
                width: '500px',
                height: '500px',
                textAlign: 'center'
                }} 
                //    direction='row-reverse'
                   direction='column-reverse'

                   spacing={2}
                   divider={<Divider orientation='row' flexItem/>}
                   >
                <Box component={'div'} sx={{
                            backgroundColor : 'primary.main',
                            color : '#fff',
                            height : '100px',
                            width : '100px',
                            padding : '15px',
                            '&:hover' : {backgroundColor : 'primary.light' }
                        }}>
                    Box Test
                </Box>
                <Box display={'flex'} 
                    height='100px' 
                    width={'100px'}
                    bgcolor='success.light'
                    p={1.8}
                    sx={{
                        color: '#fff',
                        border:'1px dashed grey',
                        '&:hover' : {backgroundColor:'success.dark'}
                    }} >
                    Box test2
                </Box>
                <Box display={'flex'} 
                    height='100px' 
                    width={'100px'}
                    bgcolor='success.light'
                    p={1.8}
                    sx={{
                        color: '#fff',
                        border:'1px dashed grey',
                        '&:hover' : {backgroundColor:'success.dark'}
                    }} >
                    Box test3
                </Box>
            </Stack>
            {/* Grid */}
            <Grid container 
                divider={<Divider orientation='vertical' flexItem></Divider>}
                mt={5}
                spacing={1}
                style={{color: '#fff'}}
                sm={6}
                >

                <Grid item xs={1}>
                    <Box bgcolor={'primary.light'} p={2}>item1</Box>
                </Grid>
                <Grid item xs={2}>
                    <Box bgcolor={'primary.dark'} p={2}>item2</Box>
                </Grid>
                <Grid item xs={3}>
                    <Box bgcolor={'primary.main'} p={2}>item3</Box>
                </Grid>
                <Grid item xs={6}>
                    <Box bgcolor={'primary.light'} p={2}>item4</Box>
                </Grid>

            </Grid>

            {/* Grid 2 - 화면이 줄어들면 자동으로 메뉴가 vertical 로 바뀜 */}
            <Grid container 
                divider={<Divider orientation='vertical' flexItem></Divider>}
                mt={5}
                style={{color: '#fff'}}
                >

                <Grid item xs={12} sm>
                    <Box bgcolor={'primary.light'} p={2}>item1</Box>
                </Grid>
                <Grid item xs={12} sm>
                    <Box bgcolor={'primary.dark'} p={2}>item2</Box>
                </Grid>
                <Grid item xs={12} sm>
                    <Box bgcolor={'primary.main'} p={2}>item3</Box>
                </Grid>
                <Grid item xs={12} sm>
                    <Box bgcolor={'primary.light'} p={2}>item4</Box>
                </Grid>

            </Grid>

            {/* Grid 3 - 격자무늬 만들기 */}
            <Grid container 
                divider={<Divider orientation='vertical' flexItem></Divider>}
                mt={5}
                style={{color: '#fff'}}
                spacing={2}
                >

                <Grid item xs={6}>
                    <Box bgcolor={'primary.light'} p={2}>item1</Box>
                </Grid>
                <Grid item xs={6}>
                    <Box bgcolor={'primary.dark'} p={2}>item2</Box>
                </Grid>
                <Grid item xs={6}>
                    <Box bgcolor={'primary.main'} p={2}>item3</Box>
                </Grid>
                <Grid item xs={6}>
                    <Box bgcolor={'primary.light'} p={2}>item4</Box>
                </Grid>

            </Grid>

            {/* Paper */}
            <div style={{backgroundColor:'deepskyblue', height: '150px'}} >

            <Paper sx={{ 
                    p: '10px',
                    m: '10px',
                    backgroundColor: 'orange'
                }} 
                elevation={12} >
                <Grid container 
                    divider={<Divider orientation='vertical' flexItem></Divider>}
                    mt={5}
                    style={{color: '#fff'}}
                    >

                    <Grid item xs={12} sm>
                        <Box bgcolor={'primary.light'} p={2}>item1</Box>
                    </Grid>
                    <Grid item xs={12} sm>
                        <Box bgcolor={'primary.dark'} p={2}>item2</Box>
                    </Grid>
                    <Grid item xs={12} sm>
                        <Box bgcolor={'primary.main'} p={2}>item3</Box>
                    </Grid>
                    <Grid item xs={12} sm>
                        <Box bgcolor={'primary.light'} p={2}>item4</Box>
                    </Grid>

                </Grid>
            </Paper>
            </div>

        </div>

    );
}