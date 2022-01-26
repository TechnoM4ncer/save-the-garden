import { AppBar, Toolbar, Typography, IconButton, Badge } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import './Header.css';

const itemCount = 0;
export default function Header() {
    const displayDesktop = () => {
    return ( 
    <AppBar position="static" className={"header"}>
    <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="menu" className={"menu"}>
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" className={"typo"}>Gaia's Garden</Typography>
      <Badge color="secondary" badgeContent={itemCount}>
      <ShoppingCartIcon paddingLeft={"100vh"}/>
      </Badge>
    </Toolbar>
  </AppBar>
    )
  };
  
  return (
    <header>
      <AppBar className={"header"} >{displayDesktop()}</AppBar>
    </header>
  );
}