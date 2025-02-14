import { AppBar, Box, Container, Input, InputLabel, Menu, MenuItem, Toolbar, Typography } from "@mui/material"
import { Black_And_White_Picture } from "next/font/google"


const Navbar=()=> {
  return (
    <AppBar position="static">
        <Container>
            <Toolbar >
            
               <MenuItem>Home</MenuItem>
               <MenuItem>User</MenuItem>
               <MenuItem>Account</MenuItem>
               <MenuItem>Category</MenuItem>
            </Toolbar>
        </Container>
    </AppBar>
  )
}

export default Navbar