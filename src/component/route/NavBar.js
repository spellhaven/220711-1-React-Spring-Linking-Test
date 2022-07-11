import { AppBar, Toolbar, IconButton, Typography, Button } from "@material-ui/core";

import React from "react";

function NavBar() {
    return (
        <div>
        <AppBar position="static">
            <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                리발놈으로 만드는 회원목록
            </Typography>
            </Toolbar>
        </AppBar>
        </div>
    );

}

export default NavBar;