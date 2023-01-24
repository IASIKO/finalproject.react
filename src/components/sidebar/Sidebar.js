import {
  alpha,
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { useCategories } from "../../redux";
import { SidebarHeader } from "./SidebarHeader";

const StyledListItem = styled(ListItem)(() => ({
  padding: "5px 0px 3px 15px",
  margin: "0px",
}));

export const Sidebar = () => {
  const sidebarItems = useCategories();

  const categoryItems = sidebarItems.map((sidebarItem) => {
    const { _id, name } = sidebarItem;
    return (
      <React.Fragment key={_id}>
        <Link to={`/products/categories/${name}?page=1&sort=name,asc`}>
          <Box sx={{ display: "flex" }}>
            <StyledListItem>
              <ListItemText secondary={name} />
            </StyledListItem>
          </Box>
        </Link>
      </React.Fragment>
    );
  });

  const drawer = (
    <div>
      <Divider />
      <List>
        {categoryItems.map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon></ListItemIcon>
              <ListItemText primary={text} style={{ textDecoration: "none" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );
  return (
    <div>
      <Divider />
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "block" },
          "& .MuiDrawer-paper": {
            width: "250px",
            height: "100%",
          },
        }}
        open={true}
      >
        <SidebarHeader />
        <List>{drawer}</List>
      </Drawer>
      <Divider />
    </div>
  );
};
