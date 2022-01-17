import React, { useEffect, useState } from 'react';
import { Typography, AppBar, Toolbar, Link, Container, 
        Box, Menu, MenuItem, IconButton, useScrollTrigger } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import styled from 'styled-components';

const menuOptions = ['HOME', 'ABOUT ME', 'PROJECTS', 'RESUME', 'CONTACT'];

const StyledAppBar = styled(AppBar)`
background-color: rgba(73,67,55,0.0);
transition: 1000ms;
`

const StyledLink = styled(Typography)`
margin: 10px;
color: white;
font-size: 1.0em;
:hover{
    color: #1093e1;
}
`

const Hamburger = styled(MenuIcon)`
fill: white;
`

function Header(){
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
    
    return (
        <StyledAppBar id="nav" elevation={0} position="sticky">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* HAMBURGER MENU */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                          size="large"
                          aria-label="account of current user"
                          aria-controls="menu-appbar"
                          aria-haspopup="true"
                          onClick={handleOpenNavMenu}
                          color="inherit"
                        >
                            <Hamburger  />
                        </IconButton>

                        <Menu
                          id="menu-appbar"
                          anchorEl={anchorElNav}
                          anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                          }}
                          keepMounted
                          transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                          }}
                          open={Boolean(anchorElNav)}
                          onClose={handleCloseNavMenu}
                          sx={{
                            display: { xs: 'block', md: 'none' }
                          }}
                        >
                          {menuOptions.map((option) => (
                            <MenuItem key={option} onClick={handleCloseNavMenu}>
                                <Link
                                    href={"#".concat(option.replace(/\s+/g, '').toLowerCase())}
                                    key={option}
                                    underline="none">
                              <StyledLink textAlign="center">{option}</StyledLink>
                              </Link>
                            </MenuItem>
                          ))}
                        </Menu>
                    </Box>
                    {/* END HAMBURGER MENU */}

                    {/* TEXT LINKS FOR HEADER */}
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md:'flex'},
                             alignItems: 'center', justifyContent: 'center'}}>
                       {menuOptions.map((option) => (
                           <Link
                            href={"#".concat(option.replace(/\s+/g, '').toLowerCase())}
                            key={option}
                            underline="none">
                               <StyledLink align="center"
                                           variant="button">{option}</StyledLink>
                           </Link>
                       ))}
                    </Box>
                    {/* END OF TEXT LINKS FOR HEADER */}

                </Toolbar>
            </Container>
        </StyledAppBar>

    )
};

export default Header;