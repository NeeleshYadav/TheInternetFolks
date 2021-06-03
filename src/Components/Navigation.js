import React from 'react';
import {NavBar, MenuBar, LoginBar, Button} from '../StyledComponents/NavigationStyle'
import Logo from '../SVGStyles/logo.svg'

function Navigation() {
    return (
        <div>
          <NavBar>
           <img src={Logo} alt="Logo"></img>
           <MenuBar>
               <Button normal>Features</Button>
               <Button normal>Pricing</Button>
               <Button normal>Resources</Button>
           </MenuBar>
            <LoginBar>
               <Button normal>Login</Button>
               <Button>SignUp</Button>
            </LoginBar>
        </NavBar>
        </div>
    )
}

export default Navigation