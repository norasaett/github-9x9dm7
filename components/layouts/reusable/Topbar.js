import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import Link from "next/link";

export default function ButtonAppBar() {
  const [drawer, setDrawer] = useState(false);
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => {
                setDrawer(true);
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              MUI Demo Template
            </Typography>
            <Button color="inherit">hello</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer
        anchor="left"
        open={drawer}
        onClose={() => {
          setDrawer(false);
        }}
      >
        <Box
          sx={{
            width: "100%",
            minWidth: 200,
            maxWidth: 360,
            bgcolor: "background.paper",
          }}
        >
          <nav aria-label="main mailbox folders">
            <List>
              <ListItem disablePadding>
                <Link passHref={true} href="/">
                  <ListItemButton>
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Index" />
                  </ListItemButton>
                </Link>
              </ListItem>
              <ListItem disablePadding>
                <Link passHref={true} href="/about">
                  <ListItemButton>
                    <ListItemIcon>
                      <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="About" />
                  </ListItemButton>
                </Link>
              </ListItem>
              <ListItem disablePadding>
                <Link passHref={true} href="/empty">
                  <ListItemButton>
                    <ListItemText primary="Empty" />
                  </ListItemButton>
                </Link>
              </ListItem>
            </List>
          </nav>
        </Box>
      </Drawer>
    </>
  );
}
