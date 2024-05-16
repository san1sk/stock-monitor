import { useEffect } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";
import AuthenticationBtn from "../AuthenticationBtn";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutBtn from "../LogoutBtn";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';



function Nav() {

    const { isAuthenticated } = useAuth0();

    if (isAuthenticated) {
        return (
            // {/* <div className="navbar-fixed">
            //     <nav className="black" role="navigation">
            //         <div className="nav-wrapper container">
            //         <a id="logo-container" className="brand-logo">Stock Tracker</a>
            //         <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            //             <ul className="right hide-on-med-and-down">
            //                 <li><Link to="/dashboard">Dashboard</Link></li>
            //                 <li><Link to="/current">Current Stocks</Link></li>
            //                 <li><Link to="/interested">Interested Stocks</Link></li>
            //                 <li><AuthenticationBtn /></li>
            //             </ul>
            //         </div>
            //     </nav>
            // </div> */}
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{
                    backgroundColor: "#404040"
                }}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{
                        flexGrow: 1, mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}>
                            Stock Monitor
                        </Typography>
                        <AuthenticationBtn />
                    </Toolbar>
                </AppBar>
            </Box>
        );
    }
    return (
        // <div>
        //     <div className="navbar-fixed">
        //         <nav className="black" role="navigation">
        //             <div className="nav-wrapper container">
        //                 <a id="logo-container" className="brand-logo">Stock Tracker</a>
        //                 <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
        //                 <ul className="right hide-on-med-and-down">
        //                     <li><AuthenticationBtn /></li>
        //                 </ul>
        //             </div>
        //         </nav>
        //     </div>

        //     <ul id="nav-mobile" className="right sidenav">
        //         <li><AuthenticationBtn /></li>
        //     </ul>
        // </div>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{
                backgroundColor: "#404040"
            }}>
                <Toolbar>
                    <Typography variant="h6" noWrap component="a" href="/" sx={{
                        flexGrow: 1, mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}>
                        Stock Monitor
                    </Typography>

                    <AuthenticationBtn />
                </Toolbar>
            </AppBar>
        </Box>
    );

}

export default Nav;
