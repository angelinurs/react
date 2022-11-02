import { useState } from 'react'

import {AppBar, Container, Box, IconButton, Toolbar,
    Typography, Menu, MenuItem, Button  } from '@mui/material';

import DynamicFeedTwoToneIcon from '@mui/icons-material/DynamicFeedTwoTone';
import WidgetsIcon from '@mui/icons-material/Widgets';

const pages = [ 'Java', 'Mysql', 'ORM-Mybatis', 'MVC', 'Spring', 'React' ];

function NavTop()   {
    
    const [anchorElNav, setAnchorElNav] = useState( null );

    const handleOpenNavMenu = (e) => {
        setAnchorElNav( e.currentTarget );
    }

    const handleCloseNavMenu = () => {
        setAnchorElNav( null );
    }
    
    return( 
        <div className="NavTop">
            <AppBar position='static' color='primary'>
                <Container maxWidth='x1'>
                        <Toolbar disableGutters>
                        {/* 
                            # AppBar 의 메인 아이컨 생성
                        */}
                        <DynamicFeedTwoToneIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1}} />

                        {/* 
                            # LOGO icon 옆의 사이트 이름 생성
                        */}
                        <Typography 
                            variant='h6'
                            noWrap
                            component={'a'}
                            href='/'
                            sx={{
                                mr: 2,
                                display: { xs:'none', md:'flex' },
                                fontFamily: 'nonospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none'
                            }}
                            >
                            React-MUI
                        </Typography>

                        <Box sx={{ flowGrow: 1, display: { xs: 'flex', md: 'none'}}} >
                            {/* 
                                # 3 선 메뉴 아이콘 만들기
                            */}
                            <IconButton
                                size='large'
                                aria-label='account of current user'
                                aria-controls='menu-adapter'
                                aria-haspopup='true'
                                onClick={handleOpenNavMenu}
                                color='inherit'
                            >
                                <WidgetsIcon />
                            </IconButton>
                            {/* 
                                # 3 선 메뉴 이벤트 적용하기
                            */}
                            <Menu
                                id='menu-appbar'
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'lef'
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left'
                                }}
                                open={Boolean( anchorElNav ) }
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' }
                                }}
                            >
                                {pages.map( (page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign={'center'}>{page}</Typography>
                                    </MenuItem>
                                ))}

                            </Menu>
                        </Box>
                        {/* 
                            # 화면 축소시 메뉴 bar 에 보여질 애들 만들기
                        */}
                        <DynamicFeedTwoToneIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1}} />
                        <Typography
                            variant='h5'
                            noWrap
                            component={'a'}
                            href=''
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none'
                            }}
                        >
                            React-MUI
                        </Typography>
                        {/* 
                            # AppBar 에 메인 메뉴 생성
                        */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex'} }}>
                            {pages.map( (page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my:2, color: 'white', display: 'block' }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>
                    </Toolbar>
                        

                </Container>
            </AppBar>

        </div>
    );
}

export default NavTop;